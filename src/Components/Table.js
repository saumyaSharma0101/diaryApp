import React from "react";
import { useState } from "react";

//table mein
// 1. S. No
// 2. Title
// 3. Message
// 4. Time
// 5. Edit Button
// 6. Delete Button
// Sort By functionality above table

function Table(props) {
  const { datas, onEdit, onDelete } = props;
  console.log("props:", datas, "ddd", datas.length);

  return (
    <>
      <table>
        <tr>
          <th>S.No.</th>
          <th>Title</th>
          <th>Message</th>
          <th>Time</th>
          <th></th>
          <th></th>
        </tr>

        {datas.length > 0 &&
          datas.map((item, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.message}</td>
                <td>{item.time}</td>
                <td>
                  <button
                    onClick={() => {
                      onEdit(item, index);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button onClick={() => onDelete(index)}>Delete</button>
                </td>
              </tr>
            );
          })}
      </table>
    </>
  );
}

export default Table;
