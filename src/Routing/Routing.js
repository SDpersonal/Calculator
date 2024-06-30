import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Calculator from "../components/Calculator";
import Pnf from "../Pnf/Pnf";

const Routing = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="*" Component={Pnf}></Route>
          <Route path="/" Component={Calculator}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default Routing;
