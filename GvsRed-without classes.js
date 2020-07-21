function greenVsRed(input) {
    let rows = input[0].split(",").map(Number).shift();
    let cols = input[0].split(",").map(Number).pop();
    let grid = initState(rows, input);
    let target = input[input.length - 1].split(",").map(Number);
    let targetX = target[0];
    let targetY = target[1];
    let targetGenerationsCount = target[2];
    let result = 0;

    for (let i = 0; i <= targetGenerationsCount; i++) {
        console.log(grid.join("\n"))
        console.log("--------")
        if (grid[targetY][targetX] == 1) {
            result++;
        }
        grid = nextGeneration(grid);
    }

    function nextGeneration(grid) {
        let nextGen = new Array;
        let thisRow = [];
        for (let i = 0; i < rows; i++) {
            thisRow = [];
            for (let j = 0; j < cols; j++) {
                let greenNeighbours = 0;
                if (grid.hasOwnProperty(i - 1) && grid[i - 1].hasOwnProperty(j - 1)) {
                    if (grid[i - 1][j - 1] == 1) {
                        greenNeighbours++;
                    }
                }
                if (grid.hasOwnProperty(i - 1) && grid[i - 1].hasOwnProperty(j)) {
                    if (grid[i - 1][j] == 1) {
                        greenNeighbours++;
                    }

                }
                if (grid.hasOwnProperty(i - 1) && grid[i - 1].hasOwnProperty(j + 1)) {
                    if (grid[i - 1][j + 1] == 1) {
                        greenNeighbours++;
                    }
                }
                if (grid[i].hasOwnProperty(j - 1)) {
                    if (grid[i][j - 1] == 1) {
                        greenNeighbours++;
                    }
                }
                if (grid[i].hasOwnProperty(j + 1)) {
                    if (grid[i][j + 1] == 1) {
                        greenNeighbours++;
                    }
                }
                if (grid.hasOwnProperty(i + 1) && grid[i + 1].hasOwnProperty(j - 1)) {
                    if (grid[i + 1][j - 1] == 1) {
                        greenNeighbours++;
                    }
                }
                if (grid.hasOwnProperty(i + 1) && grid[i + 1].hasOwnProperty(j)) {
                    if (grid[i + 1][j] == 1) {
                        greenNeighbours++;
                    }
                }
                if (grid.hasOwnProperty(i + 1) && grid[i + 1].hasOwnProperty(j + 1)) {
                    if (grid[i + 1][j + 1] == 1) {
                        greenNeighbours++;
                    }
                }
                if (grid[i][j] == 1) {
                    if (!(greenNeighbours == 2 || greenNeighbours == 3 || greenNeighbours == 6)) {
                        thisRow.push(0);
                        // thisRow[i][j] = 0
                        // nextGen[i][j] = 0;
                    } else {
                        thisRow.push(1);
                        // thisRow[i][j] = 1
                    }
                } else {
                    if (greenNeighbours == 3 || greenNeighbours == 6) {
                        thisRow.push(1)
                        // thisRow[i][j] = 1
                        // nextGen[i][j] = 1;
                    } else {
                        thisRow.push(0);
                        // thisRow[i][j] = 0
                    }
                }
            }
            nextGen.push(thisRow);
        }
        // console.dir(nextGen);
        return (nextGen);
    }
    console.log(result);
}


function initState(rows, input) {
    let state = [];
    for (let i = 1; i <= rows; i++) {
        state.push(input[i].split("").map(Number));
    }
    return state
}

greenVsRed([
    "3, 3",
    "000",
    "111",
    "000",
    "1, 0, 10"
]
);

greenVsRed([
    "4, 4",
    "1001",
    "1111",
    "0100",
    "1010",
    "2, 2, 15"
]
);