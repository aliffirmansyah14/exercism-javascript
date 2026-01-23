// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let counter =0;
  for(let i=0; i<birdsPerDay.length; i++){
    counter+=birdsPerDay[i];
  }
  return counter;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let counter=0;
  const startIndex = week*7-7;
  const endIndex = week*7;
  for (let i =startIndex; i < endIndex; i++) {
    counter+=birdsPerDay[i];
  }
  return counter;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i <= birdsPerDay.length; i++) {
    if(i % 2===1) continue;
    birdsPerDay[i]+=1;
  }
    return birdsPerDay;
}
