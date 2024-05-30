/** @format */

export default function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    // Simulate an asynchronous operation (like user creation)
    resolve({ firstName: firstName, lastName: lastName });
  })
    .then((user) => {
      console.log(user);
    })
    .catch(() => {
      console.error("Signup system offline");
    });
}
