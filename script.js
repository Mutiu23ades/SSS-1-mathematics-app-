const topics = {

    // =========================================================
    // TOPIC 1: NUMBER BASES
    // =========================================================

    1: {
        title: "Number Bases",

        lesson: `
            <p><strong>Number bases</strong> are systems used to represent numbers using a fixed set of digits.</p>

            <p>The decimal number system that we normally use is called <strong>base 10</strong>. It uses the digits
            0, 1, 2, 3, 4, 5, 6, 7, 8 and 9.</p>

            <p>Other common bases include:</p>

            <ul>
                <li>Binary — base 2: digits 0 and 1</li>
                <li>Base 3: digits 0, 1 and 2</li>
                <li>Base 4: digits 0, 1, 2 and 3</li>
                <li>Base 5: digits 0 to 4</li>
                <li>Base 8: digits 0 to 7</li>
            </ul>

            <p>In any base, the value of a digit depends on its position.</p>

            <p>For example:</p>

            <p>
            <strong>132<sub>4</sub></strong>
            =
            1 × 4<sup>2</sup> + 3 × 4<sup>1</sup> + 2 × 4<sup>0</sup>
            </p>

            <p>
            = 1 × 16 + 3 × 4 + 2
            </p>

            <p>
            = 16 + 12 + 2 = <strong>30<sub>10</sub></strong>
            </p>

            <p>To convert a decimal number to another base, repeatedly divide by the new base and record the remainders.
            Read the remainders from bottom to top.</p>
        `,

        examples: `
            <p><strong>Example 1:</strong> Convert 1011<sub>2</sub> to base 10.</p>

            <p>
            1011<sub>2</sub>
            = 1×2<sup>3</sup> + 0×2<sup>2</sup> + 1×2<sup>1</sup> + 1×2<sup>0</sup>
            </p>

            <p>
            = 8 + 0 + 2 + 1 = <strong>11<sub>10</sub></strong>
            </p>

            <p><strong>Example 2:</strong> Convert 25<sub>10</sub> to base 2.</p>

            <p>
            25 ÷ 2 = 12 remainder 1<br>
            12 ÷ 2 = 6 remainder 0<br>
            6 ÷ 2 = 3 remainder 0<br>
            3 ÷ 2 = 1 remainder 1<br>
            1 ÷ 2 = 0 remainder 1
            </p>

            <p>Reading the remainders upward:</p>

            <p><strong>25<sub>10</sub> = 11001<sub>2</sub></strong></p>

            <p><strong>Example 3:</strong> Convert 132<sub>4</sub> to base 10.</p>

            <p>
            132<sub>4</sub>
            = 1×4<sup>2</sup> + 3×4 + 2
            = 16 + 12 + 2
            = <strong>30<sub>10</sub></strong>
            </p>
        `,

        practice: `
            <ol>
                <li>Convert 1010<sub>2</sub> to base 10.</li>
                <li>Convert 1111<sub>2</sub> to base 10.</li>
                <li>Convert 18<sub>10</sub> to base 2.</li>
                <li>Convert 23<sub>10</sub> to base 4.</li>
                <li>Convert 213<sub>4</sub> to base 10.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>10<sub>10</sub></li>
                <li>15<sub>10</sub></li>
                <li>10010<sub>2</sub></li>
                <li>1011<sub>4</sub></li>
                <li>39<sub>10</sub></li>
            </ol>
        `
    },


    // =========================================================
    // TOPIC 2: FRACTIONS AND DECIMALS
    // =========================================================

    2: {
        title: "Fractions and Decimals",

        lesson: `
            <p>A <strong>fraction</strong> represents part of a whole.</p>

            <p>A fraction has two parts:</p>

            <ul>
                <li><strong>Numerator:</strong> the number above the line.</li>
                <li><strong>Denominator:</strong> the number below the line.</li>
            </ul>

            <p>Examples include 1/2, 3/4 and 7/10.</p>

            <p>A <strong>proper fraction</strong> has a numerator smaller than its denominator, such as 3/5.</p>

            <p>An <strong>improper fraction</strong> has a numerator greater than or equal to its denominator,
            such as 7/4.</p>

            <p>A <strong>mixed number</strong> contains a whole number and a fraction, such as 1 3/4.</p>

            <p>To add or subtract fractions with different denominators, first find a common denominator.</p>

            <p>To multiply fractions, multiply the numerators together and the denominators together.</p>

            <p>To divide by a fraction, multiply by its reciprocal.</p>

            <p>Decimals can be converted to fractions by using place value.</p>
        `,

        examples: `
            <p><strong>Example 1:</strong> Calculate 1/3 + 1/6.</p>

            <p>The lowest common denominator is 6.</p>

            <p>
            1/3 = 2/6
            </p>

            <p>
            Therefore:
            </p>

            <p>
            2/6 + 1/6 = <strong>3/6 = 1/2</strong>
            </p>

            <p><strong>Example 2:</strong> Calculate 3/4 × 2/5.</p>

            <p>
            3/4 × 2/5 = 6/20 = <strong>3/10</strong>
            </p>

            <p><strong>Example 3:</strong> Convert 0.375 to a fraction.</p>

            <p>
            0.375 = 375/1000
            </p>

            <p>
            Dividing numerator and denominator by 125:
            </p>

            <p>
            375/1000 = <strong>3/8</strong>
            </p>

            <p><strong>Example 4:</strong> Convert 2 1/4 to an improper fraction.</p>

            <p>
            (2 × 4 + 1)/4 = <strong>9/4</strong>
            </p>
        `,

        practice: `
            <ol>
                <li>Calculate 1/4 + 1/2.</li>
                <li>Calculate 5/6 − 1/3.</li>
                <li>Calculate 2/3 × 3/5.</li>
                <li>Convert 0.25 to a fraction.</li>
                <li>Convert 2 2/5 to an improper fraction.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>3/4</li>
                <li>1/2</li>
                <li>2/5</li>
                <li>1/4</li>
                <li>12/5</li>
            </ol>
        `
    },


    // =========================================================
    // TOPIC 3: APPROXIMATION AND ESTIMATION
    // =========================================================

    3: {
        title: "Approximation and Estimation",

        lesson: `
            <p><strong>Approximation</strong> means giving a number that is close to its exact value.</p>

            <p>Numbers can be approximated to a specified number of:</p>

            <ul>
                <li>Decimal places</li>
                <li>Significant figures</li>
                <li>Nearest whole number</li>
                <li>Nearest ten, hundred, thousand, etc.</li>
            </ul>

            <p>When rounding, look at the digit immediately after the required place.</p>

            <p>If the next digit is <strong>5 or greater</strong>, increase the required digit by 1.</p>

            <p>If the next digit is <strong>less than 5</strong>, leave the required digit unchanged.</p>

            <p><strong>Significant figures</strong> begin with the first non-zero digit.</p>

            <p>Estimation is used to obtain an approximate answer quickly. Numbers are usually rounded to convenient values
            before performing the calculation.</p>
        `,

        examples: `
            <p><strong>Example 1:</strong> Round 37.684 to 2 decimal places.</p>

            <p>The second decimal place is 8. The next digit is 4, so the 8 remains unchanged.</p>

            <p><strong>Answer: 37.68</strong></p>

            <p><strong>Example 2:</strong> Round 0.006784 to 2 significant figures.</p>

            <p>The first two significant figures are 6 and 7. The next digit is 8, so 7 becomes 8.</p>

            <p><strong>Answer: 0.0068</strong></p>

            <p><strong>Example 3:</strong> Estimate 49.8 × 20.2.</p>

            <p>Round 49.8 to 50 and 20.2 to 20.</p>

            <p>
            50 × 20 = <strong>1000</strong>
            </p>

            <p>Therefore, the estimated answer is approximately 1000.</p>
        `,

        practice: `
            <ol>
                <li>Round 56.783 to 2 decimal places.</li>
                <li>Round 0.004567 to 2 significant figures.</li>
                <li>Round 7846 to the nearest hundred.</li>
                <li>Estimate 39.7 × 21.1.</li>
                <li>Estimate 602 ÷ 19.8.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>56.78</li>
                <li>0.0046</li>
                <li>7800</li>
                <li>Approximately 800</li>
                <li>Approximately 30</li>
            </ol>
        `
    },


    // =========================================================
    // TOPIC 4: STANDARD FORM
    // =========================================================

    4: {
        title: "Standard Form",

        lesson: `
            <p><strong>Standard form</strong> is used to write very large or very small numbers conveniently.</p>

            <p>A number in standard form is written as:</p>

            <p><strong>a × 10<sup>n</sup></strong></p>

            <p>where:</p>

            <ul>
                <li>a is greater than or equal to 1 but less than 10.</li>
                <li>n is an integer.</li>
            </ul>

            <p>For large numbers, the power of 10 is positive.</p>

            <p>For small numbers, the power of 10 is negative.</p>

            <p>When multiplying numbers in standard form, multiply the numbers in front and add the powers.</p>

            <p>When dividing, divide the numbers in front and subtract the powers.</p>
        `,

        examples: `
            <p><strong>Example 1:</strong> Express 4,500,000 in standard form.</p>

            <p>
            4,500,000 = <strong>4.5 × 10<sup>6</sup></strong>
            </p>

            <p><strong>Example 2:</strong> Express 0.00032 in standard form.</p>

            <p>
            0.00032 = <strong>3.2 × 10<sup>−4</sup></strong>
            </p>

            <p><strong>Example 3:</strong> Calculate:</p>

            <p>
            (3 × 10<sup>4</sup>)(2 × 10<sup>3</sup>)
            </p>

            <p>
            = 6 × 10<sup>7</sup>
            </p>

            <p><strong>Example 4:</strong> Calculate:</p>

            <p>
            (8 × 10<sup>6</sup>) ÷ (2 × 10<sup>2</sup>)
            </p>

            <p>
            = 4 × 10<sup>4</sup>
            </p>
        `,

        practice: `
            <ol>
                <li>Write 7,200,000 in standard form.</li>
                <li>Write 0.00045 in standard form.</li>
                <li>Calculate (2 × 10<sup>3</sup>)(4 × 10<sup>5</sup>).</li>
                <li>Calculate (9 × 10<sup>7</sup>) ÷ (3 × 10<sup>2</sup>).</li>
                <li>Write 6.3 × 10<sup>4</sup> as an ordinary number.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>7.2 × 10<sup>6</sup></li>
                <li>4.5 × 10<sup>−4</sup></li>
                <li>8 × 10<sup>8</sup></li>
                <li>3 × 10<sup>5</sup></li>
                <li>63,000</li>
            </ol>
        `
    },


    // =========================================================
    // TOPIC 5: LOGARITHMS
    // =========================================================

    5: {
        title: "Logarithms",

        lesson: `
            <p>A <strong>logarithm</strong> is another way of expressing an index or power.</p>

            <p>If:</p>

            <p>
            a<sup>x</sup> = N
            </p>

            <p>then:</p>

            <p>
            log<sub>a</sub>N = x
            </p>

            <p>For example:</p>

            <p>
            2<sup>5</sup> = 32
            </p>

            <p>therefore:</p>

            <p>
            log<sub>2</sub>32 = 5
            </p>

            <p>Important laws of logarithms include:</p>

            <p>
            log<sub>a</sub>(MN)
            =
            log<sub>a</sub>M + log<sub>a</sub>N
            </p>

            <p>
            log<sub>a</sub>(M/N)
            =
            log<sub>a</sub>M − log<sub>a</sub>N
            </p>

            <p>
            log<sub>a</sub>(M<sup>n</sup>)
            =
            n log<sub>a</sub>M
            </p>

            <p>The common logarithm has base 10 and is often written simply as log.</p>
        `,

        examples: `
            <p><strong>Example 1:</strong> Find log<sub>2</sub>32.</p>

            <p>
            Since 2<sup>5</sup> = 32,
            </p>

            <p>
            <strong>log<sub>2</sub>32 = 5</strong>
            </p>

            <p><strong>Example 2:</strong> Simplify:</p>

            <p>
            log<sub>3</sub>9 + log<sub>3</sub>27
            </p>

            <p>
            log<sub>3</sub>9 = 2
            </p>

            <p>
            log<sub>3</sub>27 = 3
            </p>

            <p>
            Therefore, the answer is <strong>5</strong>.
            </p>

            <p><strong>Example 3:</strong> Solve:</p>

            <p>
            log<sub>2</sub>x = 4
            </p>

            <p>
            This means:
            </p>

            <p>
            2<sup>4</sup> = x
            </p>

            <p>
            Therefore <strong>x = 16</strong>.
            </p>

            <p><strong>Example 4:</strong> Simplify:</p>

            <p>
            log<sub>10</sub>1000
            </p>

            <p>
            Since 10<sup>3</sup> = 1000,
            </p>

            <p>
            <strong>log<sub>10</sub>1000 = 3</strong>
            </p>
        `,

        practice: `
            <ol>
                <li>Find log<sub>2</sub>16.</li>
                <li>Find log<sub>5</sub>125.</li>
                <li>Find log<sub>10</sub>100.</li>
                <li>Solve log<sub>3</sub>x = 4.</li>
                <li>Simplify log<sub>2</sub>8 + log<sub>2</sub>4.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>4</li>
                <li>3</li>
                <li>2</li>
                <li>x = 81</li>
                <li>5</li>
            </ol>
        `
    }

};


