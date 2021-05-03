# Getting Started with card-match-game
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Code Splitting
The structure of this game consists of:
- Five components:
 - Card.js is the component for each card that includes the cards being flipped when clicked on.
 - Game.js is the component for the structure of how the game works, which manages score, highlights player, mounts gameboard.
 - Gameboard.js is the component which mounts 20 cards and checks whether the flip cards match or not
 - Gameover.js is the component which is mounted when players don't want to play the game anymore.
 - Header.js is the component which displays current score, round, and which players turn it is.

-Encountered Issues:
 - Without the 'react-card-flip' library, a card flip animation would be very difficult.
