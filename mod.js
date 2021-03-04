/**
 * @author Conner
 * @since 03/03/2021
 * 
 * Wrapper for TheDogAPI.com
 * Written by Conner
 * 
 * - https://github.com/connuh
 */

// Variables
const BASE_URL = "https://api.thedogapi.com/v1/";
const endpoints = {
  "search": "images/search",
  "getBreeds": "breeds"
};

// Dog Class
export default class Dog {
  /**
   * @returns {Promise<Object>}
   * 
   * Fetches all of the breeds
   * from the API with a GET request
   */
  static getBreeds = async () => {
    /**
     * Empty array, we populate this later
     * after making our GET request to
     * fetch all of the breeds
     */
    let breeds = [ ];

    try {
      /**
       * Makes a GET request to the "getBreeds" endpoint
       */
      let json = await(await fetch(`${BASE_URL}/${endpoints["getBreeds"]}`)).json();

      /**
       * Loops through the JSON and
       * makes a constant named "breed"
       * inside the scope 
       */
      for(const breed of json) {
        /**
         * If breed.id AND breed.name exists
         * AND they're not in the "breeds" array
         * push to the "breeds" array
         */
        if(breed.id && breed.name && breeds.indexOf({ id: breed.id, name: breed.name }) === -1) breeds.push({ id: breed.id, name: breed.name }); 
      }

      /**
       * Returns the breeds array
       */
      return breeds;
    } catch(e) {
      throw new Error(e);
    }
  }
  
  /**
   * @param {Object} data
   * @param {String} data.breed
   * @param {Number} data.limit
   * @param {Number} data.page
   * @param {String} data.desc
   * @returns {Promise<Object>}
   */
  static getDog = async (data = { breed: null, limit: 1, page: 0, order: "desc" }) => {
    /**
     * Empty array, we populate this later
     * after making our GET request to
     * fetch all of the dogs
     */
    let images = [ ];

    try {
      /**
       * Makes a GET request to the "search" endpoint
       */
      let json = await(await fetch(`${BASE_URL}/${endpoints["search"]}${data.breed ? `?breed_ids=${data.breed}&` : "?"}limit=${data.limit}&page=${data.page}&order=${data.order}`)).json();

      /**
       * Loops through the JSON and
       * makes a constant named "breed"
       * inside the scope 
       */
      for(const dog of json) {
        /**
         * If dog.url exists and they're not in the "breeds" array
         * push to the "breeds" array
         */
        if(dog.url && images.indexOf(dog.url) === -1) images.push(dog.url);
      }

      /**
       * Returns the images array
       */
      return images;
    } catch(e) {
      throw new Error(e);
    }
  }
}