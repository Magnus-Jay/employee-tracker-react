import React from "react";
import App from "../App";

function tableHeader(){
    return(
     <table className="table">
        <thead className="thead-dark">
        <tr>
          <th scope="col"># Employee ID</th>
          <th scope="col">Img</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
       </tr>
    </thead>
    </table>
     )}

export default tableHeader;