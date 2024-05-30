/** @format */

// Assuming utils.js is in the same directory
import { uploadPhoto } from "./utils.js";

function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName: firstName,
    lastName: lastName,
  });
}

function handleProfileSignup() {
  const firstName = "John"; // Example firstName
  const lastName = "Doe"; // Example lastName

  Promise.all([uploadPhoto(), signUpUser(firstName, lastName)])
    .then((results) => {
      const [photo, user] = results;
      console.log(photo.body, user.firstName, user.lastName);
    })
    .catch((error) => {
      console.error("Signup system offline");
    });
}

// Export the function if needed
export default handleProfileSignup;
