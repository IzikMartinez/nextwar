export function hexAdjacency(x1: number, y1: number) {
  //---------- Cardinals ------------ //
  function isNorth(y2: number) {
    return y1 - y2 === 1;
  }
  function isSouth(y2: number) {
    return y2 - y1 === 1;
  }
  function isWest(x2: number) {
    return x1 - x2 === 1;
  }
  function isEast(x2: number) {
    return x2 - x1 === 1;
  }
  function isStaticY(y2: number) {
    return y1 - y2 === 0;
  }
  function isStaticX(x2: number) {
    return x2 - x1 === 0;
  }
  //---------- Odds ------------ //
  function isNorthWestOdd(x2: number, y2: number) {
    return isStaticY(y2) && isWest(x2);
  }
  function isNorthEastOdd(x2: number, y2: number) {
    return isStaticY(y2) && isEast(x2);
  }
  function isSouthWestOdd(x2: number, y2: number) {
    return isSouth(y2) && isWest(x2);
  }
  function isSouthEastOdd(x2: number, y2: number) {
    return isSouth(y2) && isEast(x2);
  }
  //---------- Evens ---------- //
  function isNorthWestEven(x2: number, y2: number) {
    return isNorth(y2) && isWest(x2);
  }
  function isNorthEastEven(x2: number, y2: number) {
    return isNorth(y2) && isEast(x2);
  }
  function isSouthWestEven(x2: number, y2: number) {
    return isStaticY(y2) && isWest(x2);
  }
  function isSouthEastEven(x2: number, y2: number) {
    return isStaticY(y2) && isEast(x2);
  }
  //---------- Due ---------- //
  function isDueNorth(x2: number, y2: number) {
    return isNorth(y2) && isStaticX(x2);
  }
  function isDueSouth(x2: number, y2: number) {
    return isSouth(y2) && isStaticX(x2);
  }

  function isAdjacentOdd(x2: number, y2: number) {
    if (isNorthWestOdd(x2, y2)) {
      return true;
    } else if (isNorthEastOdd(x2, y2)) {
      return true;
    } else if (isSouthWestOdd(x2, y2)) {
      return true;
    } else if (isSouthEastOdd(x2, y2)) {
      return true;
    } else {
      return false;
    }
  }

  function isAdjacentEven(x2: number, y2: number) {
    if (isNorthWestEven(x2, y2)) {
      return true;
    } else if (isNorthEastEven(x2, y2)) {
      return true;
    } else if (isSouthWestEven(x2, y2)) {
      return true;
    } else if (isSouthEastEven(x2, y2)) {
      return true;
    } else {
      return false;
    }
  }

  function isAdjacentOddEven(x2: number, y2: number) {
    if (x1 % 2 === 0) {
      return isAdjacentEven(x2, y2);
    } else {
      return isAdjacentOdd(x2, y2);
    }
  }

  function isAdjacent(x2: number, y2: number) {
    if (isDueNorth(x2, y2)) {
      return true;
    } else if (isDueSouth(x2, y2)) {
      return true;
    } else if (isAdjacentOddEven(x2, y2)) {
      return true;
    } else {
      return false;
    }
  }

  return { isAdjacent };
}
