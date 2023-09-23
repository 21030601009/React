import { createRoot } from "react-dom/client";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import Adddetail from "./addstudent";

import Details from "./editstudent";
import Layout from "./layout";
import Student from "./student";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/student" element={<Student />}></Route>
          <Route path="/student/add" element={<Adddetail />}></Route>
          <Route path="/student/:id" element={<Details />}></Route>
          <Route path="/student/edit/:id" element={<Adddetail />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
