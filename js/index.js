import {  TetrisGame } from "./config/gameConfig.js";
import {
  drawFieldNewState,
  dropTetro,
  moveTetroDown,
  rotateTetro,
  updateGameState,
  moveTetroHorizontally,
} from "./core/tetro/tetrominoLogic.js";

import {setupEventListeners} from "./core/events/setupEventListeners.js";

setupEventListeners()
drawFieldNewState();



