import React from "react";
import "./style.css";
const Person = ({ name, url }) => {
  return (
    <>
      <div className="person">
        {url && name  ? (
          <div
            id="user-image"
            style={{
              backgroundImage: `url("${url}")`,
              objectFit: "contain",
              width: "40px",
              height: "40px",
            }}
          ></div>
        ) : (
          <i style={{
            color:"black"
           
          }} class="fa-solid fa-user op"></i>
        )}
        <p className="">{name}</p>
      </div>
    </>
  );
};

export default Person;
