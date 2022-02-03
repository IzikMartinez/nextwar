import { useCoordStore } from "@/store/coordinateStore";
import { onBeforeMount, reactive } from "vue";

export function makeGrid() {
  const store = useCoordStore();
  const hexState = reactive({
    hexes: [{}],
  });

  function getRowCoordinate(rowIndex: number) {
    return store.rowOffset * rowIndex;
  }
  function getColumnOffset(isOdd: boolean) {
    return isOdd ? 150 : 0;
  }

  function getColumnCoordinate(column: number, columnOffset: number) {
    return column * store.columnCoefficient + columnOffset;
  }
  /* Make Columns
   *  Input: Number (int), y_in (int)
   *  Output: None
   *  Description: This function uses a for loop to generate multiple elements for the Hexes list. i is the iterator
   *   k is the y value modifier. Each row needs to be 87 pixels away from the last, and thus k multiples the y_in
   *   variable by 87 to produce the position for the desired row.
   * */
  function makeColumns(num_of_col: number, row_index: number, isOdd = false) {
    const k = getRowCoordinate(row_index);
    const c_offset = getColumnOffset(isOdd);
    for (let column = 0; column < num_of_col; column++) {
      const j = getColumnCoordinate(column, c_offset);
      hexState.hexes.push({ x: j, y: k });
    }
  }

  onBeforeMount(() => {
    const rows = 10;
    for (let i = 0; i < rows; i += 2) {
      makeColumns(8, i);
      makeColumns(7, i + 1, true);
    }
  });

  return {
    makeColumns,
    hexState,
  };
}
