export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        return resolve('API, response data');
      }
      return reject(new Error('Error: No response'));
    }, 1000);
  });
}
