import React from "react";
import Movies from "../Movies/Movies";
import "./Home.css";
const Home = () => {
  return (
    <div className="row">
      <div className="col-md-8">
        <Movies></Movies>
      </div>
      <div className="col-md-4">This is cart</div>
    </div>
  );
};

export default Home;
