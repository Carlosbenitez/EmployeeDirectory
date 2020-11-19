import React from "react"

function Table(props) {
    //add script to sort values
    return (
        <table class="table" id="tableContent">
            <thead>
                <tr>
                    <th scope="col" id="pictureHeader">Picture</th>
                    <th scope="col" id="nameHeader" onClick={props.handleSubmitFirst}>First Name</th>
                    <th scope="col" id="nameHeader" onClick={props.handleSubmitLast}>Last Name</th>
                    <th scope="col" id="emailHeader">Email</th>
                    <th scope="col" id="phoneHeader">Phone Number</th>
                </tr>
            </thead>
            <tbody>
                {props.employees.length > 0 ? props.employees.map(person => {
                    return (
                        <tr>
                            <td id="picture"><img alt="employee images" src={person.picture.medium} /></td>
                            <td id="name">{person.name.first}</td>
                            <td id="name">{person.name.last}</td>
                            <td id="email">{person.email}</td>
                            <td id="phone">{person.phone}</td>
                        </tr>
                    )
                }) :
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>}

            </tbody>
        </table>
    )
}

export default Table