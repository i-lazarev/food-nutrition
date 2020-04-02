import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function EditAccount(props) {
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
  const [index, setIndex] = useState("");
  const history = useHistory();

  const ratios = [
    {
      name: "high-carbs for bodybuilding",
      carbs: 50, // 40-60
      protein: 30, // 25-35
      fat: 20 // 15-25
    },
    {
      name: "moderate-carbs for maintenance",
      carbs: 40, // 30-50
      protein: 30, // 25-35
      fat: 30 // 25-35
    },
    {
      name: "low-carbs for reduction",
      carbs: 20, // 10-20
      protein: 50, // 40-50
      fat: 30 // 30-40
    }
  ];
  
  useEffect(() => {
      fetch("http://localhost:5000/edit-account", {
        method: "POST",
        body: JSON.stringify({ email: props.location.state.email }),
        headers: {
          "Content-Type": "application/json",

          Authorization: `Bearer ${props.location.state.token}`
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
        });
  }, [input])

  const handleSubmit = e => {
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

    if (TDEE) {
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
          highCarbs: highCarbs
        }),
        headers: { "Content-Type": "application/json" }
      })
        .then(response => response.json())
        .then(data => console.log(data));
      // history.push("/login");
    } else {
      console.log("some fields are missing");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            justifyContent: "space-evenly"
          }}
        >
          <div style={{ width: "350px", margin: "40px 65px 0 65px" }}>
            <h2>Body Type and Measurements</h2>
            <div style={{ padding: "5px" }}>Height:</div>
            <input
              type="number"
              onChange={e => setHeight(e.target.value)}
              value={height}
              placeholder="Height (cm)"
              style={{ padding: "3px" }}
            />
            <div style={{ padding: "10px 5px 5px 5px" }}>Weight:</div>
            <input
              type="number"
              onChange={e => setWeight(e.target.value)}
              value={weight}
              placeholder="Weight (kg)"
              style={{ padding: "3px" }}
            />
            <div style={{ padding: "10px 5px 5px 5px" }}>Age:</div>
            <input
              type="number"
              onChange={e => setAge(e.target.value)}
              value={age}
              placeholder="Age (year)"
              style={{ padding: "3px" }}
            />
            <div style={{ padding: "10px 5px 5px 5px" }}>
              <label style={{ padding: "5px" }}>
                <input
                  type="radio"
                  name="gender"
                  onChange={e => {
                    setMale(e.target.checked);
                    setFemale(!e.target.checked);
                  }}
                  checked={male}
                />
                male
              </label>

              <label style={{ padding: "5px" }}>
                <input
                  type="radio"
                  name="gender"
                  onChange={e => {
                    setFemale(e.target.checked);
                    setMale(!e.target.checked);
                  }}
                  checked={female}
                />
                female
              </label>
            </div>
            <h3>Body Type:</h3>
            <label>
              <input
                type="radio"
                name="bodyType"
                onChange={e => {
                  setEcto(e.target.checked);
                  setEndo(!e.target.checked);
                  setMeso(!e.target.checked);
                  setNEAT(900);
                }}
                checked={ecto}
              />
              Ectomorph
            </label>
            <p style={{ fontSize: "14px", margin: "4px 0 10px 25px" }}>
              {" "}
              * struggles to gain weight
            </p>
            <label>
              <input
                type="radio"
                name="bodyType"
                onChange={e => {
                  setEcto(!e.target.checked);
                  setEndo(!e.target.checked);
                  setMeso(e.target.checked);
                  setNEAT(500);
                }}
                checked={meso}
              />
              Mesomorph
            </label>
            <p style={{ fontSize: "14px", margin: "4px 0 10px 25px" }}>
              {" "}
              * easily gains and loses weight
            </p>
            <label>
              <input
                type="radio"
                name="bodyType"
                onChange={e => {
                  setEcto(!e.target.checked);
                  setEndo(e.target.checked);
                  setMeso(!e.target.checked);
                  setNEAT(400);
                }}
                checked={endo}
              />
              Endomorph
            </label>
            <p style={{ fontSize: "14px", margin: "4px 0 10px 25px" }}>
              {" "}
              * easily gains weight, struggles to lose weight
            </p>
          </div>
          <div style={{ width: "350px", margin: "40px 65px" }}>
            <h2>Workout & Sport</h2>
            <div>
              <p style={{ margin: "5px 0" }}>Days of Workout per Week:</p>
              <input
                type="number"
                onChange={e => setDaysOfWorkouts(e.target.value)}
                value={daysOfWorkout}
                style={{ width: "50px", textAlign: "center" }}
              />{" "}
              day(s)
            </div>
            <div>
              <p style={{ margin: "15px 0 5px 0" }}>Duration of Workout:</p>
              <input
                type="number"
                onChange={e => setDurationOfWorkout(e.target.value)}
                value={durationOfWorkout}
                style={{ width: "50px", textAlign: "center" }}
              />{" "}
              minutes
            </div>
            <h3>Set a Goal:</h3>
            <div style={{ height: "30px" }}>
              <input
                type="radio"
                name="goal"
                onChange={e => {
                  setGain(e.target.checked);
                  setLose(!e.target.checked);
                  setMaintain(!e.target.checked);
                  setGoal(500);
                }}
                checked={gain}
              />
              gain muscles/ bulk
            </div>
            <div style={{ height: "30px" }}>
              <input
                type="radio"
                name="goal"
                onChange={e => {
                  setGain(!e.target.checked);
                  setLose(e.target.checked);
                  setMaintain(!e.target.checked);
                  setGoal(-500);
                }}
                checked={lose}
              />
              lose weight/ cut
            </div>
            <div style={{ height: "30px" }}>
              <input
                type="radio"
                name="goal"
                onChange={e => {
                  setGain(!e.target.checked);
                  setLose(!e.target.checked);
                  setMaintain(e.target.checked);
                }}
                checked={maintain}
              />
              maintain your current weight
            </div>
            <h3>Choose a Diet:</h3>
            <div style={{ height: "30px" }}>
              <input
                type="radio"
                name="diet"
                onChange={e => {
                  setLowCarbs(e.target.checked);
                  setHighCarbs(!e.target.checked);
                  setModerateCarbs(!e.target.checked);
                  setIndex("2");
                }}
                checked={lowCarbs}
              />
              low-carbs{" "}
              {lose ? (
                <span
                  style={{
                    backgroundColor: "green",
                    color: "#fff",
                    padding: "2px 5px",
                    marginLeft: "10px",
                    borderRadius: "5px"
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
                type="radio"
                name="diet"
                onChange={e => {
                  setLowCarbs(!e.target.checked);
                  setHighCarbs(!e.target.checked);
                  setModerateCarbs(e.target.checked);
                  setIndex("1");
                }}
                checked={moderateCarbs}
              />
              moderate-carbs{" "}
              {maintain ? (
                <span
                  style={{
                    backgroundColor: "green",
                    color: "#fff",
                    padding: "2px 5px",
                    marginLeft: "10px",
                    borderRadius: "5px"
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
                type="radio"
                name="diet"
                onChange={e => {
                  setLowCarbs(!e.target.checked);
                  setHighCarbs(e.target.checked);
                  setModerateCarbs(!e.target.checked);
                  setIndex("0");
                }}
                checked={highCarbs}
              />
              high-carbs{" "}
              {gain ? (
                <span
                  style={{
                    backgroundColor: "green",
                    color: "#fff",
                    padding: "2px 5px",
                    marginLeft: "10px",
                    borderRadius: "5px"
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
        <div style={{ textAlign: "center" }}>
          <button
            style={{
              backgroundColor: "green",
              color: "#fff",
              padding: "8px",
              borderRadius: "10px",
              border: "none",
              width: "100px",
              outline: "none"
            }}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
