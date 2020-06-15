import React from "react";
import CardBtn from "../CardBtn";
import "./style.css";

function Card(props) {
   return (
      <div 
         className="card"
         style={{
            backgroundImage: props.image ? `url(${props.image})` : "none" // set background dog image if exists, else "none"
         }}
      >
         {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
         <CardBtn
            style={{ opacity: props.image ? 1 : 0}} // if the dog image exists button is visible
            onClick={props.handleBtnClick} // passing the button click method from Discover parent component
            data-value="pass" // setting the data-value as pass/pick makes reusable
         ></CardBtn>
         <CardBtn
            style={{ opacity: props.image ? 1 : 0}}
            onClick={props.handleBtnClick}
            data-value="pick"
         ></CardBtn>
      </div>
   );
}

export default Card;