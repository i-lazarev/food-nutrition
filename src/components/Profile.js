import React, { useEffect, useState, useContext } from "react";
import { TokenContext } from "./TokenContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {

// } from "@fortawesome/free-solid-svg-icons";

export default function Profile(props) {
  const [info, setInfo] = useState({
    name: "",
    TDEE: "",
    goal: "",
    protein: "",
    carbs: "",
    fat: "",
    sugar: "",
  });
  const [token, setToken] = useContext(TokenContext);
  useEffect(() => {
    fetch("http://localhost:5000/profile", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) =>
        setInfo({
          name: data.username,
          TDEE: data.tdee,
          goal: data.goalCal,
          protein: data.protein,
          carbs: data.carbs,
          fat: data.fat,
          sugar: data.sugar,
        })
      );
  }, [token]);

  return (
    <div
      className={props.pos}
      style={{
        backgroundColor: "#b526f2",
        color: "#fff",
        width: "100%",
        zIndex: "-1",
        transition: "1s ease",
        position: "absolute",
        bottom: "-10px",
        left: "0",
      }}
    >
    
      <div className='profileBox'
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "90%",
        }}
      >
        <div className='greeting' style={{ padding: "20px 10px 20px 40px", width: "330px" }}>
          Hey {info.name},
          <br /> Here's your daily need of calories and nutrition. <br /> have a
          healthy and wonderful day {":)"}
        </div>
        <div
          style={{
            color: "#000",
            display: "flex",
            flexWrap: "wrap",
            padding: "15px 15px 15px 5px",
            justifyContent: "space-evenly",
            width: "630px",
          }}
        >
          <div style={{ textAlign: "center", padding: "5px" }}>
            <span title="Total Daily Energy Expenditure">
              <b>TDEE: </b>
            </span>{" "}
            <span
              style={{
                color: "#fff",
                fontFamily: "Sulphur Point",
                fontSize: "20px",
                fontWeight: "800",
                padding: "2px",
              }}
            >
              {info.TDEE}
            </span>{" "}
            kcal
            <p style={{ color: "#3d3b3b" }}>
              (your daily calories to maintain your current weight)
            </p>
          </div>
          <div style={{ padding: "5px" }}>
            <b>Goal Calories: </b>
            <span
              style={{
                color: "#fff",
                fontFamily: "Sulphur Point",
                fontSize: "20px",
                fontWeight: "800",
                padding: "2px",
              }}
            >
              {info.goal}
            </span>{" "}
            kcal
          </div>
          <div style={{ padding: "5px" }}>
            <b>Protein: </b>
            <span
              style={{
                color: "#fff",
                fontFamily: "Sulphur Point",
                fontSize: "20px",
                fontWeight: "800",
                padding: "2px",
              }}
            >
              {info.protein}
            </span>{" "}
            g
          </div>
          <div style={{ padding: "5px" }}>
            <b>Carbs: </b>
            <span
              style={{
                color: "#fff",
                fontFamily: "Sulphur Point",
                fontSize: "20px",
                fontWeight: "800",
                padding: "2px",
              }}
            >
              {info.carbs}
            </span>{" "}
            g{" "}
          </div>
          <div style={{ padding: "5px" }}>
            <b>Fat: </b>
            <span
              style={{
                color: "#fff",
                fontFamily: "Sulphur Point",
                fontSize: "20px",
                fontWeight: "800",
                padding: "2px",
              }}
            >
              {info.fat}
            </span>{" "}
            g{" "}
          </div>
          <div style={{ padding: "5px" }}>
            <b>Sugar: </b>
            <span
              style={{
                color: "#fff",
                fontFamily: "Sulphur Point",
                fontSize: "20px",
                fontWeight: "800",
                padding: "2px",
              }}
            >
              {info.sugar}
            </span>{" "}
            g{" "}
          </div>
          <div style={{ padding: "5px" }}>
            <b>Caffein: </b>
            <span
              style={{
                color: "#fff",
                fontFamily: "Sulphur Point",
                fontSize: "20px",
                fontWeight: "800",
                padding: "2px",
              }}
            >
              400-500
            </span>{" "}
            mg
          </div>
        </div>
      </div>
    </div>
  );
}