// =========================================================
// DISPLAY SELECTED TOPIC
// =========================================================

function showTopic() {

    const topic = document.getElementById("topicSelect").value;
    const lesson = document.getElementById("lesson");

    if (topic === "") {

        lesson.innerHTML = `
            <p>Select a topic above to begin learning.</p>
        `;

        return;
    }

    const selectedTopic = topics[topic];

    if (!selectedTopic) {

        lesson.innerHTML = `
            <p>This topic content is not available yet.</p>
        `;

        return;
    }

    lesson.innerHTML = `

        <h2>Topic ${topic}: ${selectedTopic.title}</h2>

        <h3>Lesson</h3>
        ${selectedTopic.lesson}

        <h3>Worked Examples</h3>
        ${selectedTopic.examples}

        <h3>Practice Questions</h3>
        ${selectedTopic.practice}

        <h3>Answers</h3>
        ${selectedTopic.answers}
    // =========================================================
    // TOPIC 6: INDICES
    // =========================================================

    6: {
        title: "Indices",

        lesson: `
            <p><strong>Indices</strong>, also called powers or exponents, are used to show repeated multiplication.</p>

            <p>For example:</p>

            <p>
            2 × 2 × 2 × 2 = 2<sup>4</sup>
            </p>

            <p>Here, 2 is the base and 4 is the index.</p>

            <p><strong>Laws of indices:</strong></p>

            <p>
            a<sup>m</sup> × a<sup>n</sup> = a<sup>m+n</sup>
            </p>

            <p>
            a<sup>m</sup> ÷ a<sup>n</sup> = a<sup>m−n</sup>
            </p>

            <p>
            (a<sup>m</sup>)<sup>n</sup> = a<sup>mn</sup>
            </p>

            <p>
            a<sup>0</sup> = 1
            </p>

            <p>
            a<sup>−n</sup> = 1/a<sup>n</sup>
            </p>

            <p>
            a<sup>1/n</sup> = ⁿ√a
            </p>

            <p>Indices are also used in solving <strong>indicial equations</strong>, where the unknown appears as an exponent.</p>
        `,

        examples: `
            <p><strong>Example 1:</strong> Simplify 2<sup>3</sup> × 2<sup>4</sup>.</p>

            <p>
            2<sup>3+4</sup> = 2<sup>7</sup> = <strong>128</strong>
            </p>

            <p><strong>Example 2:</strong> Simplify x<sup>8</sup> ÷ x<sup>3</sup>.</p>

            <p>
            x<sup>8−3</sup> = <strong>x<sup>5</sup></strong>
            </p>

            <p><strong>Example 3:</strong> Solve 2<sup>x</sup> = 32.</p>

            <p>
            32 = 2<sup>5</sup>
            </p>

            <p>Therefore:</p>

            <p>
            2<sup>x</sup> = 2<sup>5</sup>
            </p>

            <p>
            <strong>x = 5</strong>
            </p>

            <p><strong>Example 4:</strong> Solve 3<sup>2x</sup> = 81.</p>

            <p>
            81 = 3<sup>4</sup>
            </p>

            <p>
            3<sup>2x</sup> = 3<sup>4</sup>
            </p>

            <p>
            2x = 4
            </p>

            <p>
            <strong>x = 2</strong>
            </p>
        `,

        practice: `
            <ol>
                <li>Simplify 3<sup>2</sup> × 3<sup>5</sup>.</li>
                <li>Simplify a<sup>9</sup> ÷ a<sup>4</sup>.</li>
                <li>Evaluate 5<sup>0</sup>.</li>
                <li>Solve 2<sup>x</sup> = 64.</li>
                <li>Solve 5<sup>2x</sup> = 625.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>3<sup>7</sup> = 2187</li>
                <li>a<sup>5</sup></li>
                <li>1</li>
                <li>x = 6</li>
                <li>x = 2</li>
            </ol>
        `
    },


    // =========================================================
    // TOPIC 7: SURDS
    // =========================================================

    7: {
        title: "Surds",

        lesson: `
            <p>A <strong>surd</strong> is an irrational root that cannot be expressed exactly as a rational number.</p>

            <p>Examples include √2, √3 and √5.</p>

            <p>Some square roots are not surds because they produce whole numbers. For example:</p>

            <p>
            √25 = 5
            </p>

            <p>To simplify a surd, look for a perfect-square factor.</p>

            <p>Surds can be added or subtracted when they are like surds.</p>

            <p>When multiplying surds:</p>

            <p>
            √a × √b = √ab
            </p>

            <p>Rationalisation removes a surd from the denominator of a fraction.</p>
        `,

        examples: `
            <p><strong>Example 1:</strong> Simplify √50.</p>

            <p>
            √50 = √(25 × 2)
            </p>

            <p>
            = 5√2
            </p>

            <p><strong>Answer: 5√2</strong></p>

            <p><strong>Example 2:</strong> Simplify 3√2 + 5√2.</p>

            <p>
            = 8√2
            </p>

            <p><strong>Example 3:</strong> Simplify √3 × √12.</p>

            <p>
            √3 × √12 = √36 = <strong>6</strong>
            </p>

            <p><strong>Example 4:</strong> Simplify √18.</p>

            <p>
            √18 = √(9 × 2)
            </p>

            <p>
            = <strong>3√2</strong>
            </p>
        `,

        practice: `
            <ol>
                <li>Simplify √20.</li>
                <li>Simplify √45.</li>
                <li>Simplify 4√3 + 2√3.</li>
                <li>Evaluate √5 × √20.</li>
                <li>Simplify √72.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>2√5</li>
                <li>3√5</li>
                <li>6√3</li>
                <li>10</li>
                <li>6√2</li>
            </ol>
        `
    },


    // =========================================================
    // TOPIC 8: SETS
    // =========================================================

    8: {
        title: "Sets",

        lesson: `
            <p>A <strong>set</strong> is a well-defined collection of objects.</p>

            <p>The objects in a set are called <strong>elements</strong> or members.</p>

            <p>Sets are usually represented using capital letters such as A, B and C.</p>

            <p>For example:</p>

            <p>
            A = {1, 2, 3, 4}
            </p>

            <p>Important terms include:</p>

            <ul>
                <li>Universal set</li>
                <li>Empty set</li>
                <li>Subset</li>
                <li>Union</li>
                <li>Intersection</li>
                <li>Complement</li>
            </ul>

            <p>The union of A and B contains all elements in A or B.</p>

            <p>The intersection contains elements common to both sets.</p>
        `,

        examples: `
            <p>Let:</p>

            <p>
            A = {1, 2, 3, 4}
            </p>

            <p>
            B = {3, 4, 5, 6}
            </p>

            <p><strong>Example 1:</strong> Find A ∪ B.</p>

            <p>
            A ∪ B = <strong>{1, 2, 3, 4, 5, 6}</strong>
            </p>

            <p><strong>Example 2:</strong> Find A ∩ B.</p>

            <p>
            A ∩ B = <strong>{3, 4}</strong>
            </p>

            <p><strong>Example 3:</strong> Is {1, 2} a subset of A?</p>

            <p>Yes, because both 1 and 2 belong to A.</p>
        `,

        practice: `
            <ol>
                <li>If A = {1,2,3} and B = {3,4,5}, find A ∪ B.</li>
                <li>Find A ∩ B.</li>
                <li>State the number of elements in {a,b,c,d,e}.</li>
                <li>Is {1,3} a subset of {1,2,3,4}?</li>
                <li>What is the empty set?</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>{1,2,3,4,5}</li>
                <li>{3}</li>
                <li>5</li>
                <li>Yes</li>
                <li>A set containing no element.</li>
            </ol>
        `
    },


    // =========================================================
    // TOPIC 9: ALGEBRAIC EXPRESSIONS
    // =========================================================

    9: {
        title: "Algebraic Expressions",

        lesson: `
            <p>An <strong>algebraic expression</strong> contains numbers, variables and mathematical operations.</p>

            <p>Examples include:</p>

            <p>
            3x + 5
            </p>

            <p>
            2a + 4b − 7
            </p>

            <p>A <strong>term</strong> is a part of an expression separated by a plus or minus sign.</p>

            <p>Like terms have the same variables raised to the same powers.</p>

            <p>Only like terms can be collected together.</p>

            <p>Algebraic expressions can also be expanded by removing brackets.</p>
        `,

        examples: `
            <p><strong>Example 1:</strong> Simplify 3x + 5x − 2.</p>

            <p>
            3x + 5x = 8x
            </p>

            <p>
            Answer: <strong>8x − 2</strong>
            </p>

            <p><strong>Example 2:</strong> Expand 4(x + 3).</p>

            <p>
            4 × x + 4 × 3
            </p>

            <p>
            = <strong>4x + 12</strong>
            </p>

            <p><strong>Example 3:</strong> Simplify 2a + 3b − a + 5b.</p>

            <p>
            = a + 8b
            </p>
        `,

        practice: `
            <ol>
                <li>Simplify 7x + 3x.</li>
                <li>Simplify 9a − 4a + 2.</li>
                <li>Expand 3(x + 5).</li>
                <li>Expand 2(3x − 4).</li>
                <li>Simplify 4a + 3b − 2a + b.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>10x</li>
                <li>5a + 2</li>
                <li>3x + 15</li>
                <li>6x − 8</li>
                <li>2a + 4b</li>
            </ol>
        `
    },


    // =========================================================
    // TOPIC 10: FACTORIZATION
    // =========================================================

    10: {
        title: "Factorization",

        lesson: `
            <p><strong>Factorization</strong> is the process of writing an algebraic expression as a product of factors.</p>

            <p>Common methods include:</p>

            <ul>
                <li>Taking out a common factor</li>
                <li>Factorizing quadratic expressions</li>
                <li>Difference of two squares</li>
            </ul>

            <p>For a quadratic expression:</p>

            <p>
            x<sup>2</sup> + bx + c
            </p>

            <p>look for two numbers whose product is c and whose sum is b.</p>

            <p>The difference of two squares is:</p>

            <p>
            a<sup>2</sup> − b<sup>2</sup> = (a − b)(a + b)
            </p>
        `,

        examples: `
            <p><strong>Example 1:</strong> Factorize 6x + 12.</p>

            <p>
            6x + 12 = <strong>6(x + 2)</strong>
            </p>

            <p><strong>Example 2:</strong> Factorize x<sup>2</sup> + 5x + 6.</p>

            <p>Two numbers whose product is 6 and sum is 5 are 2 and 3.</p>

            <p>
            Therefore:
            </p>

            <p>
            <strong>(x + 2)(x + 3)</strong>
            </p>

            <p><strong>Example 3:</strong> Factorize x<sup>2</sup> − 9.</p>

            <p>
            x<sup>2</sup> − 3<sup>2</sup>
            </p>

            <p>
            = <strong>(x − 3)(x + 3)</strong>
            </p>
        `,

        practice: `
            <ol>
                <li>Factorize 5x + 15.</li>
                <li>Factorize x<sup>2</sup> + 7x + 12.</li>
                <li>Factorize x<sup>2</sup> − 16.</li>
                <li>Factorize 3x<sup>2</sup> + 6x.</li>
                <li>Factorize x<sup>2</sup> − 5x + 6.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>5(x + 3)</li>
                <li>(x + 3)(x + 4)</li>
                <li>(x − 4)(x + 4)</li>
                <li>3x(x + 2)</li>
                <li>(x − 2)(x − 3)</li>
            </ol>
        `
    },


    // =========================================================
    // TOPIC 11: LINEAR EQUATIONS
    // =========================================================

    11: {
        title: "Linear Equations",

        lesson: `
            <p>A <strong>linear equation</strong> is an equation in which the highest power of the variable is 1.</p>

            <p>Examples include:</p>

            <p>
            2x + 3 = 9
            </p>

            <p>
            5y − 4 = 16
            </p>

            <p>The aim of solving an equation is to find the value of the unknown.</p>

            <p>Whatever operation is performed on one side of an equation must also be performed on the other side.</p>
        `,

        examples: `
            <p><strong>Example 1:</strong> Solve 3x + 5 = 20.</p>

            <p>
            3x = 15
            </p>

            <p>
            x = <strong>5</strong>
            </p>

            <p><strong>Example 2:</strong> Solve 5x − 7 = 18.</p>

            <p>
            5x = 25
            </p>

            <p>
            x = <strong>5</strong>
            </p>

            <p><strong>Example 3:</strong> Solve 2(x + 3) = 14.</p>

            <p>
            x + 3 = 7
            </p>

            <p>
            x = <strong>4</strong>
            </p>
        `,

        practice: `
            <ol>
                <li>Solve x + 7 = 15.</li>
                <li>Solve 4x = 28.</li>
                <li>Solve 3x − 5 = 16.</li>
                <li>Solve 2(x + 4) = 18.</li>
                <li>Solve 5x + 3 = 28.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>x = 8</li>
                <li>x = 7</li>
                <li>x = 7</li>
                <li>x = 5</li>
                <li>x = 5</li>
            </ol>
        `
    },


    // =========================================================
    // TOPIC 12: CHANGE OF SUBJECT OF FORMULA
    // =========================================================

    12: {
        title: "Change of Subject of Formula",

        lesson: `
            <p>A formula is an equation that expresses a relationship between quantities.</p>

            <p><strong>Changing the subject</strong> means rearranging the formula so that a different variable stands alone on one side.</p>

            <p>Use inverse operations carefully:</p>

            <ul>
                <li>Addition is reversed by subtraction.</li>
                <li>Multiplication is reversed by division.</li>
                <li>Squaring is reversed by taking a square root.</li>
            </ul>
        `,

        examples: `
            <p><strong>Example 1:</strong> Make x the subject of y = x + 5.</p>

            <p>
            Subtract 5 from both sides:
            </p>

            <p>
            <strong>x = y − 5</strong>
            </p>

            <p><strong>Example 2:</strong> Make r the subject of A = πr<sup>2</sup>.</p>

            <p>
            Divide by π:
            </p>

            <p>
            r<sup>2</sup> = A/π
            </p>

            <p>
            Therefore:
            </p>

            <p>
            <strong>r = √(A/π)</strong>
            </p>

            <p><strong>Example 3:</strong> Make a the subject of v = u + at.</p>

            <p>
            v − u = at
            </p>

            <p>
            <strong>a = (v − u)/t</strong>
            </p>
        `,

        practice: `
            <ol>
                <li>Make x the subject of y = x + 8.</li>
                <li>Make a the subject of v = u + at.</li>
                <li>Make r the subject of C = 2πr.</li>
                <li>Make x the subject of y = 3x.</li>
                <li>Make h the subject of A = 1/2bh.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>x = y − 8</li>
                <li>a = (v − u)/t</li>
                <li>r = C/(2π)</li>
                <li>x = y/3</li>
                <li>h = 2A/b</li>
            </ol>
        `
    },


    // =========================================================
    // TOPIC 13: SIMULTANEOUS EQUATIONS
    // =========================================================

    13: {
        title: "Simultaneous Equations",

        lesson: `
            <p><strong>Simultaneous equations</strong> are two or more equations that are solved together to find unknown variables.</p>

            <p>Common methods include:</p>

            <ul>
                <li>Substitution method</li>
                <li>Elimination method</li>
                <li>Graphical method</li>
            </ul>

            <p>The solution must satisfy all the equations at the same time.</p>
        `,

        examples: `
            <p><strong>Example 1:</strong></p>

            <p>
            x + y = 10
            </p>

            <p>
            x − y = 2
            </p>

            <p>Add the equations:</p>

            <p>
            2x = 12
            </p>

            <p>
            x = 6
            </p>

            <p>Substitute into x + y = 10:</p>

            <p>
            y = 4
            </p>

            <p><strong>Answer: x = 6, y = 4</strong></p>

            <p><strong>Example 2:</strong></p>

            <p>
            2x + y = 7
            </p>

            <p>
            x − y = 2
            </p>

            <p>Adding gives:</p>

            <p>
            3x = 9
            </p>

            <p>
            x = 3
            </p>

            <p>Therefore y = <strong>1</strong>.</p>
        `,

        practice: `
            <ol>
                <li>Solve x + y = 12 and x − y = 4.</li>
                <li>Solve x + y = 9 and 2x + y = 14.</li>
                <li>Solve 2x + y = 11 and x − y = 1.</li>
                <li>Solve x + 2y = 10 and x − y = 1.</li>
                <li>Solve 3x + y = 13 and x + y = 7.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>x = 8, y = 4</li>
                <li>x = 5, y = 4</li>
                <li>x = 4, y = 3</li>
                <li>x = 4, y = 3</li>
                <li>x = 3, y = 4</li>
            </ol>
        `
    },


    // =========================================================
    // TOPIC 14: QUADRATIC EQUATIONS
    // =========================================================

    14: {
        title: "Quadratic Equations",

        lesson: `
            <p>A <strong>quadratic equation</strong> is an equation of the form:</p>

            <p>
            ax<sup>2</sup> + bx + c = 0
            </p>

            <p>where a is not zero.</p>

            <p>Quadratic equations can be solved by:</p>

            <ul>
                <li>Factorization</li>
                <li>Completing the square</li>
                <li>Quadratic formula</li>
            </ul>

            <p>The quadratic formula is:</p>

            <p>
            x = [-b ± √(b<sup>2</sup> − 4ac)] / 2a
            </p>

            <p>The expression b<sup>2</sup> − 4ac is called the <strong>discriminant</strong>.</p>
        `,

        examples: `
            <p><strong>Example 1:</strong> Solve x<sup>2</sup> − 5x + 6 = 0.</p>

            <p>
            (x − 2)(x − 3) = 0
            </p>

            <p>
            Therefore x = <strong>2 or 3</strong>.
            </p>

            <p><strong>Example 2:</strong> Solve x<sup>2</sup> − 9 = 0.</p>

            <p>
            (x − 3)(x + 3) = 0
            </p>

            <p>
            x = <strong>3 or −3</strong>
            </p>

            <p><strong>Example 3:</strong> Solve x<sup>2</sup> + 2x − 8 = 0.</p>

            <p>
            (x + 4)(x − 2) = 0
            </p>

            <p>
            x = <strong>−4 or 2</strong>
            </p>
        `,

        practice: `
            <ol>
                <li>Solve x<sup>2</sup> − 7x + 12 = 0.</li>
                <li>Solve x<sup>2</sup> − 4 = 0.</li>
                <li>Solve x<sup>2</sup> + 5x + 6 = 0.</li>
                <li>Solve x<sup>2</sup> − x − 6 = 0.</li>
                <li>Solve x<sup>2</sup> + x − 12 = 0.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>x = 3 or 4</li>
                <li>x = 2 or −2</li>
                <li>x = −2 or −3</li>
                <li>x = 3 or −2</li>
                <li>x = 3 or −4</li>
            </ol>
        `
    },


    // =========================================================
    // TOPIC 15: VARIATION
    // =========================================================

    15: {
        title: "Variation",

        lesson: `
            <p><strong>Variation</strong> describes how one quantity changes in relation to another.</p>

            <p>In <strong>direct variation</strong>:</p>

            <p>
            y ∝ x
            </p>

            <p>Therefore:</p>

            <p>
            y = kx
            </p>

            <p>where k is the constant of proportionality.</p>

            <p>In <strong>inverse variation</strong>:</p>

            <p>
            y ∝ 1/x
            </p>

            <p>Therefore:</p>

            <p>
            y = k/x
            </p>

            <p>There is also joint variation, where a quantity varies directly as the product of two or more variables.</p>
        `,

        examples: `
            <p><strong>Example 1:</strong> y varies directly as x. If y = 12 when x = 4, find y when x = 7.</p>

            <p>
            y = kx
            </p>

            <p>
            12 = 4k
            </p>

            <p>
            k = 3
            </p>

            <p>Therefore:</p>

            <p>
            y = 3(7) = <strong>21</strong>
            </p>

            <p><strong>Example 2:</strong> y varies inversely as x. If y = 8 when x = 3, find y when x = 12.</p>

            <p>
            y = k/x
            </p>

            <p>
            8 = k/3
            </p>

            <p>
            k = 24
            </p>

            <p>
            y = 24/12 = <strong>2</strong>
            </p>
        `,

        practice: `
            <ol>
                <li>y varies directly as x. If y = 10 when x = 2, find y when x = 7.</li>
                <li>y varies directly as x. If y = 18 when x = 6, find the constant.</li>
                <li>y varies inversely as x. If y = 12 when x = 4, find y when x = 8.</li>
                <li>y varies inversely as x. If y = 5 when x = 6, find the constant.</li>
                <li>y varies directly as x². If y = 20 when x = 2, find y when x = 4.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>y = 35</li>
                <li>k = 3</li>
                <li>y = 6</li>
                <li>k = 30</li>
                <li>y = 80</li>
            </ol>
        `
    },


    // =========================================================
    // TOPIC 16: SEQUENCE AND SERIES
    // =========================================================

    16: {
        title: "Sequence and Series",

        lesson: `
            <p>A <strong>sequence</strong> is an ordered list of numbers that follows a particular pattern.</p>

            <p>A <strong>series</strong> is obtained when the terms of a sequence are added together.</p>

            <p>An arithmetic sequence has a common difference.</p>

            <p>The nth term of an arithmetic sequence is:</p>

            <p>
            T<sub>n</sub> = a + (n − 1)d
            </p>

            <p>where a is the first term and d is the common difference.</p>

            <p>The sum of the first n terms is:</p>

            <p>
            S<sub>n</sub> = n/2 [2a + (n − 1)d]
            </p>
        `,

        examples: `
            <p><strong>Example 1:</strong> Find the nth term of 3, 7, 11, 15, ...</p>

            <p>
            a = 3, d = 4
            </p>

            <p>
            T<sub>n</sub> = 3 + (n − 1)4
            </p>

            <p>
            = <strong>4n − 1</strong>
            </p>

            <p><strong>Example 2:</strong> Find the 10th term.</p>

            <p>
            T<sub>10</sub> = 3 + 9(4) = <strong>39</strong>
            </p>

            <p><strong>Example 3:</strong> Find the sum of the first 10 terms.</p>

            <p>
            S<sub>10</sub> = 10/2 [2(3) + 9(4)]
            </p>

            <p>
            = 5(42) = <strong>210</strong>
            </p>
        `,

        practice: `
            <ol>
                <li>Find the common difference of 5, 9, 13, 17, ...</li>
                <li>Find the nth term of 2, 5, 8, 11, ...</li>
                <li>Find the 20th term of 4, 7, 10, ...</li>
                <li>Find the sum of the first 10 terms of 2, 5, 8, ...</li>
                <li>Find the 15th term of 10, 14, 18, ...</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>4</li>
                <li>3n − 1</li>
                <li>61</li>
                <li>155</li>
                <li>66</li>
            </ol>
        `
    },


    // =========================================================
    // TOPIC 17: BINARY OPERATIONS
    // =========================================================

    17: {
        title: "Binary Operations",

        lesson: `
            <p>A <strong>binary operation</strong> combines two elements of a set to produce another element.</p>

            <p>A binary operation may be represented by symbols such as:</p>

            <p>
            a * b
            </p>

            <p>The operation is defined by a rule.</p>

            <p>Important properties include:</p>

            <ul>
                <li>Closure</li>
                <li>Commutativity</li>
                <li>Associativity</li>
                <li>Identity element</li>
                <li>Inverse</li>
            </ul>
        `,

        examples: `
            <p><strong>Example 1:</strong> If a * b = a + b + 2, find 3 * 4.</p>

            <p>
            3 * 4 = 3 + 4 + 2 = <strong>9</strong>
            </p>

            <p><strong>Example 2:</strong> If a * b = ab − 1, find 2 * 5.</p>

            <p>
            2(5) − 1 = <strong>9</strong>
            </p>

            <p><strong>Example 3:</strong> If a * b = a + b, determine 4 * 7.</p>

            <p>
            4 + 7 = <strong>11</strong>
            </p>
        `,

        practice: `
            <ol>
                <li>If a*b = a+b+1, find 3*5.</li>
                <li>If a*b = ab, find 4*6.</li>
                <li>If a*b = a−b, find 8*3.</li>
                <li>If a*b = a+b−2, find 7*5.</li>
                <li>If a*b = 2a+b, find 3*4.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>9</li>
                <li>24</li>
                <li>5</li>
                <li>10</li>
                <li>10</li>
            </ol>
        `
    },


    // =========================================================
    // TOPIC 18: MODULAR ARITHMETIC
    // =========================================================

    18: {
        title: "Modular Arithmetic",

        lesson: `
            <p><strong>Modular arithmetic</strong> deals with remainders after division.</p>

            <p>The notation:</p>

            <p>
            a mod n
            </p>

            <p>means the remainder obtained when a is divided by n.</p>

            <p>Congruence is written:</p>

            <p>
            a ≡ b (mod n)
            </p>

            <p>This means that a and b have the same remainder when divided by n.</p>
        `,

        examples: `
            <p><strong>Example 1:</strong> Find 23 mod 5.</p>

            <p>
            23 = 5(4) + 3
            </p>

            <p>
            Therefore <strong>23 mod 5 = 3</strong>.
            </p>

            <p><strong>Example 2:</strong> Show that 18 ≡ 3 (mod 5).</p>

            <p>
            18 mod 5 = 3
            </p>

            <p>Therefore:</p>

            <p>
            <strong>18 ≡ 3 (mod 5)</strong>
            </p>

            <p><strong>Example 3:</strong> Find 7² mod 5.</p>

            <p>
            7² = 49
            </p>

            <p>
            49 mod 5 = <strong>4</strong>
            </p>
        `,

        practice: `
            <ol>
                <li>Find 17 mod 4.</li>
                <li>Find 25 mod 6.</li>
                <li>Find 31 mod 7.</li>
                <li>Find 12 + 17 mod 5.</li>
                <li>Find 8² mod 7.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>1</li>
                <li>1</li>
                <li>3</li>
                <li>4</li>
                <li>1</li>
            </ol>
        `
    },


    // =========================================================
    // TOPIC 19: PLANE GEOMETRY
    // =========================================================

    19: {
        title: "Plane Geometry",

        lesson: `
            <p><strong>Plane geometry</strong> deals with shapes and figures on a flat surface.</p>

            <p>Important plane figures include:</p>

            <ul>
                <li>Triangles</li>
                <li>Quadrilaterals</li>
                <li>Polygons</li>
                <li>Circles</li>
            </ul>

            <p>The angles in a triangle add up to 180°.</p>

            <p>The interior angles of a quadrilateral add up to 360°.</p>

            <p>The sum of the interior angles of an n-sided polygon is:</p>

            <p>
            (n − 2) × 180°
            </p>
        `,

        examples: `
            <p><strong>Example 1:</strong> Find the third angle of a triangle with angles 60° and 70°.</p>

            <p>
            Third angle = 180° − 60° − 70°
            </p>

            <p>
            = <strong>50°</strong>
            </p>

            <p><strong>Example 2:</strong> Find the sum of the interior angles of a pentagon.</p>

            <p>
            (5 − 2) × 180° = <strong>540°</strong>
            </p>

            <p><strong>Example 3:</strong> Find each interior angle of a regular hexagon.</p>

            <p>
            Sum = (6 − 2) × 180° = 720°
            </p>

            <p>
            Each angle = 720° ÷ 6 = <strong>120°</strong>
            </p>
        `,

        practice: `
            <ol>
                <li>Find the third angle of a triangle with angles 45° and 65°.</li>
                <li>Find the angle sum of a hexagon.</li>
                <li>Find the angle sum of an octagon.</li>
                <li>Find each interior angle of a regular pentagon.</li>
                <li>Find each interior angle of a regular octagon.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>70°</li>
                <li>720°</li>
                <li>1080°</li>
                <li>108°</li>
                <li>135°</li>
            </ol>
        `
    },


    // =========================================================
    // TOPIC 20: ANGLES AND LINES
    // =========================================================

    20: {
        title: "Angles and Lines",

        lesson: `
            <p>An <strong>angle</strong> is formed when two lines or rays meet.</p>

            <p>Important angle facts include:</p>

            <ul>
                <li>Angles on a straight line add to 180°.</li>
                <li>Angles around a point add to 360°.</li>
                <li>Vertically opposite angles are equal.</li>
                <li>Corresponding angles are equal when parallel lines are cut by a transversal.</li>
                <li>Alternate angles are equal when parallel lines are cut by a transversal.</li>
                <li>Co-interior angles add to 180°.</li>
            </ul>
        `,

        examples: `
            <p><strong>Example 1:</strong> Two angles on a straight line are 65° and x. Find x.</p>

            <p>
            x + 65° = 180°
            </p>

            <p>
            x = <strong>115°</strong>
            </p>

            <p><strong>Example 2:</strong> Angles around a point are 80°, 120° and x.</p>

            <p>
            x + 80° + 120° = 360°
            </p>

            <p>
            x = <strong>160°</strong>
            </p>

            <p><strong>Example 3:</strong> One angle formed by two intersecting lines is 70°. Find its vertically opposite angle.</p>

            <p>
            The vertically opposite angle is <strong>70°</strong>.
            </p>
        `,

        practice: `
            <ol>
                <li>Find the supplement of 75°.</li>
                <li>Find the angle around a point if the other angles are 90°, 110° and 80°.</li>
                <li>Two vertically opposite angles are formed. If one is 125°, find the other.</li>
                <li>Find the co-interior angle of 65°.</li>
                <li>Find the supplement of 42°.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>105°</li>
                <li>80°</li>
                <li>125°</li>
                <li>115°</li>
                <li>138°</li>
            </ol>
        `
    },


    // =========================================================
    // TOPIC 21: TRIANGLES
    // =========================================================

    21: {
        title: "Triangles",

        lesson: `
            <p>A <strong>triangle</strong> is a polygon with three sides and three angles.</p>

            <p>Triangles can be classified according to their sides:</p>

            <ul>
                <li>Equilateral</li>
                <li>Isosceles</li>
                <li>Scalene</li>
            </ul>

            <p>They can also be classified according to their angles:</p>

            <ul>
                <li>Acute-angled</li>
                <li>Right-angled</li>
                <li>Obtuse-angled</li>
            </ul>

            <p>The sum of the interior angles of a triangle is 180°.</p>

            <p>For a right-angled triangle, Pythagoras' theorem states:</p>

            <p>
            a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>
            </p>

            <p>where c is the hypotenuse.</p>
        `,

        examples: `
            <p><strong>Example 1:</strong> Find the third angle of a triangle with angles 40° and 80°.</p>

            <p>
            180° − 40° − 80° = <strong>60°</strong>
            </p>

            <p><strong>Example 2:</strong> Find the hypotenuse of a right triangle with sides 6 cm and 8 cm.</p>

            <p>
            c² = 6² + 8²
            </p>

            <p>
            c² = 36 + 64 = 100
            </p>

            <p>
            c = <strong>10 cm</strong>
            </p>

            <p><strong>Example 3:</strong> An isosceles triangle has equal angles of 50°. Find the third angle.</p>

            <p>
            180° − 50° − 50° = <strong>80°</strong>
            </p>
        `,

        practice: `
            <ol>
                <li>Find the third angle of a triangle with angles 35° and 75°.</li>
                <li>Find the hypotenuse of a right triangle with sides 5 cm and 12 cm.</li>
                <li>Find the missing angle of an isosceles triangle whose equal angles are 40°.</li>
                <li>Find the third side of a right triangle with hypotenuse 13 cm and one side 5 cm.</li>
                <li>State the angle of an equilateral triangle.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>70°</li>
                <li>13 cm</li>
                <li>100°</li>
                <li>12 cm</li>
                <li>60°</li>
            </ol>
        `
    },


    // =========================================================
    // TOPIC 22: QUADRILATERALS AND POLYGONS
    // =========================================================

    22: {
        title: "Quadrilaterals and Polygons",

        lesson: `
            <p>A <strong>quadrilateral</strong> is a polygon with four sides.</p>

            <p>Common quadrilaterals include:</p>

            <ul>
                <li>Square</li>
                <li>Rectangle</li>
                <li>Parallelogram</li>
                <li>Rhombus</li>
                <li>Trapezium</li>
                <li>Kite</li>
            </ul>

            <p>The interior angles of a quadrilateral add up to 360°.</p>

            <p>A polygon is a closed plane figure made from straight line segments.</p>

            <p>The sum of the interior angles of an n-sided polygon is:</p>

            <p>
            (n − 2) × 180°
            </p>
        `,

        examples: `
            <p><strong>Example 1:</strong> Find the fourth angle of a quadrilateral with angles 80°, 90° and 100°.</p>

            <p>
            Fourth angle = 360° − 80° − 90° − 100°
            </p>

            <p>
            = <strong>90°</strong>
            </p>

            <p><strong>Example 2:</strong> Find the sum of the interior angles of a hexagon.</p>

            <p>
            (6 − 2) × 180° = <strong>720°</strong>
            </p>

            <p><strong>Example 3:</strong> Find each interior angle of a regular pentagon.</p>

            <p>
            540° ÷ 5 = <strong>108°</strong>
            </p>
        `,

        practice: `
            <ol>
                <li>Find the fourth angle of a quadrilateral with angles 70°, 80° and 100°.</li>
                <li>Find the sum of the interior angles of a heptagon.</li>
                <li>Find each interior angle of a regular hexagon.</li>
                <li>How many sides does a pentagon have?</li>
                <li>Find each interior angle of a regular octagon.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>110°</li>
                <li>900°</li>
                <li>120°</li>
                <li>5</li>
                <li>135°</li>
            </ol>
        `
    },


    // =========================================================
    // TOPIC 23: CIRCLES
    // =========================================================

    23: {
        title: "Circles",

        lesson: `
            <p>A <strong>circle</strong> is a plane figure in which every point on the circumference is the same distance from the centre.</p>

            <p>Important parts of a circle include:</p>

            <ul>
                <li>Centre</li>
                <li>Radius</li>
                <li>Diameter</li>
                <li>Chord</li>
                <li>Arc</li>
                <li>Tangent</li>
                <li>Sector</li>
            </ul>

            <p>The diameter is twice the radius:</p>

            <p>
            d = 2r
            </p>

            <p>Circumference:</p>

            <p>
            C = 2πr
            </p>

            <p>Area:</p>

            <p>
            A = πr²
            </p>
        `,

        examples: `
            <p><strong>Example 1:</strong> Find the circumference of a circle with radius 7 cm. Use π = 22/7.</p>

            <p>
            C = 2πr
            </p>

            <p>
            = 2 × 22/7 × 7
            </p>

            <p>
            = <strong>44 cm</strong>
            </p>

            <p><strong>Example 2:</strong> Find the area of a circle with radius 7 cm.</p>

            <p>
            A = πr²
            </p>

            <p>
            = 22/7 × 49
            </p>

            <p>
            = <strong>154 cm²</strong>
            </p>

            <p><strong>Example 3:</strong> A circle has diameter 20 cm. Find its radius.</p>

            <p>
            r = 20 ÷ 2 = <strong>10 cm</strong>
            </p>
        `,

        practice: `
            <ol>
                <li>Find the diameter of a circle with radius 8 cm.</li>
                <li>Find the circumference of a circle with radius 14 cm using π = 22/7.</li>
                <li>Find the area of a circle with radius 7 cm using π = 22/7.</li>
                <li>Find the radius of a circle with diameter 30 cm.</li>
                <li>State the formula for the area of a circle.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>16 cm</li>
                <li>88 cm</li>
                <li>154 cm²</li>
                <li>15 cm</li>
                <li>A = πr²</li>
            </ol>
        `
    },


    // =========================================================
    // TOPIC 24: MENSURATION OF PLANE SHAPES
    // =========================================================

    24: {
        title: "Mensuration of Plane Shapes",

        lesson: `
            <p><strong>Mensuration</strong> is the measurement of lengths, perimeters and areas of geometric figures.</p>

            <p>Important formulas include:</p>

            <p><strong>Rectangle:</strong></p>
            <p>Area = length × width</p>

            <p><strong>Square:</strong></p>
            <p>Area = side²</p>

            <p><strong>Triangle:</strong></p>
            <p>Area = 1/2 × base × height</p>

            <p><strong>Parallelogram:</strong></p>
            <p>Area = base × height</p>

            <p><strong>Trapezium:</strong></p>
            <p>Area = 1/2(a + b)h</p>
        `,

        examples: `
            <p><strong>Example 1:</strong> Find the area of a rectangle 12 cm long and 5 cm wide.</p>

            <p>
            Area = 12 × 5 = <strong>60 cm²</strong>
            </p>

            <p><strong>Example 2:</strong> Find the area of a triangle with base 10 cm and height 6 cm.</p>

            <p>
            Area = 1/2 × 10 × 6 = <strong>30 cm²</strong>
            </p>

            <p><strong>Example 3:</strong> Find the area of a trapezium whose parallel sides are 8 cm and 12 cm,
            with height 5 cm.</p>

            <p>
            Area = 1/2(8 + 12)5
            </p>

            <p>
            = <strong>50 cm²</strong>
            </p>
        `,

        practice: `
            <ol>
                <li>Find the area of a rectangle 15 cm by 4 cm.</li>
                <li>Find the area of a square with side 9 cm.</li>
                <li>Find the area of a triangle with base 12 cm and height 5 cm.</li>
                <li>Find the area of a parallelogram with base 10 cm and height 7 cm.</li>
                <li>Find the area of a trapezium with parallel sides 6 cm and 10 cm and height 4 cm.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>60 cm²</li>
                <li>81 cm²</li>
                <li>30 cm²</li>
                <li>70 cm²</li>
                <li>32 cm²</li>
            </ol>
        `
    },


    // =========================================================
    // TOPIC 25: MENSURATION OF SOLIDS
    // =========================================================

    25: {
        title: "Mensuration of Solids",

        lesson: `
            <p>Mensuration of solids involves finding the surface area and volume of three-dimensional objects.</p>

            <p><strong>Cube:</strong></p>
            <p>Volume = a³</p>

            <p><strong>Cuboid:</strong></p>
            <p>Volume = lwh</p>

            <p><strong>Cylinder:</strong></p>
            <p>Volume = πr²h</p>

            <p>Volume is measured in cubic units such as cm³ and m³.</p>

            <p>Surface area is measured in square units.</p>
        `,

        examples: `
            <p><strong>Example 1:</strong> Find the volume of a cube of side 5 cm.</p>

            <p>
            V = 5³ = <strong>125 cm³</strong>
            </p>

            <p><strong>Example 2:</strong> Find the volume of a cuboid measuring 8 cm × 5 cm × 3 cm.</p>

            <p>
            V = 8 × 5 × 3
            </p>

            <p>
            = <strong>120 cm³</strong>
            </p>

            <p><strong>Example 3:</strong> Find the volume of a cylinder with radius 7 cm and height 10 cm,
            using π = 22/7.</p>

            <p>
            V = πr²h
            </p>

            <p>
            = 22/7 × 49 × 10
            </p>

            <p>
            = <strong>1540 cm³</strong>
            </p>
        `,

        practice: `
            <ol>
                <li>Find the volume of a cube with side 4 cm.</li>
                <li>Find the volume of a cuboid 10 cm × 4 cm × 2 cm.</li>
                <li>Find the volume of a cylinder with radius 7 cm and height 5 cm using π = 22/7.</li>
                <li>State the formula for the volume of a cuboid.</li>
                <li>State the formula for the volume of a cylinder.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>64 cm³</li>
                <li>80 cm³</li>
                <li>770 cm³</li>
                <li>V = lwh</li>
                <li>V = πr²h</li>
            </ol>
        `
    },


    // =========================================================
    // TOPIC 26: COORDINATE GEOMETRY
    // =========================================================

    26: {
        title: "Coordinate Geometry",

        lesson: `
            <p><strong>Coordinate geometry</strong> uses algebra and coordinates to study geometric figures.</p>

            <p>A point is written as:</p>

            <p>
            (x, y)
            </p>

            <p>The x-coordinate gives the horizontal position and the y-coordinate gives the vertical position.</p>

            <p>The coordinate plane has four quadrants.</p>

            <p>The midpoint of two points is:</p>

            <p>
            ((x₁ + x₂)/2, (y₁ + y₂)/2)
            </p>

            <p>The distance between two points is:</p>

            <p>
            √[(x₂ − x₁)² + (y₂ − y₁)²]
            </p>
        `,

        examples: `
            <p><strong>Example 1:</strong> Find the midpoint of (2,4) and (6,8).</p>

            <p>
            Midpoint = ((2+6)/2, (4+8)/2)
            </p>

            <p>
            = <strong>(4,6)</strong>
            </p>

            <p><strong>Example 2:</strong> Find the distance between (0,0) and (3,4).</p>

            <p>
            Distance = √(3² + 4²)
            </p>

            <p>
            = √25 = <strong>5 units</strong>
            </p>

            <p><strong>Example 3:</strong> State the quadrant containing (−3,4).</p>

            <p>
            x is negative and y is positive, so the point is in <strong>Quadrant II</strong>.
            </p>
        `,

        practice: `
            <ol>
                <li>Find the midpoint of (2,2) and (8,8).</li>
                <li>Find the distance between (0,0) and (6,8).</li>
                <li>Which quadrant contains (4,−5)?</li>
                <li>Which quadrant contains (−2,−3)?</li>
                <li>Find the midpoint of (−2,4) and (6,8).</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>(5,5)</li>
                <li>10 units</li>
                <li>Quadrant IV</li>
                <li>Quadrant III</li>
                <li>(2,6)</li>
            </ol>
        `
    },


    // =========================================================
    // TOPIC 27: STRAIGHT LINES AND GRAPHS
    // =========================================================

    27: {
        title: "Straight Lines and Graphs",

        lesson: `
            <p>A straight-line graph can be represented by:</p>

            <p>
            y = mx + c
            </p>

            <p>where:</p>

            <ul>
                <li>m is the gradient or slope.</li>
                <li>c is the y-intercept.</li>
            </ul>

            <p>The gradient is:</p>

            <p>
            m = (y₂ − y₁)/(x₂ − x₁)
            </p>

            <p>A positive gradient means the line rises from left to right.</p>

            <p>A negative gradient means the line falls from left to right.</p>
        `,

        examples: `
            <p><strong>Example 1:</strong> Find the gradient between (1,2) and (3,6).</p>

            <p>
            m = (6 − 2)/(3 − 1)
            </p>

            <p>
            = 4/2 = <strong>2</strong>
            </p>

            <p><strong>Example 2:</strong> State the gradient and y-intercept of y = 3x + 5.</p>

            <p>
            Gradient = <strong>3</strong>
            </p>

            <p>
            y-intercept = <strong>5</strong>
            </p>

            <p><strong>Example 3:</strong> Find y when x = 4 in y = 2x + 1.</p>

            <p>
            y = 2(4) + 1 = <strong>9</strong>
            </p>
        `,

        practice: `
            <ol>
                <li>Find the gradient between (2,3) and (4,7).</li>
                <li>State the gradient of y = 5x + 2.</li>
                <li>State the y-intercept of y = 4x − 7.</li>
                <li>Find y when x = 3 in y = 2x + 4.</li>
                <li>Find y when x = 5 in y = 3x − 2.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>2</li>
                <li>5</li>
                <li>−7</li>
                <li>10</li>
                <li>13</li>
            </ol>
        `
    },


    // =========================================================
    // TOPIC 28: TRIGONOMETRY
    // =========================================================

    28: {
        title: "Trigonometry",

        lesson: `
            <p><strong>Trigonometry</strong> deals with relationships between the sides and angles of triangles.</p>

            <p>For a right-angled triangle, remember:</p>

            <p>
            <strong>SOH:</strong> sin θ = opposite/hypotenuse
            </p>

            <p>
            <strong>CAH:</strong> cos θ = adjacent/hypotenuse
            </p>

            <p>
            <strong>TOA:</strong> tan θ = opposite/adjacent
            </p>

            <p>These ratios can be used to find unknown sides and angles.</p>
        `,

        examples: `
            <p><strong>Example 1:</strong> A right triangle has opposite side 3 cm and hypotenuse 5 cm.
            Find θ.</p>

            <p>
            sin θ = 3/5 = 0.6
            </p>

            <p>
            θ = sin<sup>−1</sup>(0.6)
            </p>

            <p>
            θ ≈ <strong>36.87°</strong>
            </p>

            <p><strong>Example 2:</strong> If cos θ = 0.5, find θ.</p>

            <p>
            θ = cos<sup>−1</sup>(0.5)
            </p>

            <p>
            <strong>θ = 60°</strong>
            </p>

            <p><strong>Example 3:</strong> If opposite = 4 cm and adjacent = 3 cm, find θ.</p>

            <p>
            tan θ = 4/3
            </p>

            <p>
            θ ≈ <strong>53.13°</strong>
            </p>
        `,

        practice: `
            <ol>
                <li>If sin θ = 1/2, find θ for an acute angle.</li>
                <li>If cos θ = 0.5, find θ.</li>
                <li>If tan θ = 1, find θ.</li>
                <li>A triangle has opposite = 6 and hypotenuse = 10. Find sin θ.</li>
                <li>A triangle has adjacent = 8 and hypotenuse = 10. Find cos θ.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>30°</li>
                <li>60°</li>
                <li>45°</li>
                <li>0.6</li>
                <li>0.8</li>
            </ol>
        `
    },


    // =========================================================
    // TOPIC 29: BEARINGS AND DISTANCES
    // =========================================================

    29: {
        title: "Bearings and Distances",

        lesson: `
            <p>A <strong>bearing</strong> is a direction measured clockwise from North.</p>

            <p>Bearings are written as three-figure angles.</p>

            <p>Examples:</p>

            <ul>
                <li>North = 000°</li>
                <li>East = 090°</li>
                <li>South = 180°</li>
                <li>West = 270°</li>
            </ul>

            <p>The bearing of A from B is measured from the north direction at B, clockwise to A.</p>

            <p>The back bearing differs from the forward bearing by 180°.</p>

            <p>Distances can be found using Pythagoras' theorem or trigonometric ratios.</p>
        `,

        examples: `
            <p><strong>Example 1:</strong> Find the back bearing of 070°.</p>

            <p>
            070° + 180° = <strong>250°</strong>
            </p>

            <p><strong>Example 2:</strong> Find the back bearing of 240°.</p>

            <p>
            240° − 180° = <strong>060°</strong>
            </p>

            <p><strong>Example 3:</strong> A person walks 3 km east and then 4 km north.
            Find the straight-line distance from the starting point.</p>

            <p>
            d² = 3² + 4²
            </p>

            <p>
            d = <strong>5 km</strong>
            </p>
        `,

        practice: `
            <ol>
                <li>Find the back bearing of 080°.</li>
                <li>Find the back bearing of 300°.</li>
                <li>What is the bearing of East?</li>
                <li>A person travels 5 km north and 12 km east. Find the direct distance.</li>
                <li>What is the bearing of South?</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>260°</li>
                <li>120°</li>
                <li>090°</li>
                <li>13 km</li>
                <li>180°</li>
            </ol>
        `
    },


    // =========================================================
    // TOPIC 30: STATISTICS
    // =========================================================

    30: {
        title: "Statistics",

        lesson: `
            <p><strong>Statistics</strong> is the branch of mathematics concerned with collecting, organising,
            presenting, analysing and interpreting data.</p>

            <p>Data may be:</p>

            <ul>
                <li>Qualitative</li>
                <li>Quantitative</li>
                <li>Discrete</li>
                <li>Continuous</li>
            </ul>

            <p>Data can be presented using:</p>

            <ul>
                <li>Tables</li>
                <li>Bar charts</li>
                <li>Pie charts</li>
                <li>Histograms</li>
                <li>Line graphs</li>
            </ul>

            <p>A frequency table shows how often each value occurs.</p>
        `,

        examples: `
            <p><strong>Example 1:</strong> The scores are 2, 3, 3, 4, 4, 4, 5.
            What is the frequency of 4?</p>

            <p>
            The number 4 occurs three times.
            </p>

            <p>
            <strong>Frequency = 3</strong>
            </p>

            <p><strong>Example 2:</strong> Classify the number of books owned by students.</p>

            <p>
            This is quantitative discrete data because books are counted in whole numbers.
            </p>

            <p><strong>Example 3:</strong> A survey records favourite colours.
            What type of data is this?</p>

            <p>
            It is <strong>qualitative data</strong>.
            </p>
        `,

        practice: `
            <ol>
                <li>What is statistics?</li>
                <li>State whether height is discrete or continuous data.</li>
                <li>State whether favourite food is qualitative or quantitative data.</li>
                <li>Find the frequency of 5 in 2,5,3,5,4,5,6.</li>
                <li>Name one method of presenting data.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>The collection, organisation, analysis and interpretation of data.</li>
                <li>Continuous</li>
                <li>Qualitative</li>
                <li>3</li>
                <li>Bar chart / pie chart / histogram / table</li>
            </ol>
        `
    },


    // =========================================================
    // TOPIC 31: MEASURES OF CENTRAL TENDENCY
    // =========================================================

    31: {
        title: "Measures of Central Tendency",

        lesson: `
            <p>Measures of central tendency describe the centre or typical value of a data set.</p>

            <p>The three main measures are:</p>

            <ul>
                <li>Mean</li>
                <li>Median</li>
                <li>Mode</li>
            </ul>

            <p>The <strong>mean</strong> is calculated by:</p>

            <p>
            Mean = Sum of values ÷ Number of values
            </p>

            <p>The <strong>median</strong> is the middle value after arranging the data in order.</p>

            <p>The <strong>mode</strong> is the value that occurs most frequently.</p>

            <p>For frequency distributions:</p>

            <p>
            Mean = Σfx / Σf
            </p>
        `,

        examples: `
            <p><strong>Example 1:</strong> Find the mean of 2, 4, 6, 8.</p>

            <p>
            Mean = (2 + 4 + 6 + 8) ÷ 4
            </p>

            <p>
            = 20 ÷ 4 = <strong>5</strong>
            </p>

            <p><strong>Example 2:</strong> Find the median of 3, 7, 2, 9, 5.</p>

            <p>Arrange:</p>

            <p>
            2, 3, 5, 7, 9
            </p>

            <p>
            Median = <strong>5</strong>
            </p>

            <p><strong>Example 3:</strong> Find the mode of 2, 4, 4, 5, 6, 4, 7.</p>

            <p>
            4 occurs most frequently.
            </p>

            <p>
            Mode = <strong>4</strong>
            </p>
        `,

        practice: `
            <ol>
                <li>Find the mean of 4, 6, 8, 10.</li>
                <li>Find the median of 2, 8, 5, 7, 3.</li>
                <li>Find the mode of 3, 4, 4, 5, 6, 4.</li>
                <li>Find the mean of 5, 5, 10, 10.</li>
                <li>Find the median of 2, 4, 6, 8, 10, 12.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>7</li>
                <li>5</li>
                <li>4</li>
                <li>7.5</li>
                <li>7</li>
            </ol>
        `
    },


    // =========================================================
    // TOPIC 32: PROBABILITY
    // =========================================================

    32: {
        title: "Probability",

        lesson: `
            <p><strong>Probability</strong> measures how likely an event is to occur.</p>

            <p>Probability lies between 0 and 1.</p>

            <ul>
                <li>0 means impossible.</li>
                <li>1 means certain.</li>
            </ul>

            <p>For equally likely outcomes:</p>

            <p>
            P(E) = Number of favourable outcomes ÷ Total number of outcomes
            </p>

            <p>The probability of an event not occurring is:</p>

            <p>
            P(not E) = 1 − P(E)
            </p>
        `,

        examples: `
            <p><strong>Example 1:</strong> Find the probability of getting a head when a fair coin is tossed.</p>

            <p>
            P(head) = 1/2
            </p>

            <p><strong>Example 2:</strong> Find the probability of getting a 4 when a fair die is thrown.</p>

            <p>
            There is one favourable outcome and six possible outcomes.
            </p>

            <p>
            P(4) = <strong>1/6</strong>
            </p>

            <p><strong>Example 3:</strong> If P(A) = 0.3, find P(not A).</p>

            <p>
            P(not A) = 1 − 0.3 = <strong>0.7</strong>
            </p>
        `,

        practice: `
            <ol>
                <li>Find the probability of getting a tail on a fair coin.</li>
                <li>Find the probability of rolling a 6 on a fair die.</li>
                <li>Find the probability of rolling an even number on a fair die.</li>
                <li>If P(A) = 0.4, find P(not A).</li>
                <li>A bag contains 3 red balls and 2 blue balls. Find P(red).</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>1/2</li>
                <li>1/6</li>
                <li>1/2</li>
                <li>0.6</li>
                <li>3/5</li>
            </ol>
        `
    },


    // =========================================================
    // TOPIC 33: PERMUTATION
    // =========================================================

    33: {
        title: "Permutation",

        lesson: `
            <p><strong>Permutation</strong> is the arrangement of objects where order matters.</p>

            <p>The factorial of a positive integer n is:</p>

            <p>
            n! = n × (n−1) × (n−2) × ... × 1
            </p>

            <p>Also:</p>

            <p>
            0! = 1
            </p>

            <p>The number of arrangements of n objects taken r at a time is:</p>

            <p>
            nP<sub>r</sub> = n!/(n−r)!
            </p>

            <p>Permutation is used when different orders count as different arrangements.</p>
        `,

        examples: `
            <p><strong>Example 1:</strong> Find 5!.</p>

            <p>
            5! = 5 × 4 × 3 × 2 × 1
            </p>

            <p>
            = <strong>120</strong>
            </p>

            <p><strong>Example 2:</strong> Find 5P<sub>2</sub>.</p>

            <p>
            5P<sub>2</sub> = 5!/(5−2)!
            </p>

            <p>
            = 5!/3!
            </p>

            <p>
            = 5 × 4 = <strong>20</strong>
            </p>

            <p><strong>Example 3:</strong> In how many ways can 3 students be arranged in a row?</p>

            <p>
            3! = <strong>6</strong>
            </p>
        `,

        practice: `
            <ol>
                <li>Find 4!.</li>
                <li>Find 6!.</li>
                <li>Find 6P<sub>2</sub>.</li>
                <li>Find 7P<sub>3</sub>.</li>
                <li>In how many ways can 5 people stand in a line?</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>24</li>
                <li>720</li>
                <li>30</li>
                <li>210</li>
                <li>120</li>
            </ol>
        `
    },


    // =========================================================
    // TOPIC 34: COMBINATION
    // =========================================================

    34: {
        title: "Combination",

        lesson: `
            <p><strong>Combination</strong> is the selection of objects where order does not matter.</p>

            <p>The formula for choosing r objects from n objects is:</p>

            <p>
            nC<sub>r</sub> = n!/[r!(n−r)!]
            </p>

            <p>For example, choosing A and B is the same selection as choosing B and A.</p>

            <p>This is different from permutation, where order matters.</p>
        `,

        examples: `
            <p><strong>Example 1:</strong> Find 5C<sub>2</sub>.</p>

            <p>
            5C<sub>2</sub> = 5!/(2!3!)
            </p>

            <p>
            = <strong>10</strong>
            </p>

            <p><strong>Example 2:</strong> Find 6C<sub>3</sub>.</p>

            <p>
            6C<sub>3</sub> = 6!/(3!3!)
            </p>

            <p>
            = <strong>20</strong>
            </p>

            <p><strong>Example 3:</strong> From 8 students, how many ways can 2 be selected?</p>

            <p>
            8C<sub>2</sub> = 8!/(2!6!)
            </p>

            <p>
            = <strong>28</strong>
            </p>
        `,

        practice: `
            <ol>
                <li>Find 4C<sub>2</sub>.</li>
                <li>Find 5C<sub>3</sub>.</li>
                <li>Find 7C<sub>2</sub>.</li>
                <li>Find 8C<sub>3</sub>.</li>
                <li>From 10 students, how many ways can 2 be selected?</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>6</li>
                <li>10</li>
                <li>21</li>
                <li>56</li>
                <li>45</li>
            </ol>
        `
    },


    // =========================================================
    // TOPIC 35: INTRODUCTION TO MATRICES
    // =========================================================

    35: {
        title: "Introduction to Matrices",

        lesson: `
            <p>A <strong>matrix</strong> is a rectangular arrangement of numbers or other mathematical quantities
            arranged in rows and columns.</p>

            <p>For example:</p>

            <p>
            A =
            [ 2  3 ]<br>
            [ 4  5 ]
            </p>

            <p>This matrix has 2 rows and 2 columns, so its order is <strong>2 × 2</strong>.</p>

            <p>The numbers inside a matrix are called <strong>elements</strong>.</p>

            <p>Matrices can be:</p>

            <ul>
                <li>Row matrices</li>
                <li>Column matrices</li>
                <li>Square matrices</li>
                <li>Zero matrices</li>
                <li>Identity matrices</li>
            </ul>

            <p>Two matrices can be added or subtracted when they have the same order.</p>

            <p>Matrix multiplication follows specific rules based on rows and columns.</p>
        `,

        examples: `
            <p><strong>Example 1:</strong> State the order of:</p>

            <p>
            [ 1  2  3 ]<br>
            [ 4  5  6 ]
            </p>

            <p>There are 2 rows and 3 columns.</p>

            <p>
            Order = <strong>2 × 3</strong>
            </p>

            <p><strong>Example 2:</strong> Add:</p>

            <p>
            A = [ 1  2 ]<br>
            &nbsp;&nbsp;&nbsp;&nbsp;[ 3  4 ]
            </p>

            <p>
            B = [ 5  6 ]<br>
            &nbsp;&nbsp;&nbsp;&nbsp;[ 7  8 ]
            </p>

            <p>
            A + B =
            [ 6  8 ]<br>
            &nbsp;&nbsp;&nbsp;&nbsp;[ 10 12 ]
            </p>

            <p><strong>Example 3:</strong> If:</p>

            <p>
            A = [ 2  3 ]<br>
            &nbsp;&nbsp;&nbsp;&nbsp;[ 4  5 ]
            </p>

            <p>Find 2A.</p>

            <p>
            2A =
            [ 4  6 ]<br>
            &nbsp;&nbsp;&nbsp;&nbsp;[ 8  10 ]
            </p>
        `,

        practice: `
            <ol>
                <li>State the order of a matrix with 3 rows and 2 columns.</li>
                <li>Add [1 2; 3 4] and [2 3; 4 5].</li>
                <li>Multiply [2 4; 1 3] by 2.</li>
                <li>What is a square matrix?</li>
                <li>What is the order of an identity matrix with 3 rows and 3 columns?</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>3 × 2</li>
                <li>[3 5; 7 9]</li>
                <li>[4 8; 2 6]</li>
                <li>A matrix having the same number of rows and columns.</li>
                <li>3 × 3</li>
            </ol>
        `
    }

};
    `;
}
