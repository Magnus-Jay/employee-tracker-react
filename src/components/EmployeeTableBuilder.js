import React from "react";

function EmployeeTableBuilder(props) {



    return <div>

        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Employee #</th>
                    <th scope="col">Image</th>
                    <th scope="col">Name </th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                </tr>
            </thead>
            <tbody>

                {props.data.map((data, index) => {
                    return (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td><img src={data.picture.thumbnail} alt="employee pictures" /></td>
                            <td>{data.name.first} {data.name.last}</td>
                            <td>{data.phone}</td>
                            <td>{data.email}</td>
                            <td>{data.dob.date}</td>
                        </tr>
                    )

                })}
            </tbody>
        </table>
    </div>
}
export default EmployeeTableBuilder;