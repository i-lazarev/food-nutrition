import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Info(props) {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [ecto, setEcto] = useState(false);
  const [meso, setMeso] = useState(false);
  const [endo, setEndo] = useState(false);
  const [NEAT, setNEAT] = useState(0);
  const [gain, setGain] = useState(false);
  const [lose, setLose] = useState(false);
  const [maintain, setMaintain] = useState(false);
  const [goal, setGoal] = useState(0);
  const [lowCarbs, setLowCarbs] = useState(false);
  const [moderateCarbs, setModerateCarbs] = useState(false);
  const [highCarbs, setHighCarbs] = useState(false);
  const [daysOfWorkout, setDaysOfWorkouts] = useState(0);
  const [durationOfWorkout, setDurationOfWorkout] = useState(0);
  const [index, setIndex] = useState(0);
  const [errMsg, setErrMsg]=useState('');
  const history = useHistory();

  const ratios = [
    {
      name: "high-carbs for bodybuilding",
      carbs: 50, // 40-60
      protein: 30, // 25-35
      fat: 20, // 15-25
    },
    {
      name: "moderate-carbs for maintenance",
      carbs: 40, // 30-50
      protein: 30, // 25-35
      fat: 30, // 25-35
    },
    {
      name: "low-carbs for reduction",
      carbs: 20, // 10-20
      protein: 50, // 40-50
      fat: 30, // 30-40
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    let result =
      9.99 * parseFloat(weight) +
      6.25 * parseFloat(height) -
      4.92 * parseFloat(age);

    console.log(result);

    let BMR = Math.floor(male ? result + 5 : result - 161);
    console.log(BMR);
    let percentOfBMR = Math.floor((7 * BMR) / 100);

    let EPOC = parseFloat(daysOfWorkout) * percentOfBMR;
    console.log(EPOC);
    let TEA = Math.floor(
      (parseFloat(daysOfWorkout) * parseFloat(durationOfWorkout) * 9 + EPOC) / 7
    );
    console.log(TEA);
    let total = BMR + TEA + NEAT;
    console.log(total);
    let TEF = Math.floor(total / 10);

    let TDEE = total + TEF;

    let goalCal = TDEE + goal;

    let protein = Math.floor((TDEE * ratios[index].protein) / 100 / 4);
    let carbs = Math.floor((TDEE * ratios[index].carbs) / 100 / 4);
    let fat = Math.floor((TDEE * ratios[index].fat) / 100 / 9);
    let sugar;
    male ? (sugar = 37.5) : (sugar = 25);

    if (TDEE>0) {
      console.log(TDEE, goalCal, protein, carbs, fat, sugar);
      fetch("http://localhost:5000/create-account", {
        method: "POST",
        body: JSON.stringify({
          email: props.location.state.email,
          tdee: TDEE,
          goal: goalCal,
          protein: protein,
          carbs: carbs,
          fat: fat,
          sugar: sugar,
          height: height,
          weight: weight,
          age: age,
          male: male,
          female: female,
          daysOfWorkout: daysOfWorkout,
          durationOfWorkout: durationOfWorkout,
          ecto: ecto,
          meso: meso,
          endo: endo,
          lose: lose,
          gain: gain,
          maintain: maintain,
          lowCarbs: lowCarbs,
          moderateCarbs: moderateCarbs,
          highCarbs: highCarbs,
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
      history.push("/login");
    } else {
      setErrMsg("some fields are missing");
    }
  };

  return (
    <div>
      <Header x="#000" />
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            justifyContent: "space-evenly",
          }}
        >
          <div style={{ width: "350px", margin: "40px 65px 0 65px" }}>
            <h1>Body Type and Measurements</h1>
            <div style={{ padding: "5px" }}>Height:</div>
            <input
              className="userInfo"
              type="number"
              onChange={(e) => setHeight(e.target.value)}
              value={height}
              placeholder="Height (cm)"
              style={{ padding: "3px" }}
            />
            <div style={{ padding: "10px 5px 5px 5px" }}>Weight:</div>
            <input
              className="userInfo"
              type="number"
              onChange={(e) => setWeight(e.target.value)}
              value={weight}
              placeholder="Weight (kg)"
              style={{ padding: "3px" }}
            />
            <div style={{ padding: "10px 5px 5px 5px" }}>Age:</div>
            <input
              className="userInfo"
              type="number"
              onChange={(e) => setAge(e.target.value)}
              value={age}
              placeholder="Age (year)"
              style={{ padding: "3px" }}
            />
            <div
              style={{
                width: "200px",
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 5px 5px 5px",
              }}
            >
              <div>
                <input
                  id="male"
                  type="radio"
                  name="gender"
                  onChange={(e) => {
                    setMale(e.target.checked);
                    setFemale(!e.target.checked);
                  }}
                />
                <label htmlFor="male">
                  <span>
                    <span></span>
                  </span>
                  male
                </label>
              </div>
              <div>
                <input
                  id="female"
                  type="radio"
                  name="gender"
                  onChange={(e) => {
                    setFemale(e.target.checked);
                    setMale(!e.target.checked);
                  }}
                />
                <label htmlFor="female">
                  <span>
                    <span></span>
                  </span>
                  female
                </label>
              </div>
            </div>
            <h1>Body Type:</h1>

            <input
              id="ecto"
              type="radio"
              name="bodyType"
              onChange={(e) => {
                setEcto(e.target.checked);
                setEndo(!e.target.checked);
                setMeso(!e.target.checked);
                setNEAT(900);
              }}
            />
            <label htmlFor="ecto">
              <span>
                <span></span>
              </span>
              Ectomorph
            </label>
            <p
              style={{
                fontSize: "14px",
                textAlign: "start",
                margin: "0 0 15px 20px",
              }}
            >
              {" "}
              * struggles to gain weight
            </p>

            <input
              id="meso"
              type="radio"
              name="bodyType"
              onChange={(e) => {
                setEcto(!e.target.checked);
                setEndo(!e.target.checked);
                setMeso(e.target.checked);
                setNEAT(500);
              }}
            />
            <label htmlFor="meso">
              <span>
                <span></span>
              </span>
              Mesomorph
            </label>
            <p
              style={{
                fontSize: "14px",
                textAlign: "start",
                margin: "0 0 15px 20px",
              }}
            >
              {" "}
              * easily gains and loses weight
            </p>

            <input
              id="endo"
              type="radio"
              name="bodyType"
              onChange={(e) => {
                setEcto(!e.target.checked);
                setEndo(e.target.checked);
                setMeso(!e.target.checked);
                setNEAT(400);
              }}
            />
            <label htmlFor="endo">
              <span>
                <span></span>
              </span>
              Endomorph
            </label>
            <p
              style={{
                fontSize: "14px",
                margin: "0 0 15px 20px",
                textAlign: "start",
              }}
            >
              {" "}
              * easily gains weight, struggles to lose weight
            </p>
          </div>
          <div style={{ width: "350px", margin: "40px 65px" }}>
            <h1>Workout & Sport</h1>
            <div>
              <p style={{ margin: "5px 0", textAlign: "start" }}>
                Days of Workout per Week:
              </p>
              <input
                min="0"
                className="userInfo"
                type="number"
                onChange={(e) => setDaysOfWorkouts(e.target.value)}
                value={daysOfWorkout}
                style={{
                  width: "80px",
                  textAlign: "center",
                  marginRight: "10px",
                }}
              />
              {"  "}
              day(s)
            </div>
            <div>
              <p style={{ margin: "15px 0 5px 0", textAlign: "start" }}>
                Duration of Workout:
              </p>
              <input
                min="0"
                className="userInfo"
                type="number"
                onChange={(e) => setDurationOfWorkout(e.target.value)}
                value={durationOfWorkout}
                style={{
                  width: "80px",
                  textAlign: "center",
                  marginRight: "10px",
                }}
              />
              {"  "}
              minutes
            </div>
            <h1 style={{ marginTop: "15px" }}>Set a Goal:</h1>
            <div style={{ height: "30px" }}>
              <input
                id="gain"
                type="radio"
                name="goal"
                onChange={(e) => {
                  setGain(e.target.checked);
                  setLose(!e.target.checked);
                  setMaintain(!e.target.checked);
                  setGoal(500);
                }}
              />
              <label htmlFor="gain">
                <span>
                  <span></span>
                </span>
                gain muscles/ bulk
              </label>
            </div>
            <div style={{ height: "30px" }}>
              <input
                id="lose"
                type="radio"
                name="goal"
                onChange={(e) => {
                  setGain(!e.target.checked);
                  setLose(e.target.checked);
                  setMaintain(!e.target.checked);
                  setGoal(-500);
                }}
              />
              <label htmlFor="lose">
                <span>
                  <span></span>
                </span>
                lose weight/ cut
              </label>
            </div>
            <div style={{ height: "30px" }}>
              <input
                id="maintain"
                type="radio"
                name="goal"
                onChange={(e) => {
                  setGain(!e.target.checked);
                  setLose(!e.target.checked);
                  setMaintain(e.target.checked);
                }}
              />
              <label htmlFor="maintain">
                <span>
                  <span></span>
                </span>
                maintain your current weight
              </label>
            </div>
            <h1 style={{ marginTop: "15px" }}>Choose a Diet:</h1>
            <div style={{ height: "30px" }}>
              <input
                id="low"
                type="radio"
                name="diet"
                onChange={(e) => {
                  setLowCarbs(e.target.checked);
                  setHighCarbs(!e.target.checked);
                  setModerateCarbs(!e.target.checked);
                  setIndex("2");
                }}
              />
              <label htmlFor="low">
                <span>
                  <span></span>
                </span>
                low-carbs
              </label>

              {lose ? (
                <span
                  style={{
                    backgroundColor: "#7dbf37",
                    color: "#fff",
                    padding: "2px 5px",
                    marginLeft: "10px",
                    borderRadius: "5px",
                  }}
                >
                  recommended
                </span>
              ) : (
                ""
              )}
            </div>
            <div style={{ height: "30px" }}>
              <input
                id="moderate"
                type="radio"
                name="diet"
                onChange={(e) => {
                  setLowCarbs(!e.target.checked);
                  setHighCarbs(!e.target.checked);
                  setModerateCarbs(e.target.checked);
                  setIndex("1");
                }}
              />
              <label htmlFor="moderate">
                <span>
                  <span></span>
                </span>
                moderate-carbs
              </label>

              {maintain ? (
                <span
                  style={{
                    backgroundColor: "#7dbf37",
                    color: "#fff",
                    padding: "2px 5px",
                    marginLeft: "10px",
                    borderRadius: "5px",
                  }}
                >
                  recommended
                </span>
              ) : (
                ""
              )}
            </div>
            <div style={{ height: "30px" }}>
              <input
                id="high"
                type="radio"
                name="diet"
                onChange={(e) => {
                  setLowCarbs(!e.target.checked);
                  setHighCarbs(e.target.checked);
                  setModerateCarbs(!e.target.checked);
                  setIndex("0");
                }}
              />
              <label htmlFor="high">
                <span>
                  <span></span>
                </span>
                high-carbs
              </label>

              {gain ? (
                <span
                  style={{
                    backgroundColor: "#7dbf37",
                    color: "#fff",
                    padding: "2px 5px",
                    marginLeft: "10px",
                    borderRadius: "5px",
                  }}
                >
                  recommended
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div
          style={{
            
            height: '30px',
            color: "#F94F72",
            width: "100%",
            textAlign: "center",
          }}
        >
          {" "}
          {errMsg}{" "}
        </div>
        <div style={{ textAlign: "center" }}>
          <button className="bbtn">Sign Up</button>
        </div>
      </form>

      <Footer />
    </div>
  );
}
