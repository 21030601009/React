import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
const url = "https://64dc92dbe64a8525a0f6b61e.mockapi.io/students";
export default function Student() {
  let [arr, setArr] = useState([]);
  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      setArr(data);
    });
  let f = arr.map((obj) => {
    return (
      <>
        <div class="card" style={{ width: "18rem;" }}>
          <img src={obj.avatar} class="card-img-top" alt="No file"></img>
          <div class="card-body">
            <h5 class="card-title">{obj.name}</h5>
            <p class="card-text">{obj.email}</p>
            <Link to={"../student/" + obj.id} class="btn btn-dark">
              View
            </Link>
          </div>
        </div>
      </>
    );
  });
  return <div className="box">{f}</div>;
}
