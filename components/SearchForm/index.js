import React from "react";
import "./style.css";

// use datalist element to create autofill suggestions based on props.breeds array

function SearchForm(props) {
   return (
      <form className="search">
         <div className="form-group">
            <label htmlFor="breed">Breed Name:</label>
            <input
               type="text"
               value={props.search}
               onChange={props.handleInputChange}
               name="breed"
               list="breeds"
               className="form-control"
               placeholder="Type in a dog breed to begin"
               id="breed"
            />
            <datalist id="breeds">
               {props.breeds.map(breed => (
                  <option value={breed} key={breed} />
               ))}
            </datalist>
            <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success"></button>
         </div>
      </form>
   );
}

export default SearchForm;