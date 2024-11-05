import { maxBy } from './e17';
/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  const discoveryCountByYear = {};

  for (let i = 0; i < data.asteroids.length; i++) {
    const year = data.asteroids[i].discoveryYear;
    discoveryCountByYear[year] = (discoveryCountByYear[year] || 0) + 1;
  }


  const discoveryArray = [];
  for (let year in discoveryCountByYear) {
    discoveryArray.push({ year: parseInt(year), count: discoveryCountByYear[year] });
  }


  const result = maxBy(discoveryArray, entry => entry.count);
  
  
  return result ? result.year : undefined;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
