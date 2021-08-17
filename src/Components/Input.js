import React from "react";
import { useState } from "react";
import Table from "./Table";

//diary app.....input -->2  title+msg + add btn

function Input() {
  const [title, settitle] = useState("");
  const [message, setmessage] = useState("");
  const [data, setdata] = useState([]);
  const [sortValue, setsortValue] = useState("time");

  function addData() {
    if (title != "" && message != "") {
      const Time = new Date().toLocaleTimeString();

      let newdata = { title: title, message: message, time: Time };
      setdata([...data, newdata]);
      settitle("");
      setmessage("");
    }
  }

  function sort(ev) {
    setsortValue(ev.target.value);
    let newdata = data;
    if (ev.target.value === "title") {
      data.sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0));
    } else {
      data.sort((a, b) => (a.time > b.time ? 1 : b.time > a.time ? -1 : 0));
    }

    // console.log(ev.target.value);
    // console.log(newdata);
  }

  function onEdit(item, idx) {
    onDelete(idx);
    settitle(item.title);
    setmessage(item.message);
  }

  function onDelete(id) {
    let newdata = data.filter((item, index) => index != id);
    setdata(newdata);
    //console.log(newdata);
  }
  //console.log(title, message, data);

  return (
    <>
      <label htmlFor="title">Title: </label>
      <input
        id="title"
        type="text"
        name="title"
        value={title}
        onChange={(ev) => {
          settitle(ev.target.value);
        }}
      />
      <br />
      <label htmlFor="message">Message: </label>
      <textarea
        id="message"
        type="text"
        name="message"
        value={message}
        onChange={(ev) => {
          setmessage(ev.target.value);
        }}
      ></textarea>
      <br />
      <button onClick={addData}>ADD</button>
      <br />
      <br />
      <div>
        Sort:
        <select value={sortValue} onChange={sort}>
          <option value="title">title</option>
          <option value="time">time</option>
        </select>
      </div>
      <br />
      <Table datas={data} onEdit={onEdit} onDelete={onDelete} />
    </>
  );
}

export default Input;
