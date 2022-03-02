export function combatOdds(defense: number, attack: number) {
  const ratio = attack / defense;
  let odds = 0.5;

  if (ratio < 1) {
    odds = 0.3;
  } else if (ratio === 1) {
    odds = 0.5;
  } else if(ratio === 1.5) {
    odds = 0.8;
  }




  return { odds };
}
