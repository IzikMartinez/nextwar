// This script rolls a d10 for various in-game purposes.
// Based on in-game conditions, a modifier is added to the die roll

export function dice(sides: number) {
  function roll(modifier: number) {
    return Math.floor(Math.random() * (sides - 1)) - modifier;
  }
  return { roll };
}
