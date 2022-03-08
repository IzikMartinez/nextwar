import { dice } from "@/scripts/d10";
import Column from "@/types/columns";

export function CombatOdds(attack: number, defense: number) {
  let modifiers = 0;

  const column1: Column = {
    rows: [
      { yours: 1, theirs: 1, retreat: true }, //0 //-3
      { yours: 1, theirs: 1 }, //1 //-2
      { yours: 1, theirs: 1 }, //2 //-1
      { yours: 1, theirs: 1 }, //3 //0
      { yours: 1, theirs: 0 }, //4 //1
      { yours: 2, theirs: 1 }, //5 //2
      { yours: 2, theirs: 1 }, //6 //3
      { yours: 2, theirs: 0 }, //7 //4
      { yours: 1, theirs: 1 }, //8 //5
      { yours: 2, theirs: 0 }, //9 //6
      { yours: 3, theirs: 1 }, //10 //7
      { yours: 3, theirs: 0 }, //11 //8
      { yours: 2, theirs: 1 }, //12 //9
      { yours: 4, theirs: 0 }, //13 //10
      { yours: 4, theirs: 0 }, //14 //11
      { yours: 4, theirs: 0 }, //15 //12
    ],
  };
  const column2: Column = {
    rows: [
      { yours: 1, theirs: 1, retreat: true }, //0 //-3
      { yours: 1, theirs: 1, retreat: true }, //1 //-2
      { yours: 1, theirs: 1 }, //2 //-1
      { yours: 1, theirs: 2 }, //3 //0
      { yours: 1, theirs: 1 }, //4 //1
      { yours: 1, theirs: 0 }, //5 //2
      { yours: 2, theirs: 1 }, //6 //3
      { yours: 2, theirs: 1 }, //7 //4
      { yours: 2, theirs: 0 }, //8 //5
      { yours: 2, theirs: 0 }, //9 //6
      { yours: 2, theirs: 1 }, //10 //7
      { yours: 3, theirs: 1 }, //11 //8
      { yours: 3, theirs: 0 }, //12 //9
      { yours: 3, theirs: 0 }, //13 //10
      { yours: 2, theirs: 1 }, //14 //11
      { yours: 4, theirs: 0 }, //15 //12
    ],
  };
  const column3: Column = {
    rows: [
      { yours: 0, theirs: 1, retreat: true }, //0 //-3
      { yours: 1, theirs: 1, retreat: true }, //1 //-2
      { yours: 1, theirs: 1, retreat: true }, //2 //-1
      { yours: 1, theirs: 1 }, //3 //0
      { yours: 1, theirs: 0 }, //4 //1
      { yours: 1, theirs: 1 }, //5 //2
      { yours: 1, theirs: 0 }, //6 //3
      { yours: 2, theirs: 1 }, //7 //4
      { yours: 2, theirs: 1 }, //8 //5
      { yours: 2, theirs: 1 }, //9 //6
      { yours: 2, theirs: 0 }, //10 //7
      { yours: 2, theirs: 0 }, //11 //8
      { yours: 3, theirs: 1 }, //12 //9
      { yours: 2, theirs: 1 }, //13 //10
      { yours: 3, theirs: 0 }, //14 //11
      { yours: 4, theirs: 0 }, //15 //12
    ],
  };
  const column4: Column = {
    rows: [
      { yours: 1, theirs: 1, retreat: true }, //0 //-3
      { yours: 1, theirs: 1, retreat: true }, //1 //-2
      { yours: 1, theirs: 1, retreat: true }, //2 //-1
      { yours: 1, theirs: 2, retreat: true }, //3 //0
      { yours: 1, theirs: 1 }, //4 //1
      { yours: 1, theirs: 0 }, //5 //2
      { yours: 2, theirs: 1 }, //6 //3
      { yours: 2, theirs: 1 }, //7 //4
      { yours: 2, theirs: 0 }, //8 //5
      { yours: 2, theirs: 0 }, //9 //6
      { yours: 2, theirs: 1 }, //10 //7
      { yours: 3, theirs: 1 }, //11 //8
      { yours: 3, theirs: 0 }, //12 //9
      { yours: 3, theirs: 0 }, //13 //10
      { yours: 2, theirs: 1 }, //14 //11
      { yours: 4, theirs: 0 }, //15 //12
    ],
  };
  const column5: Column = {
    rows: [
      { yours: 1, theirs: 1, retreat: true }, //0 //-3
      { yours: 1, theirs: 1, retreat: true }, //1 //-2
      { yours: 1, theirs: 1, retreat: true }, //2 //-1
      { yours: 1, theirs: 2, retreat: true }, //3 //0
      { yours: 1, theirs: 1, retreat: true }, //4 //1
      { yours: 1, theirs: 0 }, //5 //2
      { yours: 2, theirs: 1 }, //6 //3
      { yours: 2, theirs: 1 }, //7 //4
      { yours: 2, theirs: 0 }, //8 //5
      { yours: 2, theirs: 0 }, //9 //6
      { yours: 2, theirs: 1 }, //10 //7
      { yours: 3, theirs: 1 }, //11 //8
      { yours: 3, theirs: 0 }, //12 //9
      { yours: 3, theirs: 0 }, //13 //10
      { yours: 2, theirs: 1 }, //14 //11
      { yours: 4, theirs: 0 }, //15 //12
    ],
  };
  const column6: Column = {
    rows: [
      { yours: 0, theirs: 2, retreat: true }, //0 //-3
      { yours: 1, theirs: 2, retreat: true }, //1 //-2
      { yours: 0, theirs: 1 }, //2 //-1
      { yours: 0, theirs: 1, retreat: true }, //3 //0
      { yours: 1, theirs: 2 }, //4 //1
      { yours: 1, theirs: 1, retreat: true }, //5 //2
      { yours: 1, theirs: 1 }, //6 //3
      { yours: 1, theirs: 1 }, //7 //4
      { yours: 2, theirs: 1 }, //8 //5
      { yours: 1, theirs: 0 }, //9 //6
      { yours: 2, theirs: 1 }, //10 //7
      { yours: 2, theirs: 1 }, //11 //8
      { yours: 2, theirs: 0 }, //12 //9
      { yours: 1, theirs: 1 }, //13 //10
      { yours: 2, theirs: 0 }, //14 //11
      { yours: 3, theirs: 1 }, //15 //12
    ],
  };
  const column7: Column = {
    rows: [
      { yours: 1, theirs: 1, retreat: true }, //0 //-3
      { yours: 1, theirs: 1, retreat: true }, //1 //-2
      { yours: 1, theirs: 1, retreat: true }, //2 //-1
      { yours: 1, theirs: 2, retreat: true }, //3 //0
      { yours: 1, theirs: 1, retreat: true }, //4 //1
      { yours: 1, theirs: 0, retreat: true }, //5 //2
      { yours: 2, theirs: 1 }, //6 //3
      { yours: 2, theirs: 1 }, //7 //4
      { yours: 2, theirs: 0 }, //8 //5
      { yours: 2, theirs: 0 }, //9 //6
      { yours: 2, theirs: 1 }, //10 //7
      { yours: 3, theirs: 1 }, //11 //8
      { yours: 3, theirs: 0 }, //12 //9
      { yours: 3, theirs: 0 }, //13 //10
      { yours: 2, theirs: 1 }, //14 //11
      { yours: 4, theirs: 0 }, //15 //12
    ],
  };
  const column8: Column = {
    rows: [
      { yours: 1, theirs: 1, retreat: true }, //0 //-3
      { yours: 1, theirs: 1, retreat: true }, //1 //-2
      { yours: 1, theirs: 1, retreat: true }, //2 //-1
      { yours: 1, theirs: 2, retreat: true }, //3 //0
      { yours: 1, theirs: 1 }, //4 //1
      { yours: 1, theirs: 0, retreat: true }, //5 //2
      { yours: 2, theirs: 1, retreat: true }, //6 //3
      { yours: 2, theirs: 1, retreat: true }, //7 //4
      { yours: 2, theirs: 0 }, //8 //5
      { yours: 2, theirs: 0 }, //9 //6
      { yours: 2, theirs: 1 }, //10 //7
      { yours: 3, theirs: 1 }, //11 //8
      { yours: 3, theirs: 0 }, //12 //9
      { yours: 3, theirs: 0 }, //13 //10
      { yours: 2, theirs: 1 }, //14 //11
      { yours: 4, theirs: 0 }, //15 //12
    ],
  };
  const column9: Column = {
    rows: [
      { yours: 1, theirs: 1, retreat: true }, //0 //-3
      { yours: 1, theirs: 1, retreat: true }, //1 //-2
      { yours: 1, theirs: 1, retreat: true }, //2 //-1
      { yours: 1, theirs: 2, retreat: true }, //3 //0
      { yours: 1, theirs: 1, retreat: true }, //4 //1
      { yours: 1, theirs: 0, retreat: true }, //5 //2
      { yours: 2, theirs: 1 }, //6 //3
      { yours: 2, theirs: 1, retreat: true }, //7 //4
      { yours: 2, theirs: 0, retreat: true }, //8 //5
      { yours: 2, theirs: 0 }, //9 //6
      { yours: 2, theirs: 1 }, //10 //7
      { yours: 3, theirs: 1 }, //11 //8
      { yours: 3, theirs: 0 }, //12 //9
      { yours: 3, theirs: 0 }, //13 //10
      { yours: 2, theirs: 1 }, //14 //11
      { yours: 4, theirs: 0 }, //15 //12
    ],
  };
  const column10: Column = {
    rows: [
      { yours: 1, theirs: 1, retreat: true }, //0 //-3
      { yours: 1, theirs: 1, retreat: true }, //1 //-2
      { yours: 1, theirs: 1, retreat: true }, //2 //-1
      { yours: 1, theirs: 2, retreat: true }, //3 //0
      { yours: 1, theirs: 1, retreat: true }, //4 //1
      { yours: 1, theirs: 0, retreat: true }, //5 //2
      { yours: 2, theirs: 1, retreat: true }, //6 //3
      { yours: 2, theirs: 1, retreat: true }, //7 //4
      { yours: 2, theirs: 0 }, //8 //5
      { yours: 2, theirs: 0, retreat: true }, //9 //6
      { yours: 2, theirs: 1, retreat: true }, //10 //7
      { yours: 3, theirs: 1 }, //11 //8
      { yours: 3, theirs: 0 }, //12 //9
      { yours: 3, theirs: 0 }, //13 //10
      { yours: 2, theirs: 1 }, //14 //11
      { yours: 4, theirs: 0 }, //15 //12
    ],
  };
  const column11: Column = {
    rows: [
      { yours: 0, theirs: 4, retreat: true }, //0 //-3
      { yours: 1, theirs: 3, retreat: true }, //1 //-2
      { yours: 0, theirs: 3, retreat: true }, //2 //-1
      { yours: 1, theirs: 3, retreat: true }, //3 //0
      { yours: 0, theirs: 2 }, //4 //1
      { yours: 0, theirs: 2, retreat: true }, //5 //2
      { yours: 1, theirs: 2, retreat: true }, //6 //3
      { yours: 0, theirs: 1 }, //7 //4
      { yours: 0, theirs: 1, retreat: true }, //8 //5
      { yours: 0, theirs: 1, retreat: true }, //9 //6
      { yours: 1, theirs: 2 }, //10 //7
      { yours: 1, theirs: 1, retreat: true }, //11 //8
      { yours: 1, theirs: 1 }, //12 //9
      { yours: 1, theirs: 1 }, //13 //10
      { yours: 1, theirs: 0 }, //14 //11
      { yours: 2, theirs: 1 }, //15 //12
    ],
  };
  const column12: Column = {
    rows: [
      { yours: 0, theirs: 4, retreat: true }, //0 //-3
      { yours: 1, theirs: 4, retreat: true }, //1 //-2
      { yours: 0, theirs: 3, retreat: true }, //2 //-1
      { yours: 1, theirs: 2 }, //3 //0
      { yours: 1, theirs: 3, retreat: true }, //4 //1
      { yours: 0, theirs: 2, retreat: true }, //5 //2
      { yours: 0, theirs: 2 }, //6 //3
      { yours: 1, theirs: 2, retreat: true }, //7 //4
      { yours: 0, theirs: 1, retreat: true }, //8 //5
      { yours: 1, theirs: 1 }, //9 //6
      { yours: 0, theirs: 1, retreat: true }, //10 //7
      { yours: 1, theirs: 1, retreat: true }, //11 //8
      { yours: 1, theirs: 1, retreat: true }, //12 //9
      { yours: 1, theirs: 1 }, //13 //10
      { yours: 1, theirs: 1 }, //14 //11
      { yours: 2, theirs: 1 }, //15 //12
    ],
  };
  const column13: Column = {
    rows: [
      { yours: 0, theirs: 4, retreat: true }, //0 //-3
      { yours: 0, theirs: 4, retreat: true }, //1 //-2
      { yours: 1, theirs: 4, retreat: true }, //2 //-1
      { yours: 1, theirs: 3 }, //3 //0
      { yours: 0, theirs: 3, retreat: true }, //4 //1
      { yours: 1, theirs: 3, retreat: true }, //5 //2
      { yours: 0, theirs: 2 }, //6 //3
      { yours: 0, theirs: 2, retreat: true }, //7 //4
      { yours: 1, theirs: 2, retreat: true }, //8 //5
      { yours: 0, theirs: 1, retreat: true }, //9 //6
      { yours: 0, theirs: 1 }, //10 //7
      { yours: 0, theirs: 1, retreat: true }, //11 //8
      { yours: 1, theirs: 1, retreat: true }, //12 //9
      { yours: 1, theirs: 1, retreat: true }, //13 //10
      { yours: 1, theirs: 0 }, //14 //11
      { yours: 2, theirs: 1 }, //15 //12
    ],
  };

  const columns = [
    column1,
    column2,
    column3,
    column4,
    column5,
    column6,
    column7,
    column8,
    column9,
    column10,
    column11,
    column12,
    column13,
  ];

  function roundUp(ratioFloat: number) {
    if (ratioFloat > 0.5 && ratioFloat < 1) {
      modifiers += 1;
      return 1;
    } else if (ratioFloat > 1 && ratioFloat < 1.5) {
      modifiers += 1;
      return 1.5;
    } else if (ratioFloat > 1.5 && ratioFloat < 2) {
      modifiers += 1;
      return 2;
    } else if (ratioFloat > 10) {
      modifiers += 1;
      return 10;
    } // highest possible ratio returns highest possible column
    else if (Number.isInteger(ratioFloat)) return ratioFloat;
    else {
      modifiers += 1;
      return Math.ceil(ratioFloat);
    }
  }

  function assignOdds() {
    const ratio = roundUp(attack / defense);
    if (ratio <= 1 / 3 && ratio >= 0) return 1;
    else if (ratio <= 1 / 2 && ratio > 1 / 3) return 2;
    else if (ratio === 1) return 3;
    else if (ratio === 1.5) return 4;
    else if (ratio === 2) return 5;
    else if (ratio === 3) return 6;
    else if (ratio === 4) return 7;
    else if (ratio === 5) return 8;
    else if (ratio === 6) return 9;
    else if (ratio === 7) return 10;
    else if (ratio === 8) return 11;
    else if (ratio === 9) return 12;
    else if (ratio === 10) return 13;
    else return 1;
  }

  function landModifier(terrain: string) {
    if (terrain === "urban") return 0;
    else if (terrain === "mountain") return 1;
    else if (terrain === "highlands" || terrain === "highland_woods") return 2;
    else if (
      terrain === "rough" ||
      terrain === "rough_woods" ||
      terrain === "marsh"
    )
      return 3;
    else if (terrain === "flat" || terrain === "flat_woods") return 4;
    else return -1;
  }

  function roll() {
    const die = dice(10);
    const rollResult = die.roll(modifiers);
    console.log("die roll: " + rollResult);
    console.log("modifiers: " + modifiers);
    return(rollResult);
  }

  function getRowIndex(): number {
    const result = roll();
    if (result <= -3) return 0;
    else if (result >= 12) return 15;
    else return result + 3;
  }

  function getColumnIndex(): number {
    const terrainMod = landModifier("mountain");
    const columnVal = assignOdds() + terrainMod;
    if (columnVal > 0) return columnVal;
    else return -1;
  }

  function getResult() {
    const rowIndex = getRowIndex();
    const columnIndex = getColumnIndex() - 1; // subtract to begin at 0 for array indexing
    console.log(columns[columnIndex]);
    return columns[columnIndex].rows[rowIndex];
  }

  return { getResult, getColumnIndex };
}
