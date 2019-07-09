// ===============================================================================
// DATA
// Below data will hold all of the possible friends.
// Start with an array that hold 10 object to coincide with the 10 questions 
//each object will have a key value pair of
//name: (a string of the person name)
// photo (with a link)
// scores array (10 strings to coincide with the answers options)
// ===============================================================================




var friends = [
  {
      name: "Jim",
      picture: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
      scores: [4, 3, 3, 2, 3, 1, 4, 3, 4, 2, 3, 2]
  },
  {
      name: "John",
      picture: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
      scores: [1, 1, 1, 1, 2, 5, 4, 3, 2, 4, 2, 1]
  },
  {
      name: "Jake from Statefarm",
      picture: "<img image url>",
      scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
  },
  {
      name: "Jesus",
      picture: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
      scores: [1, 2, 3, 4, 2, 2, 2, 2, 4, 2, 4, 3]
  },
  {
      name: "Jamie",
      picture: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
      scores: [1, 5, 2, 5, 5, 5, 1, 2, 3, 5, 4, 2]
  },
  {
      name: "Jerry",
      picture: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
      scores: [1, 2, 2, 2, 5, 3, 2, 3, 3, 5, 4, 2]
  },
  {
      name: "Joe",
      picture: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
      scores: [1, 2, 3, 4, 5, 5, 5, 4, 4, 2, 3, 2]
  },
  {
      name: "Jasmin",
      picture: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
      scores: [3, 4, 3, 4, 1, 2, 5, 4, 3, 3, 3, 2]
  },
  {
      name: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
      picture: "<img image url>",
      scores: [2, 5, 3, 2, 5, 4, 2, 5, 4, 2, 1, 2]
  },
  {
      name: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
      picture: "<img image url>",
      scores: [4, 4, 4, 4, 4, 4, 4, 5, 5, 4, 1, 2]
  },
  {
      name: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
      picture: "<img image url>",
      scores: [3, 2, 3, 4, 5, 3, 2, 3, 3, 5, 4, 2]
  },

];

// Here we export the array. This makes it accessible to other files using require.
module.exports = friends;
