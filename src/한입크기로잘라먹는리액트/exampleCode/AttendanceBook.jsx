import React from "react";

const students = [
    {id: 1, name: "째잉",},
    {id: 2, name: "하이",},
    {id: 3, name: "쩨로",},
    {id: 4, name: "로물",},
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li>{student.name}</li>
            })}
        </ul>
    );
}

export default AttendanceBook;