import "./styles.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Adddetail() {
  let navigate = useNavigate();
  let param = useParams();

  const [data, setData] = useState({});
  let url = "https://64dc92dbe64a8525a0f6b61e.mockapi.io/students/";

  useEffect(() => {
    if (!(param.id > 0)) {
      setData({});
    } else {
      fetch(url + param.id)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setData(res);
        });
    }
  }, []);

  return (
    <>
      <div class="main">
        <div class="addForm">
          <form>
            <tr>
              <td>Name:</td>
              <td>
                <input
                  type="text"
                  placeholder="Enter Name"
                  value={data.name}
                  onChange={(e) => {
                    setData({ ...data, name: e.target.value });
                  }}
                ></input>
              </td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>
                <input
                  type="email"
                  placeholder="Enter Email"
                  value={data.email}
                  onChange={(e) => {
                    setData({ ...data, email: e.target.value });
                  }}
                ></input>
              </td>
            </tr>
            <tr>
              <td>Avatar:</td>
              <td>
                <input
                  type="url"
                  placeholder="Enter Avatar link"
                  value={data.avatar}
                  onChange={(e) => {
                    setData({ ...data, avatar: e.target.value });
                  }}
                ></input>
              </td>
            </tr>
            <tr>
              <td>City:</td>
              <td>
                <input
                  type="text"
                  placeholder="Enter City"
                  value={data.city}
                  onChange={(e) => {
                    setData({ ...data, city: e.target.value });
                  }}
                ></input>
              </td>
            </tr>
            <tr>
              <td>Contact:</td>
              <td>
                <input
                  type="text"
                  placeholder="Enter Contact"
                  value={data.contact}
                  onChange={(e) => {
                    setData({ ...data, contact: e.target.value });
                  }}
                ></input>
              </td>
            </tr>
            <tr>
              <button
                class="btn btn-primary"
                onClick={() => {
                  if (param.id > 0) {
                    fetch(url + param.id, {
                      method: "PUT",
                      body: JSON.stringify(data),
                      headers: {
                        "Content-Type": "application/json"
                      }
                    }).then(() => {
                      navigate("./student");
                    });
                  } else {
                    fetch(url, {
                      method: "POST",
                      body: JSON.stringify(data),
                      headers: {
                        "Content-Type": "application/json"
                      }
                    }).then(() => {
                      navigate("./student");
                    });
                  }
                }}
              >
                {param.id > 0 && "Edit "}
                {!(param.id > 0) && "Add "}
                Student
              </button>
            </tr>
          </form>
        </div>
      </div>
    </>
  );
}
