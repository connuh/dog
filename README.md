<p align="center">
  <img src="https://github-readme-stats.vercel.app/api/pin/?username=connuh&repo=dog&cache_seconds=86400&theme=default">
</p>

# Dog - an API wrapper. 🐶
### API Wrapper for [TheDogAPI.com](https://thedogapi.com) written in [Deno](https://deno.land)!
---
### Usage

```js
import Cat from "./mod.js";

/* Fetch all of the cat breeds */
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
```

### Contributions
###### All contributions are accepted, simply open an Issue / Pull request.
