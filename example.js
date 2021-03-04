/**
 * @author Conner
 * @since 03/03/2021
 * 
 * Wrapper for TheDogAPI.com
 * Written by Conner
 * 
 * - https://github.com/connuh
 */

import Dog from "./mod.js";

/* Fetch all of the different breeds */
let breeds = await Dog.getBreeds(); // returns an array of breeds
// console.log(breeds); //> [ "{ id: <id>, name: 'Name Here' }" ]

/* Fetch a singular dog (random breed) */
console.log(await Dog.getDog()); //> [ "url" ]

/* Fetch a singular dog (specified breed) */
console.log(await Dog.getDog({ breed: breeds[Math.floor(Math.random() * breeds.length)].id })); //> [ "url" ]

/* Fetch multiple dogs (breed id -> 1) */
console.log(await Dog.getDog({ breed: 1, limit: 10 })); //> [ "url" ] (length -> 10)

