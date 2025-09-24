# Flag Matching Game

A timed, drag-and-drop game built with vanilla JavaScript, HTML, and CSS
that tests players\' knowledge of world flags. The game features
multiple difficulty levels, a dynamic UI, and randomized flag selections
for high replayability.

## Features

- **Five Difficulty Levels:** The game scales in challenge, increasing the number of flags and decreasing the time limit at each level.

- **Dynamic Game Board:** The entire game interface, including the flag bank and country drop-zones, is generated dynamically using JavaScript based on the user\'s level selection.

- **Interactive Drag-and-Drop:** Flags can be smoothly dragged from the image bank and dropped onto their corresponding country names.

- **Randomized Questions:** The flags and their corresponding country positions are randomized each time a game is started, ensuring a unique experience in every playthrough.

- **Scoring and Feedback:** The game provides instant visual feedback on correct and incorrect answers after submission.

- **State Tracking:** The UI keeps track of which levels have been successfully completed, encouraging players to finish all five.

## How to Play

1.  **Select a Level:** Choose one of the five difficulty levels from the dropdown menu.

2.  **Start the Game:** Click the \"Start Game\" button to begin the timer and reveal the flags.

3.  **Drag and Drop:** Drag each flag from the image bank at the top and drop it onto the box with the correct country name at the bottom.

4.  **Submit:** Once all flags have been placed, the \"Submit\" button will become active. Click it to check your answers.

5.  **View Results:** See your score! You can then choose to \"Play Again\" or \"Try Again\" depending on the outcome.

## Core Algorithms and Coding Techniques

This project was built from the ground up without any external
libraries, relying on core JavaScript techniques for interactivity and
state management.

### 1. Dynamic DOM Manipulation {#dynamic-dom-manipulation}

Instead of having a static game board, the entire user interface is
procedurally generated after the user selects a level.

- On game start, all initial menu elements are removed from the DOM.

- New elements, including the flag images (\<img\>), the destination boxes (\<svg\> rectangles), and country name labels (\<div\>), are created and appended to the document body.

- Element positions and dimensions are calculated dynamically based on screen size (window.innerWidth, window.innerHeight) and the number of flags for that level, making the layout responsive.

### 2. Event-Driven Game State Management {#event-driven-game-state-management}

The game\'s flow is managed through a custom event-driven system rather
than a monolithic loop. Custom Event objects (startGame, success, fail)
are dispatched and listened for, decoupling the game logic.

- document.dispatchEvent(startEvent): Kicks off the game setup, UI generation, and timer.

- document.dispatchEvent(failEvent): Triggered when the timer runs out or the user submits an incorrect answer. This event\'s listener handles freezing the game, displaying the failure message, and setting up the \"Try Again\" button.

- document.dispatchEvent(successEvent): Triggered on a correct submission. This listener handles stopping the timer, displaying the success message, and showing the \"Play Again\" or \"Congratulations\" screen.

This approach keeps the code organized and makes it easier to manage
different states of the game (menu, playing, won, lost).

### 3. Custom Drag-and-Drop Implementation {#custom-drag-and-drop-implementation}

The drag-and-drop functionality is implemented from scratch using
fundamental mouse events.

1.  **onmousedown:** When the user clicks on a flag, its initial position and the mouse coordinates are recorded. An onmousemove listener is attached to the document.

2.  **onmousemove:** The flag\'s top and left CSS properties are continuously updated to match the mouse\'s movement, creating the dragging effect. The flag\'s z-index is elevated to ensure it appears above other elements.

3.  **onmouseup:** The onmousemove listener is removed, \"dropping\" the flag. The code then checks if the flag was dropped successfully into a valid target. By removing the onmousemove listener only when the user releases their mouse (regardless of where it is relative to the image), there is no possibility of the mouse "losing" the image mid-drag due to lag in image position updates.

The \"drop\" logic doesn\'t require perfect placement. The
calculateOverlapArea function determines the rectangular intersection
between the flag\'s bounding box and each destination box. If the
overlap is greater than 50% of the flag\'s total area and the box is
unoccupied, the flag \"snaps\" to the box\'s center. If not, it returns
to its original position in the image bank. This makes the game feel
intuitive and forgiving.

## Technologies Used

- **HTML5**

- **CSS3**

- **Vanilla JavaScript (ES6)**
