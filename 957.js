// 957. Prison Cells After N Days

/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
const prisonAfterNDays = (cells, N) => {
	let newCells = [];
    for (let i = 1; i <= N; i++) {
        for (j = 0; j < cells.length; j++) {
            if ((cells[j - 1] === 0 && cells[j + 1] === 0) || (cells[j - 1] === 1 && cells[j + 1] === 1)) {
                newCells[j] = 1
            } else newCells[j] = 0;
        }
        cells = [...newCells]
    }
    return newCells
};

console.log(prisonAfterNDays([0,1,0,1,1,0,0,1], 7))