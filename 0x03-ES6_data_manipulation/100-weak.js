// Create a new WeakMap instance
export const weakMap = new WeakMap();

// Define the queryAPI function
export function queryAPI(endpoint) {
  // Get the number of times queryAPI is called for this endpoint from the weakMap
  let count = weakMap.get(endpoint) || 0;

  // Increment the count
  count += 1;

  // Update the count in the weakMap
  weakMap.set(endpoint, count);

  // Check if the number of queries is >= 5
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }

  // Perform API query here
}