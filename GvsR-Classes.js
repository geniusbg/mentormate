//Grid class - reduce input in matrix
class Grid {
    constructor(rows, cols, input) {
        this.rows = rows;
        this.cols = cols;
        this.input = input;
        this.state = [];
        //initial state
        for (let i = 0; i < this.rows; i++) { 
            //Insert string arrays "input" in number arrays "state"
            this.state.push(this.input[i].split("").map(Number));
        }
        return this.state;
    }
}

//Target Point Class - check how many times x1, y1 (targetpoint), was green
class TargetPoint {
    constructor(x1, y1) {
        this.x1 = x1;
        this.y1 = y1;
        this.greenStatus = 0;
    }
    //Get final result
    get status() { 
        return this.greenStatus
    }
    //Check generation for targetpoint
    check(grid) {
        if (grid[this.y1][this.x1] == 1) {
            //if the targetpoint is green, increases the green status
            this.greenStatus++;
        }
    }
}

//Next Generation Class - Generate next generation
class NextGeneration {
    constructor(grid) {
        this.grid = grid
        return this.nextGrid(this.grid);
    }
    //Set of 4 rules are applied across the grid and those rules form next Generation
    nextGrid(grid) {
        let nextGen = []; 
        let thisRow = [];
        for (let i = 0; i < grid.length; i++) {
            thisRow = [];
            for (let j = 0; j < grid[i].length; j++) {
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
                    } else {
                        thisRow.push(1);
                    }
                } else {
                    if (greenNeighbours == 3 || greenNeighbours == 6) {
                        thisRow.push(1)
                    } else {
                        thisRow.push(0);
                    }
                }
            }
            nextGen.push(thisRow);
        }
        return nextGen;
    }
}

// GREEN Vs. RED

function greenVsRed(input) {
    let rows = input[0].split(",").map(Number).shift(); //Get grid rows from the input
    let cols = input[0].split(",").map(Number).pop(); //Get grid cols from the input
    input.splice(0, 1); //Remove first string from input
    let target = input[input.length - 1].split(",").map(Number); //Get target point and Generation endpoint
    let targetX = target[0]; //Set x1
    let targetY = target[1]; // Set y1
    let targetGenerationsCount = target[2]; //Set Generations endpoint
    input.splice(input.length - 1, 1); //Remove last string from input
    let grid = new Grid(rows, cols, input); //Initial grid class instance
    let targetPoint = new TargetPoint(targetX, targetY) //Initial target point instance

    //Check Generation for green target point
    for (let i = 0; i <= targetGenerationsCount; i++) {
        //Check grid instance for green target cell
        targetPoint.check(grid);
        //Init next generation state
        grid = new NextGeneration(grid);
    }
    //print final result
    console.log(targetPoint.status)
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
