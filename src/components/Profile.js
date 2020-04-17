import React, {useEffect, useState, useContext} from 'react'
import { TokenContext } from './TokenContext'

export default function Profile() {
    // const [TDEE, setTDEE]=useState('');
    // const [goal, setGoal]=useState('');
    // const [protein, setProtein]=useState('');
    // const [fat, setFat]=useState('');
    // const [carbs, setCarbs]=useState('');
    // const [sugar, setSugar]=useState('');
    // const [name, setName]=useState('');
    const [info, setInfo] = useState({
      name: '',
      TDEE: '',
      goal: '',
      protein: '',
      carbs: '',
      fat: '',
      sugar: '',
    });
    const [token, setToken] = useContext(TokenContext);
    useEffect(()=>{
        fetch("http://localhost:5000/profile", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        })
          .then(res => res.json())
          .then(data => setInfo({name: data.username,
          TDEE: data.tdee,
        goal: data.goalCal,
      protein: data.protein,
    carbs: data.carbs,
  fat: data.fat,
sugar: data.sugar}));
    },[token])
    
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          padding: "4px",
        }}
      >
        <div style={{ justifySelf: "flex-start", width: "300px" }}>
          Hello {info.name}!<br /> Here's your daily need of calories and
          nutrition. <br /> have a healthy and wonderful day {":)"}
        </div>
        <div style={{ textAlign: "center" }}>
          <span title="Total Daily Energy Expenditure">
            TDEE: {info.TDEE} kcal
          </span>
          <p>(your daily calories to maintain your current weight)</p>
        </div>
        <div>Goal Calories: {info.goal} kcal</div>
        <div>Protein: {info.protein} g</div>
        <div>Carbs: {info.carbs} g </div>
        <div>Fat: {info.fat} g </div>
        <div>Sugar: {info.sugar} g </div>
        <div>Caffein: 400-500 mg</div>
      </div>
    );
}

