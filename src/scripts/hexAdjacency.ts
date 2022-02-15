export function hexAdjacency(x_source: number, y_source: number) {
  //---------- Cardinals ------------ //
  function isNorth(y_dest: number) {
    return y_source - y_dest === 1;
  }
  function isSouth(y_dest: number) {
    return y_dest - y_source === 1;
  }
  function isWest(x_dest: number) {
    return x_source - x_dest === 1;
  }
  function isEast(x_dest: number) {
    return x_dest - x_source === 1;
  }
  function isStaticY(y_dest: number) {
    return y_source - y_dest === 0;
  }
  function isStaticX(x_dest: number) {
    return x_dest - x_source === 0;
  }
  //---------- Odds ------------ //
  function isNorthWestOdd(x_dest: number, y_dest: number) {
    return isStaticY(y_dest) && isWest(x_dest);
  }
  function isNorthEastOdd(x_dest: number, y_dest: number) {
    return isStaticY(y_dest) && isEast(x_dest);
  }
  function isSouthWestOdd(x_dest: number, y_dest: number) {
    return isSouth(y_dest) && isWest(x_dest);
  }
  function isSouthEastOdd(x_dest: number, y_dest: number) {
    return isSouth(y_dest) && isEast(x_dest);
  }
  //---------- Evens ---------- //
  function isNorthWestEven(x_dest: number, y_dest: number) {
    return isNorth(y_dest) && isWest(x_dest);
  }
  function isNorthEastEven(x_dest: number, y_dest: number) {
    return isNorth(y_dest) && isEast(x_dest);
  }
  function isSouthWestEven(x_dest: number, y_dest: number) {
    return isStaticY(y_dest) && isWest(x_dest);
  }
  function isSouthEastEven(x_dest: number, y_dest: number) {
    return isStaticY(y_dest) && isEast(x_dest);
  }
  //---------- Due ---------- //
  function isDueNorth(x_dest: number, y_dest: number) {
    return isNorth(y_dest) && isStaticX(x_dest);
  }
  function isDueSouth(x_dest: number, y_dest: number) {
    return isSouth(y_dest) && isStaticX(x_dest);
  }

  function isAdjacentOdd(x_dest: number, y_dest: number) {
    if (isNorthWestOdd(x_dest, y_dest)) {
      return true;
    } else if (isNorthEastOdd(x_dest, y_dest)) {
      return true;
    } else if (isSouthWestOdd(x_dest, y_dest)) {
      return true;
    } else if (isSouthEastOdd(x_dest, y_dest)) {
      return true;
    } else {
      return false;
    }
  }

  function isAdjacentEven(x_dest: number, y_dest: number) {
    if (isNorthWestEven(x_dest, y_dest)) {
      return true;
    } else if (isNorthEastEven(x_dest, y_dest)) {
      return true;
    } else if (isSouthWestEven(x_dest, y_dest)) {
      return true;
    } else if (isSouthEastEven(x_dest, y_dest)) {
      return true;
    } else {
      return false;
    }
  }

  function isAdjacentOddEven(x_dest: number, y_dest: number) {
    if (x_source % 2 === 0) {
      return isAdjacentEven(x_dest, y_dest);
    } else {
      return isAdjacentOdd(x_dest, y_dest);
    }
  }

  function isAdjacent(x_dest: number, y_dest: number) {
    if (isDueNorth(x_dest, y_dest)) {
      return true;
    } else if (isDueSouth(x_dest, y_dest)) {
      return true;
    } else if (isAdjacentOddEven(x_dest, y_dest)) {
      return true;
    } else {
      return false;
    }
  }

  return { isAdjacent };
}
