import React, { Component } from "react";
import initialData from "./initial-data";
import Column from "./Column";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";

// Dashboard components.
import DashboardNavbar from "../dashboard/DashboardNavbar";
import DashboardFooter from "../dashboard/DashboardFooter";

const Container = styled.div`
   display: flex;
   width: 1700px;
   margin: auto;
`;

class Pipeline extends Component {
   state = initialData;

   onDragStart = () => {
      document.body.style.color = "black";
      document.body.transition = "background-color 0.2s ease";
   };

   onDragUpdate = update => {
      const { destination } = update;
      const opacity = destination
         ? destination.index / Object.keys(this.state.tasks).length
         : 0;

      document.body.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
   };

   onDragEnd = result => {
      // document.body.style.color = 'inherit'
      // document.body.style.backgroundColor = 'inherit'

      const { destination, source, draggableId } = result;

      if (!destination) return;

      if (
         destination.droppableId === source.droppableId &&
         destination.index === source.index
      ) {
         return;
      }

      const startColumn = this.state.columns[source.droppableId];
      const finishColumn = this.state.columns[destination.droppableId];

      if (startColumn === finishColumn) {
         const newTaskIds = Array.from(startColumn.taskIds);
         // move the task id from its old index to its new index
         newTaskIds.splice(source.index, 1); // remove the id
         newTaskIds.splice(destination.index, 0, draggableId); // re-add it to new position

         const newColumn = { ...startColumn, taskIds: newTaskIds };

         const newState = {
            ...this.state,
            columns: {
               ...this.state.columns,
               [newColumn.id]: newColumn
            }
         };

         this.setState(newState);
         return;
      }

      // Moving from one list to another
      const startTaskIds = Array.from(startColumn.taskIds);
      startTaskIds.splice(source.index, 1);
      const newStartColumn = { ...startColumn, taskIds: startTaskIds };

      const finishTaskIds = Array.from(finishColumn.taskIds);
      finishTaskIds.splice(destination.index, 0, draggableId);
      const newFinishColumn = { ...finishColumn, taskIds: finishTaskIds };

      const newState = {
         ...this.state,
         columns: {
            ...this.state.columns,
            [newStartColumn.id]: newStartColumn,
            [newFinishColumn.id]: newFinishColumn
         }
      };

      this.setState(newState);
   };

   render() {
      return (
         <div>
            <DashboardNavbar />
            <div class="section">
               <div class="card-panel pipeline-col z-depth-1">
                  <DragDropContext
                     onDragStart={this.onDragStart}
                     onDragUpdate={this.onDragUpdate}
                     onDragEnd={this.onDragEnd}
                  >
                     <Container>
                        {this.state.columnOrder.map(columnId => {
                           const column = this.state.columns[columnId];
                           const tasks = column.taskIds.map(
                              taskId => this.state.tasks[taskId]
                           );

                           return (
                              <Column
                                 key={column.id}
                                 column={column}
                                 tasks={tasks}
                              />
                           );
                        })}
                     </Container>
                  </DragDropContext>
               </div>
            </div>
            <br />
            <br />

            <DashboardFooter />
         </div>
      );
   }
}

export default Pipeline;
