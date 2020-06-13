import axios from "axios";

// export an object containing methods to use for accessing the Dog.Ceo API

export default {
   getRandomDog: function () {
      return axios.get("https://dog.ceo/api/breeds/image/random"); // get random dog image
   },
   getDogsOfBreed: function(breed) {
      return axios.get("https://dog.ceo/api/breed/" + breed + "/images"); // get dogs by breed
   },
   getBaseBreedsList: function() {
      return axios.get("https://dog.ceo/api/breeds/list");
   }
};