/** @format */

export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        return resolve({
          status: 200,
          body: 'Success',
        });
      }
      return reject(new Error('The fake API is not working currently'));
    }, 1000);
  });
}
