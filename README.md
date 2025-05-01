# Tetromino Web Game

## Live Website

- 🌐 **Visit Here:** [Tetromino Web Game](https://marynashavlak.github.io/tetromino/)

## Overview

**Industry:** Web Games  
**Type:** Individual Project  
**Categories:** JavaScript, HTML, CSS, Canvas  
**Date:** 2025  
**Timeline:** 8 hours  

## Description

**Tetromino** is an engaging web-based puzzle game that combines smooth animations with layered visuals. The game leverages multiple canvas elements to provide seamless visual effects and interactive menus, allowing for real-time tetromino manipulation and dynamic game progression. It features a polished game flow with intuitive pause/resume functionality, a game over system, and a confirmation flow for restarting or exiting the game.

Players can enjoy a challenge with increasing difficulty, visual effects like arc animations and concentric circles, and well-designed game mechanics that enhance the overall gameplay experience.

## Features

### Canvas-Based Visual Effects

- Multiple layered `<canvas>` elements dedicated to animated visuals.
- Effects are segregated from the core Tetris logic for clarity and performance.

### Dynamic Animation Techniques

- Includes progressive arc animations and concentric circle effects.
- Arcs expand and contract smoothly using `requestAnimationFrame`.
- Concentric circles expand from the center, featuring inner and outer rings for depth.

### Seamless Animation Flow

- Smooth transitions between stages driven by state changes.
- Independent canvas layers manage specific visual elements.
- Enables composite effects and updates without flicker or redraw conflicts.

### Interactive Start Menu

- Animated main menu with options: Set Username, How to Play, and START.
- Each option triggers modular UI transitions with smooth visual feedback.

### Username & Rules Flow

- Username input form replaces menu on click, submits with greeting and returns.
- Rules view includes keyboard instructions and back navigation logic.

### Seamless Game Launch

- **START** triggers animated transition to game UI with progressive canvas effects.
- UI sections (level, player info, etc.) appear in timed sequence for polished entry.

### Level Progression

- 5 predefined levels with increasing difficulty.
- Each level has custom speed, score per line, and point goal.
- Level 5 is the final stage with max challenge.

### Tetromino Definitions

- 7 standard tetrominoes: O, I, S, Z, L, J, T.
- Each defined by a 4x4 matrix layout.
- Shapes used for rendering and collision detection.

### Game State Management

- Stores playfield as 20x10 grid.
- Tracks current level, score, lines, and next goal.

### Real-Time Tetromino Manipulation

- Rotate tetromino, soft drop it, move tetromino horizontally.
- Instantly hard drop tetromino to the bottom.

### Start Game Session

- First-time start initializes game state and UI.
- Runs game loop, shows next tetromino, enables controls.
- If game was started before, shows confirmation and pauses game.

### New Game Confirmation

- Modal warns about losing previous progress when starting a new game.
- Includes 'Yes' to proceed and 'No' to cancel.

### Pause & Resume Game

- Pause button toggles game state during active session.
- Pauses game by stopping timer and freezing logic.
- Resumes game and updates button state accordingly.

### Exit Game Flow

- Confirmation modal warns about progress loss.
- Pauses game and disables controls if already started.
- 'No' resumes game, 'Yes' resets state and back to menu.

### Game Over Flow

- Game over window appears when collisions occur after tetromino drop.
- Displays 'Game Over' message and a 'Start New Game' button.

## Skills Demonstrated

- **HTML5 & CSS3**  
- **JavaScript (ES6+)**  
- **Canvas Animation & Visual Effects**  
- **DOM Manipulation**  
- **Event Handling**  
- **Modular File Structure**  
- **Code Splitting**  
- **Algorithmic Thinking**  
- **Mathematics for Geometry**  
- **Mathematical Computations**  
- **Conditional Logic**  
- **Synchronous and Asynchronous Programming**  
- **Object-Oriented Concepts**  

## Tech Stack

### Architecture

- Vanilla **JavaScript** multi-page application with **Canvas**

### Frontend

- HTML5  
- CSS3  
- JavaScript (ES6+)

### Tools

- Prettier for code formatting

### UI Libraries

- Google Fonts  
- Font Awesome

### Styling

- **CSS** following **BEM methodology**




