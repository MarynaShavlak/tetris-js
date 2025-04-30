export const  possibleLevels = {
    1: {
        pointsPerOneFilledLine: 40,
        speed: 600,
        goalForNextLevel: 200,
    },
    2: {
        pointsPerOneFilledLine: 10,
        speed: 500,
        goalForNextLevel: 600,
    },
    3: {
        pointsPerOneFilledLine: 15,
        speed: 400,
        goalForNextLevel: 1200,
    },
    4: {
        pointsPerOneFilledLine: 20,
        speed: 400,
        goalForNextLevel: 2000,
    },
    5: {
        pointsPerOneFilledLine: 25,
        speed: 300,
        goalForNextLevel: 3000,
        // goalForNextLevel: Infinity,
    },
};

export const figures = {
    O: [
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ],

    I: [
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ],

    S: [
        [0, 0, 1, 1],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ],

    Z: [
        [0, 1, 1, 0],
        [0, 0, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ],

    L: [
        [0, 1, 0, 0],
        [0, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ],

    J: [
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
    ],

    T: [
        [1, 1, 1, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ],
};

export const tetroColors = [
    'red',
    'blue',
    'aqua',
    'fuchsia',
    'orange',
    'greenyellow',
    'indigo',
    'darkgreen',
    'yellow',
    'deeppin',
];


export const TetrisGame = {
    playField: Array.from({ length: 20 }, () => Array(10).fill(0)),
    linesInFinishedGame: null,
}
