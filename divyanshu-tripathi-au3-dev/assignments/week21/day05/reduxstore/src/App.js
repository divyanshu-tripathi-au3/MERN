import React from 'react';
import {connect} from "react-redux";
import { updateBonus,levelCompleted, lifeLost } from './actions/scoreActions';

import logo from './logo.svg';
import './App.css';


function App(props) {
  return (
    <center><div >
    <h1>current Score: {props.score}</h1>
    <button type ="button" onClick={props.update}>update Bonus</button>&nbsp;&nbsp;
    <button type ="button" onClick={props.completed}>Level Completed</button>&nbsp;&nbsp;
    <button type ="button" onClick={props.lost}>Life Lost</button>
     
    </div></center>
  );
}



const mapStateToProps =state =>{
  return{
    score: state.currentScore
  }
   
}

const mapDispatchToProps =dispatch =>{
  return{
    update:() => dispatch(updateBonus()) ,
    completed:() => dispatch(levelCompleted()),
    lost:() => dispatch(lifeLost())

  }
   
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
