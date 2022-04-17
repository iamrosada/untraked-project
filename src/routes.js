import React from "react";
import { Routes, Route } from "react-router-dom";
import { AllStudents} from './pages/allStudents/index'
import DeleteStudent from "./pages/deleteStudents";
import EditStudents from "./pages/editStudents";
export const RoutesFunction = () => {
  return (
    <Routes>
      <Route exact path='/about' element={<AllStudents />} />
      <Route exact path='/edit' element={<EditStudents />} />
      <Route exact path='/delete' elemen={<DeleteStudent/>}   />   {/* <Route path="/users"></Route> */}
      {/* <Route path="/"></Route> */}
    </Routes>
  );
};


// {
//   /* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */
// }
