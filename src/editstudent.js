import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./styles.css";
export default function Details() {
  let param = useParams();
  let navigate = useNavigate();
  let url = "https://64dc92dbe64a8525a0f6b61e.mockapi.io/students/";
  let [detail, setDetail] = useState({});
  useEffect(() => {
    fetch(url + param.id)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setDetail(data);
      });
  }, []);

  return (
    <>
      <div className="box">
        <div class="card" style={{ width: "18rem;" }}>
          <img src={detail.avatar} class="card-img-top" alt="No file"></img>
          <div class="card-body">
            <h5 class="card-title">Name:{detail.name}</h5>
            <p class="card-text">Email:{detail.email}</p>
            <p class="card-text">Contact:{detail.contact}</p>
            <p class="card-text">City:{detail.city}</p>
            <button
              class="btn btn-primary"
              onClick={() => {
                navigate("/student/edit/" + param.id);
              }}
            >
              Edit
            </button>
            &nbsp;
            <button
              class="btn btn-danger"
              onClick={() => {
                fetch(url + param.id, { method: "delete" }).then((data) => {
                  navigate("/student");
                });
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
