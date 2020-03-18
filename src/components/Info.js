import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Info() {
    const [height, setHeight]= useState('');
    const [weight, setWeight] = useState('');
    const [age, setAge] = useState('');
    const [male, setMale]=useState(false);
    const [female, setFemale] = useState(false);
    const [ecto, setEcto]= useState(false);
    const [meso, setMeso]= useState(false);
    const [endo, setEndo]= useState(false);
    const [gain, setGain]= useState(false);
    const [lose, setLose]= useState(false);
    const [maintain, setMaintain]= useState(false);
    const [lowCarbs, setLowCarbs]=useState(false);
    const [moderateCarbs, setModerateCarbs]=useState(false);
    const [highCarbs, setHighCarbs]=useState(false);
    const [daysOfWorkout, setDaysOfWorkouts]=useState('0');
    const [durationOfWorkout, setDurationOfWorkout]=useState('0');

    const handleSubmit=(e)=>{
       e.preventDefault();
      console.log(male, female);
    }

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
                  }}
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
                  }}
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
                  }}
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
                  }}
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
                  }}
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
                  }}
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
                  }}
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
                  }}
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
          <div style={{textAlign: 'center'}}>
            <button
              style={{
                backgroundColor: "green",
                color: "#fff",
                padding: "8px",
                borderRadius: "10px",
                border: 'none',
                width: '100px',
                outline: 'none'
              }}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    );
}
