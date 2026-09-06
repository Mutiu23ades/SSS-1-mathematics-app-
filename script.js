function showTopic() {

    const topic = document.getElementById("topicSelect").value;
    const lesson = document.getElementById("lesson");

    const topics = {
        1: "Number Bases",
        2: "Fractions and Decimals",
        3: "Approximation and Estimation",
        4: "Standard Form",
        5: "Logarithms",
        6: "Indices",
        7: "Surds",
        8: "Sets",
        9: "Algebraic Expressions",
        10: "Factorization",
        11: "Linear Equations",
        12: "Change of Subject of Formula",
        13: "Simultaneous Equations",
        14: "Quadratic Equations",
        15: "Variation",
        16: "Sequence and Series",
        17: "Binary Operations",
        18: "Modular Arithmetic",
        19: "Plane Geometry",
        20: "Angles and Lines",
        21: "Triangles",
        22: "Quadrilaterals and Polygons",
        23: "Circles",
        24: "Mensuration of Plane Shapes",
        25: "Mensuration of Solids",
        26: "Coordinate Geometry",
        27: "Straight Lines and Graphs",
        28: "Trigonometry",
        29: "Bearings and Distances",
        30: "Statistics",
        31: "Measures of Central Tendency",
        32: "Probability",
        33: "Permutation",
        34: "Combination",
        35: "Introduction to Matrices"
    };

    if (topic === "") {

        lesson.innerHTML = `
            <p>Select a topic above to begin learning.</p>
        `;

        return;
    }

    lesson.innerHTML = `
        <h2>Topic ${topic}: ${topics[topic]}</h2>

        <h3>Lesson</h3>
        <p>
            The detailed lesson for ${topics[topic]} will be provided here.
        </p>

        <h3>Worked Examples</h3>
        <p>
            Worked examples will be provided here.
        </p>

        <h3>Practice Questions</h3>
        <p>
            Practice questions will be provided here.
        </p>

        <h3>Answers</h3>
        <p>
            Answers will be provided here.
        </p>
    `;
}
