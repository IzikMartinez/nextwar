// This script rolls a d10 for various in-game purposes.
// Based on in-game conditions, a modifier is added to the die roll

export function d10() {
  function roll(modifier: number) {
    return Math.floor(Math.random() * 10 + 1) + modifier;
  }
  return { roll };
}
