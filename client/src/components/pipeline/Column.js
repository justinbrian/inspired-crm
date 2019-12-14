import React, { Component } from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";

const Container = styled.div`
   margin: 4px;
   border: 1px solid lightgrey;
   border-radius: 2px;
   width: 100vh;
   display: flex;
   flex-direction: column;
   height: 70vh;
   position: relative;
`;
const Title = styled.h6`
   padding: 8px;
   font-size: 0.9em;
   text-transform: uppercase;
   text-align: center;
   font-weight: bold;
`;
const TaskList = styled.div`
   padding: 8px;
   transition: background-color 0.2s ease;
   background-color: ${props => (props.isDraggingOver ? "skyblue" : "white")};
   flex-grow: 1;
   min-height: 100px;
`;

export default class Column extends Component {
   render() {
      return (
         <Container>
            <Title>{this.props.column.title}</Title>
            <Droppable droppableId={this.props.column.id}>
               {provided => (
                  <TaskList
                     ref={provided.innerRef}
                     {...provided.droppableProps}
                  >
                     {this.props.tasks.map((task, index) => {
                        return <Task key={task.id} task={task} index={index} />;
                     })}
                     {provided.placeholder}
                  </TaskList>
               )}
            </Droppable>
         </Container>
      );
   }
}
