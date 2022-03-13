import React from "react";
import loader from "../../images/Loader.gif";
const Loader = () => {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <img
        src={loader}
        style={{ height: "150px", width: "200px" }}
        alt="loader"
      />
    </div>
  );
};

export default Loader;
