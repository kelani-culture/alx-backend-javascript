export default function updateUniqueItems(groceryMap) {
  // Check if the argument is a Map
  if (!(groceryMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate over the entries of the map
  for (const [item, quantity] of groceryMap.entries()) {
    if (quantity === 1) {
      // Update quantity to 100 for items with initial quantity of 1
      groceryMap.set(item, 100);
    }
  }

  return groceryMap;
}
