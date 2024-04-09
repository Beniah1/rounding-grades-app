# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Code Explanation 
The provided code is a simple React component that rounds grades based on specific rules and displays the rounded grades in a list format on the webpage. Here is a detailed explanation:

Import Statement:
import React from 'react';: This line imports the React module from the 'react' package. In React, you need to import React to create components.
roundGrades Function:
This function takes an array of grades as input and uses the map method to iterate over each grade.
It checks if the grade is less than 38 or if the remainder of the grade divided by 5 is less than 3. If either condition is true, it returns the original grade.
If the above conditions are not met, it adds the difference between 5 and the remainder of the grade divided by 5 to the grade, effectively rounding it up to the nearest multiple of 5.
The function returns an array of rounded grades.
App Function Component:
This is a functional component named App that renders the UI of the React application.
It initializes an array of grades [25, 37, 83].
It calls the roundGrades function with the grades array and stores the rounded grades in the roundedGrades variable.
The component returns JSX, which represents the structure of the UI:
It contains a <div> element with a heading <h1> "Rounded Grades".
Inside the <div>, there is an unordered list <ul> that iterates over the roundedGrades array using the map method.
For each rounded grade, it creates a list item <li> with the grade value, using the index as the key attribute to uniquely identify each list item.
Export Statement:
export default App;: This line exports the App component as the default export from this module. This allows other parts of the application to import and use this component.
In summary, this code defines a React component that rounds grades according to specific rules and displays the rounded grades in a list format on the webpage.