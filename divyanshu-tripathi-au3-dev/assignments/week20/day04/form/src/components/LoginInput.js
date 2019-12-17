import React from 'react';

function LoginInput(props){
    return(
        <div className="form-group">
            <label>{props.label}</label>
            <input type="text"  placeholder ={props.placeholder} className ="form-control"/>
        </div>
    );
}

export default LoginInput;