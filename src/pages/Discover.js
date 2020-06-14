import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import Alert from "../components/Alert";

class Discover extends Component {
   state = {
      image: "",
      match: false,
      matchCount: 0
   };

   // when component loads load the next dog to display
   componentDidMount() {
      this.loadNextDog();     
   };

   handleBtnClick = event => {
      // get data-value of clicked button
      const btnType = event.target.attributes.getNamedItem("data-value").value;
      // clone this.state to newState object to modify this object to set component state
      const newState = { ...this.state};

      if (btnType === "pick") {
         // set newState.match to either true or false depending on whether or not the dog likes us
         newState.match = 1 === Math.floor(Math.random() * 5) + 1;

         // set newState.matchCount equal to its current value or its current value + 1,
         // depending on whether dog likes us
         newState.matchCount = newState.match
            ? newState.matchCount + 1
            : newState.matchCount;
      } else {
         // if we thumbs down the dog we haven't matched with it
         newState.match = false;
      }

      // replace our Discover page-component state with newState, load the next dog
      this.setState(newState);
      this.loadNextDog();
   };

   loadNextDog = () => {
      API.getRandomDog()
         .then(res =>
            this.setState({
               image: res.data.message
            })
         )
         .catch(err => console.log(err));
   }  

   render() {
      return (
         <div>
            <h1 className="text-center">Make New Friends</h1>
            <h3 className="text-center">
               thumbs up on any pups you'd like to meet
            </h3>
            <Card image={this.state.image} handleBtnClick={this.handleBtnClick} />
            <h1 className="text-center">
               made friends with {this.state.matchCount} pups so far!
            </h1>
            <Alert style={{ opacity: this.state.match ? 1 : 0 }} type="success">
               yay that pup liked you too
            </Alert>
            
         </div>
      );
   }
}

export default Discover;