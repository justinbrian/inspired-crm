// TableRow.js

import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class TableRow extends Component {
   constructor(props) {
      super(props);
      this.delete = this.delete.bind(this);
   }
   delete() {
      axios
         .get("/contacts/delete/" + this.props.obj._id)
         .then(console.log("Deleted"))
         .catch(err => console.log(err));
   }

   render() {
      return (
         <tr>
            <td>{this.props.obj.lname}</td>
            <td>{this.props.obj.fname}</td>
            <td>{this.props.obj.phone}</td>
            <td>
               <Link
                  to={"/edit/" + this.props.obj._id}
                  className="btn btn-primary"
               >
                  Edit
               </Link>
            </td>
            <td>
               <button onClick={this.delete} className="btn btn-danger">
                  Delete
               </button>
            </td>
         </tr>
      );
   }
}

export default TableRow;
