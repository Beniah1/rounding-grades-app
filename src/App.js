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