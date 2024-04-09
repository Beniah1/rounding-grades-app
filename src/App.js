import React from 'react';

function roundGrades(grades) {
    return grades.map(grade => {
        if (grade < 38 || grade % 5 < 3) {
            return grade;
        } else {
            return grade + (5 - grade % 5);
        }
    });
}

function App() {
    const grades = [25, 37, 83];
    const roundedGrades = roundGrades(grades);

    return (
        <div>
            <h1>Rounded Grades</h1>
            <ul>
                {roundedGrades.map((grade, index) => (
                    <li key={index}>{grade}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;

// The provided code is a simple React component that rounds grades based on specific rules and displays the rounded grades in a list format on the webpage. Here is a detailed explanation:

// Import Statement:
// import React from 'react';: This line imports the React module from the 'react' package. In React, you need to import React to create components.
// roundGrades Function:
// This function takes an array of grades as input and uses the map method to iterate over each grade.
// It checks if the grade is less than 38 or if the remainder of the grade divided by 5 is less than 3. If either condition is true, it returns the original grade.
// If the above conditions are not met, it adds the difference between 5 and the remainder of the grade divided by 5 to the grade, effectively rounding it up to the nearest multiple of 5.
// The function returns an array of rounded grades.
// App Function Component:
// This is a functional component named App that renders the UI of the React application.
// It initializes an array of grades [25, 37, 83].
// It calls the roundGrades function with the grades array and stores the rounded grades in the roundedGrades variable.
// The component returns JSX, which represents the structure of the UI:
// It contains a <div> element with a heading <h1> "Rounded Grades".
// Inside the <div>, there is an unordered list <ul> that iterates over the roundedGrades array using the map method.
// For each rounded grade, it creates a list item <li> with the grade value, using the index as the key attribute to uniquely identify each list item.
// Export Statement:
// export default App;: This line exports the App component as the default export from this module. This allows other parts of the application to import and use this component.
// In summary, this code defines a React component that rounds grades according to specific rules and displays the rounded grades in a list format on the webpage.