import React, {useEffect, useState, useContext} from 'react'
import { TokenContext } from './TokenContext'

export default function Profile() {
    const [TDEE, setTDEE]=useState('');
    const [goal, setGoal]=useState('');
    const [protein, setProtein]=useState('');
    const [fat, setFat]=useState('');
    const [carbs, setCarbs]=useState('');
    const [sugar, setSugar]=useState('');
    const [name, setName]=useState('');
    const token=useContext(TokenContext);
    useEffect(()=>{
        fetch('http://localhost:5000/profile').then(res=>res.json()).then(data=>console.log(data))
    },[token])
    
    return (
        <div style={{width:'100%', display:'flex',flexWrap:'wrap', justifyContent:'space-evenly', padding:'4px'}}>
           <div style={{justifySelf:'flex-start'}}>Hello {name}!<br/> Here's your daily need of calories and nutrition, have a healthy and wonderful day {':)'}</div> 
           <div style={{textAlign:'center'}}><span title='Total Daily Energy Expenditure'>TDEE: {TDEE}kcal</span><p>your daily calories to maintain your current weight</p></div>
           <div>Goal Calories: {goal}</div>
           <div>Protein: {protein}</div>
           <div>Carbs: {carbs} </div>
           <div>Fat: {fat} </div>
           <div>Sugar: {sugar} </div>
           <div>Caffein: 400-500mg</div>
        </div>
    )
}
