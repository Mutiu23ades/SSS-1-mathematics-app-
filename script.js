function showTopic() {

    const topic = document.getElementById("topicSelect").value;
    const lesson = document.getElementById("lesson");

    const topics = {

        13: {
            title: "Simultaneous Equations",

            lesson: `
                <h3>Introduction</h3>
                <p>
                    Simultaneous equations are two or more equations involving two or more unknowns.
                    The equations must be solved together because the values of the unknowns must satisfy
                    all the equations at the same time.
                </p>

                <h3>Two Linear Simultaneous Equations</h3>
                <p>
                    A common form is:
                    ax + by = c
                    and
                    dx + ey = f.
                </p>

                <h3>Elimination Method</h3>
                <p>
                    The elimination method involves multiplying one or both equations where necessary
                    so that the coefficient of one unknown becomes equal and opposite. The equations
                    are then added or subtracted to eliminate that unknown.
                </p>

                <h3>Substitution Method</h3>
                <p>
                    Make one unknown the subject of one equation and substitute the resulting expression
                    into the other equation.
                </p>

                <h3>Checking the Answer</h3>
                <p>
                    Always substitute the values obtained for x and y into both original equations.
                    The values should satisfy both equations.
                </p>

                <h3>Applications</h3>
                <p>
                    Simultaneous equations can be used to solve problems involving ages, prices,
                    numbers, dimensions and other quantities.
                </p>
            `,

            examples: `
                <h4>Example 1: Solve x + y = 10 and x - y = 2</h4>
                <p>
                    Add the equations:
                    <br>x + y = 10
                    <br>x - y = 2
                </p>
                <p>
                    2x = 12
                </p>
                <p>
                    x = 6
                </p>
                <p>
                    Substitute into x + y = 10:
                    6 + y = 10
                </p>
                <p>
                    y = <strong>4</strong>
                </p>

                <h4>Example 2: Solve 2x + y = 11 and x + y = 7</h4>
                <p>
                    Subtract the second equation from the first:
                </p>
                <p>
                    x = 4
                </p>
                <p>
                    Substitute into x + y = 7:
                    4 + y = 7.
                </p>
                <p>
                    y = <strong>3</strong>
                </p>

                <h4>Example 3: Solve 3x + 2y = 16 and x + y = 6</h4>
                <p>
                    From x + y = 6:
                    y = 6 - x.
                </p>
                <p>
                    Substitute:
                    3x + 2(6 - x) = 16.
                </p>
                <p>
                    3x + 12 - 2x = 16.
                </p>
                <p>
                    x = 4, therefore y = 2.
                </p>
                <p>
                    Answer: <strong>x = 4, y = 2</strong>.
                </p>
            `,

            practice: `
                <ol>
                    <li>Solve x + y = 12 and x - y = 4.</li>
                    <li>Solve 2x + y = 9 and x + y = 6.</li>
                    <li>Solve 3x + y = 13 and x + y = 7.</li>
                    <li>Solve 2x + 3y = 13 and x + y = 5.</li>
                    <li>Solve 3x + 2y = 12 and x + y = 5.</li>
                    <li>Solve 4x + y = 17 and x - y = 3.</li>
                    <li>Solve 5x + 2y = 19 and x + y = 5.</li>
                    <li>The sum of two numbers is 20 and their difference is 6. Find them.</li>
                    <li>Two pens and one book cost ₦700. One pen and one book cost ₦500. Find the cost of each.</li>
                    <li>Check whether x = 4 and y = 3 satisfy 2x + y = 11.</li>
                </ol>
            `,

            answers: `
                <ol>
                    <li>x = 8, y = 4</li>
                    <li>x = 3, y = 3</li>
                    <li>x = 3, y = 4</li>
                    <li>x = 2, y = 3</li>
                    <li>x = 2, y = 3</li>
                    <li>x = 4, y = 1</li>
                    <li>x = 3, y = 2</li>
                    <li>13 and 7</li>
                    <li>Pen = ₦200, Book = ₦300</li>
                    <li>Yes. 2(4) + 3 = 11.</li>
                </ol>
            `
        },

        14: {
            title: "Quadratic Equations",

            lesson: `
                <h3>Meaning of a Quadratic Equation</h3>
                <p>
                    A quadratic equation is an equation whose highest power of the variable is 2.
                    Its general form is:
                    ax<sup>2</sup> + bx + c = 0, where a is not zero.
                </p>

                <h3>Methods of Solving Quadratic Equations</h3>
                <ul>
                    <li>Factorization</li>
                    <li>Completing the square</li>
                    <li>Quadratic formula</li>
                </ul>

                <h3>Solving by Factorization</h3>
                <p>
                    Rearrange the equation so that one side is zero. Factorize and use the
                    zero-product rule.
                </p>

                <h3>Quadratic Formula</h3>
                <p>
                    For ax<sup>2</sup> + bx + c = 0:
                </p>

                <p>
                    x = [-b ± √(b<sup>2</sup> - 4ac)] / 2a
                </p>

                <h3>Discriminant</h3>
                <p>
                    The expression b<sup>2</sup> - 4ac is called the discriminant.
                </p>

                <ul>
                    <li>If it is positive, there are two real roots.</li>
                    <li>If it is zero, there is one repeated real root.</li>
                    <li>If it is negative, there are no real roots.</li>
                </ul>
            `,

            examples: `
                <h4>Example 1: Solve x<sup>2</sup> + 5x + 6 = 0</h4>
                <p>
                    Find two numbers whose product is 6 and sum is 5:
                    2 and 3.
                </p>
                <p>
                    (x + 2)(x + 3) = 0
                </p>
                <p>
                    Therefore:
                    <strong>x = -2 or x = -3</strong>.
                </p>

                <h4>Example 2: Solve x<sup>2</sup> - 9 = 0</h4>
                <p>
                    x<sup>2</sup> - 3<sup>2</sup> = 0
                </p>
                <p>
                    (x - 3)(x + 3) = 0
                </p>
                <p>
                    x = <strong>3 or -3</strong>.
                </p>

                <h4>Example 3: Solve 2x<sup>2</sup> + 7x + 3 = 0</h4>
                <p>
                    Factorize:
                    (2x + 1)(x + 3) = 0.
                </p>
                <p>
                    Therefore:
                    x = <strong>-1/2 or -3</strong>.
                </p>

                <h4>Example 4: Solve x<sup>2</sup> - 4x - 5 = 0</h4>
                <p>
                    (x - 5)(x + 1) = 0.
                </p>
                <p>
                    Therefore x = <strong>5 or -1</strong>.
                </p>
            `,

            practice: `
                <ol>
                    <li>Solve x<sup>2</sup> + 7x + 12 = 0.</li>
                    <li>Solve x<sup>2</sup> + 8x + 15 = 0.</li>
                    <li>Solve x<sup>2</sup> - 25 = 0.</li>
                    <li>Solve x<sup>2</sup> - 5x + 6 = 0.</li>
                    <li>Solve x<sup>2</sup> + x - 6 = 0.</li>
                    <li>Solve x<sup>2</sup> - 2x - 8 = 0.</li>
                    <li>Solve 2x<sup>2</sup> + 5x + 2 = 0.</li>
                    <li>Solve 3x<sup>2</sup> - 12x = 0.</li>
                    <li>Find the discriminant of x<sup>2</sup> + 4x + 3 = 0.</li>
                    <li>State the quadratic formula.</li>
                </ol>
            `,

            answers: `
                <ol>
                    <li>x = -3 or -4</li>
                    <li>x = -3 or -5</li>
                    <li>x = 5 or -5</li>
                    <li>x = 2 or 3</li>
                    <li>x = 2 or -3</li>
                    <li>x = 4 or -2</li>
                    <li>x = -1/2 or -2</li>
                    <li>x = 0 or 4</li>
                    <li>4</li>
                    <li>x = [-b ± √(b<sup>2</sup> - 4ac)] / 2a</li>
                </ol>
            `
        },

        15: {
            title: "Variation",

            lesson: `
                <h3>Meaning of Variation</h3>
                <p>
                    Variation describes how one quantity changes in relation to another quantity.
                    The main types studied are direct variation, inverse variation and joint variation.
                </p>

                <h3>Direct Variation</h3>
                <p>
                    If y varies directly as x, then:
                    y = kx,
                    where k is the constant of variation.
                </p>

                <h3>Inverse Variation</h3>
                <p>
                    If y varies inversely as x, then:
                    y = k/x.
                </p>

                <h3>Joint Variation</h3>
                <p>
                    If y varies jointly as x and z, then:
                    y = kxz.
                </p>

                <h3>Finding the Constant</h3>
                <p>
                    Substitute known values into the variation equation to find k.
                    Then use k to find the required unknown.
                </p>

                <h3>Practical Examples</h3>
                <p>
                    Direct variation occurs when quantities increase together at a constant rate.
                    Inverse variation occurs when one quantity increases while the other decreases.
                </p>
            `,

            examples: `
                <h4>Example 1: y varies directly as x. If y = 12 when x = 4, find y when x = 7.</h4>
                <p>
                    y = kx.
                </p>
                <p>
                    12 = 4k, so k = 3.
                </p>
                <p>
                    When x = 7:
                    y = 3(7) = <strong>21</strong>.
                </p>

                <h4>Example 2: y varies inversely as x. If y = 6 when x = 4, find y when x = 8.</h4>
                <p>
                    y = k/x.
                </p>
                <p>
                    6 = k/4, therefore k = 24.
                </p>
                <p>
                    y = 24/8 = <strong>3</strong>.
                </p>

                <h4>Example 3: y varies directly as x<sup>2</sup>. If y = 20 when x = 2, find y when x = 3.</h4>
                <p>
                    y = kx<sup>2</sup>.
                </p>
                <p>
                    20 = 4k, so k = 5.
                </p>
                <p>
                    y = 5(9) = <strong>45</strong>.
                </p>

                <h4>Example 4: z varies jointly as x and y. If z = 24 when x = 3 and y = 4, find z when x = 5 and y = 2.</h4>
                <p>
                    z = kxy.
                </p>
                <p>
                    24 = k(3)(4), so k = 2.
                </p>
                <p>
                    z = 2(5)(2) = <strong>20</strong>.
                </p>
            `,

            practice: `
                <ol>
                    <li>y varies directly as x. If y = 10 when x = 2, find k.</li>
                    <li>y varies directly as x. If y = 15 when x = 5, find y when x = 8.</li>
                    <li>y varies directly as x<sup>2</sup>. If y = 12 when x = 2, find k.</li>
                    <li>Using question 3, find y when x = 4.</li>
                    <li>y varies inversely as x. If y = 5 when x = 6, find k.</li>
                    <li>Using question 5, find y when x = 10.</li>
                    <li>z varies jointly as x and y. If z = 18 when x = 3 and y = 2, find k.</li>
                    <li>Using question 7, find z when x = 5 and y = 4.</li>
                    <li>If y = kx and k = 7, find y when x = 9.</li>
                    <li>State the equation for inverse variation.</li>
                </ol>
            `,

            answers: `
                <ol>
                    <li>k = 5</li>
                    <li>24</li>
                    <li>k = 3</li>
                    <li>48</li>
                    <li>k = 30</li>
                    <li>3</li>
                    <li>k = 3</li>
                    <li>60</li>
                    <li>63</li>
                    <li>y = k/x</li>
                </ol>
            `
        },

        16: {
            title: "Sequence and Series",

            lesson: `
                <h3>Sequence</h3>
                <p>
                    A sequence is an ordered list of numbers that follows a particular pattern.
                    Each number in the sequence is called a term.
                </p>

                <h3>Arithmetic Sequence</h3>
                <p>
                    An arithmetic sequence has a constant difference between consecutive terms.
                    The common difference is represented by d.
                </p>

                <p>
                    The nth term is:
                    <strong>T<sub>n</sub> = a + (n - 1)d</strong>
                </p>

                <h3>Geometric Sequence</h3>
                <p>
                    A geometric sequence has a constant ratio between consecutive terms.
                    The common ratio is represented by r.
                </p>

                <p>
                    The nth term is:
                    <strong>T<sub>n</sub> = ar<sup>n-1</sup></strong>
                </p>

                <h3>Series</h3>
                <p>
                    A series is the sum of the terms of a sequence.
                </p>

                <h3>Sum of an Arithmetic Series</h3>
                <p>
                    S<sub>n</sub> = n/2 [2a + (n - 1)d].
                </p>

                <h3>Sum of a Geometric Series</h3>
                <p>
                    S<sub>n</sub> = a(r<sup>n</sup> - 1)/(r - 1), when r is not 1.
                </p>
            `,

            examples: `
                <h4>Example 1: Find the next three terms: 3, 7, 11, 15, ...</h4>
                <p>
                    Common difference = 4.
                </p>
                <p>
                    Next terms = <strong>19, 23, 27</strong>.
                </p>

                <h4>Example 2: Find the 10th term of 5, 8, 11, ...</h4>
                <p>
                    a = 5, d = 3, n = 10.
                </p>
                <p>
                    T<sub>10</sub> = 5 + (10 - 1)(3)
                    = 5 + 27
                    = <strong>32</strong>.
                </p>

                <h4>Example 3: Find the sum of the first 10 terms of 2, 5, 8, ...</h4>
                <p>
                    a = 2, d = 3, n = 10.
                </p>
                <p>
                    S<sub>10</sub> = 10/2 [2(2) + 9(3)]
                </p>
                <p>
                    = 5(4 + 27)
                    = <strong>155</strong>.
                </p>

                <h4>Example 4: Find the next term in 2, 6, 18, 54, ...</h4>
                <p>
                    Common ratio = 3.
                </p>
                <p>
                    Next term = 54 × 3 = <strong>162</strong>.
                </p>
            `,

            practice: `
                <ol>
                    <li>Find the next three terms: 4, 8, 12, 16, ...</li>
                    <li>Find the next three terms: 3, 6, 12, 24, ...</li>
                    <li>Find the common difference of 7, 11, 15, 19.</li>
                    <li>Find the 12th term of 2, 5, 8, ...</li>
                    <li>Find the 20th term of 4, 9, 14, ...</li>
                    <li>Find the sum of the first 10 terms of 1, 3, 5, ...</li>
                    <li>Find the common ratio of 5, 15, 45, 135.</li>
                    <li>Find the 6th term of 2, 6, 18, ...</li>
                    <li>Find the sum of 3 + 6 + 9 + ... + 30.</li>
                    <li>State the formula for the nth term of an arithmetic sequence.</li>
                </ol>
            `,

            answers: `
                <ol>
                    <li>20, 24, 28</li>
                    <li>48, 96, 192</li>
                    <li>4</li>
                    <li>35</li>
                    <li>99</li>
                    <li>100</li>
                    <li>3</li>
                    <li>486</li>
                    <li>165</li>
                    <li>T<sub>n</sub> = a + (n - 1)d</li>
                </ol>
            `
        },

        17: {
            title: "Binary Operations",

            lesson: `
                <h3>Meaning of a Binary Operation</h3>
                <p>
                    A binary operation combines two elements of a set to produce another element.
                    A special symbol such as *, ⊙ or △ may be used instead of the familiar operations.
                </p>

                <h3>Definition of an Operation</h3>
                <p>
                    An operation may be defined by a rule such as:
                    a * b = a + b + 2.
                </p>

                <p>
                    To evaluate a * b, substitute the values of a and b into the rule.
                </p>

                <h3>Closure</h3>
                <p>
                    A set is closed under an operation if operating on any two members of the set
                    produces another member of the same set.
                </p>

                <h3>Commutative Property</h3>
                <p>
                    An operation is commutative if:
                    a * b = b * a.
                </p>

                <h3>Associative Property</h3>
                <p>
                    An operation is associative if:
                    (a * b) * c = a * (b * c).
                </p>

                <h3>Identity Element</h3>
                <p>
                    An identity element leaves another element unchanged when the operation is performed.
                </p>

                <h3>Inverse</h3>
                <p>
                    An inverse combines with an element to produce the identity element.
                </p>
            `,

            examples: `
                <h4>Example 1</h4>
                <p>
                    If a * b = a + b + 2, find 3 * 5.
                </p>
                <p>
                    3 * 5 = 3 + 5 + 2 = <strong>10</strong>.
                </p>

                <h4>Example 2</h4>
                <p>
                    If a * b = 2a + b, find 4 * 3.
                </p>
                <p>
                    = 2(4) + 3
                    = <strong>11</strong>.
                </p>

                <h4>Example 3</h4>
                <p>
                    If a * b = a + b, is the operation commutative?
                </p>
                <p>
                    a * b = a + b and b * a = b + a.
                    Since a + b = b + a, the operation is <strong>commutative</strong>.
                </p>

                <h4>Example 4</h4>
                <p>
                    If a * b = a + b - 1, find 2 * (3 * 4).
                </p>
                <p>
                    3 * 4 = 3 + 4 - 1 = 6.
                </p>
                <p>
                    2 * 6 = 2 + 6 - 1 = <strong>7</strong>.
                </p>
            `,

            practice: `
                <ol>
                    <li>If a * b = a + b + 1, find 3 * 4.</li>
                    <li>If a * b = 2a + b, find 5 * 3.</li>
                    <li>If a * b = a - b, find 7 * 2.</li>
                    <li>If a * b = ab + 1, find 2 * 4.</li>
                    <li>If a * b = a + b - 2, find 5 * 6.</li>
                    <li>For a * b = a + b, calculate 4 * 7.</li>
                    <li>For a * b = a + b, calculate 7 * 4.</li>
                    <li>Is ordinary subtraction commutative?</li>
                    <li>What is meant by an identity element?</li>
                    <li>If a * b = a + b + 3, find 2 * (4 * 5).</li>
                </ol>
            `,

            answers: `
                <ol>
                    <li>8</li>
                    <li>13</li>
                    <li>5</li>
                    <li>9</li>
                    <li>9</li>
                    <li>11</li>
                    <li>11</li>
                    <li>No</li>
                    <li>An element that leaves another element unchanged under the operation.</li>
                    <li>14</li>
                </ol>
            `
        },

        18: {
            title: "Modular Arithmetic",

            lesson: `
                <h3>Meaning of Modular Arithmetic</h3>
                <p>
                    Modular arithmetic is arithmetic involving remainders.
                    It is sometimes called clock arithmetic.
                </p>

                <h3>Modulo Notation</h3>
                <p>
                    The expression a mod n means the remainder obtained when a is divided by n.
                </p>

                <p>
                    For example:
                    17 mod 5 = 2.
                </p>

                <h3>Congruence</h3>
                <p>
                    We write:
                    a ≡ b (mod n)
                    when a and b have the same remainder when divided by n.
                </p>

                <h3>Properties</h3>
                <p>
                    Addition, subtraction and multiplication can be performed using congruences.
                </p>

                <h3>Clock Arithmetic</h3>
                <p>
                    On a 12-hour clock, 15 o'clock is equivalent to 3 o'clock.
                    Therefore 15 ≡ 3 (mod 12).
                </p>

                <h3>Solving Simple Congruences</h3>
                <p>
                    Reduce numbers to their remainders and solve within the required modulus.
                </p>
            `,

            examples: `
                <h4>Example 1: Find 23 mod 5</h4>
                <p>
                    23 = 5(4) + 3.
                </p>
                <p>
                    Answer = <strong>3</strong>.
                </p>

                <h4>Example 2: Find 37 mod 6</h4>
                <p>
                    37 = 6(6) + 1.
                </p>
                <p>
                    Answer = <strong>1</strong>.
                </p>

                <h4>Example 3</h4>
                <p>
                    Determine whether 25 ≡ 7 (mod 9).
                </p>
                <p>
                    25 mod 9 = 7.
                </p>
                <p>
                    Therefore <strong>25 ≡ 7 (mod 9)</strong>.
                </p>

                <h4>Example 4</h4>
                <p>
                    Find 8 + 9 (mod 7).
                </p>
                <p>
                    17 mod 7 = <strong>3</strong>.
                </p>

                <h4>Example 5</h4>
                <p>
                    What time is it on a 12-hour clock 8 hours after 7 o'clock?
                </p>
                <p>
                    7 + 8 = 15.
                </p>
                <p>
                    15 mod 12 = <strong>3</strong>.
                </p>
            `,

            practice: `
                <ol>
                    <li>Find 19 mod 4.</li>
                    <li>Find 35 mod 6.</li>
                    <li>Find 50 mod 7.</li>
                    <li>Find 27 mod 5.</li>
                    <li>Determine whether 22 ≡ 4 (mod 9).</li>
                    <li>Calculate 8 + 12 (mod 5).</li>
                    <li>Calculate 7 × 6 (mod 5).</li>
                    <li>What is 14 o'clock on a 12-hour clock?</li>
                    <li>Find the remainder when 100 is divided by 9.</li>
                    <li>Explain what a ≡ b (mod n) means.</li>
                </ol>
            `,

            answers: `
                <ol>
                    <li>3</li>
                    <li>5</li>
                    <li>1</li>
                    <li>2</li>
                    <li>Yes</li>
                    <li>0</li>
                    <li>2</li>
                    <li>2 o'clock</li>
                    <li>1</li>
                    <li>a and b have the same remainder when divided by n.</li>
                </ol>
            `
        },

        19: {
            title: "Plane Geometry",

            lesson: `
                <h3>Meaning of Plane Geometry</h3>
                <p>
                    Plane geometry deals with figures and shapes on a flat surface.
                    It includes points, lines, angles, triangles, quadrilaterals, polygons and circles.
                </p>

                <h3>Basic Terms</h3>
                <ul>
                    <li><strong>Point:</strong> indicates a position.</li>
                    <li><strong>Line:</strong> extends indefinitely in both directions.</li>
                    <li><strong>Line segment:</strong> part of a line with two endpoints.</li>
                    <li><strong>Ray:</strong> starts at one point and extends indefinitely in one direction.</li>
                    <li><strong>Angle:</strong> formed by two rays meeting at a common endpoint.</li>
                </ul>

                <h3>Angles</h3>
                <ul>
                    <li>Acute angle: less than 90°</li>
                    <li>Right angle: 90°</li>
                    <li>Obtuse angle: greater than 90° but less than 180°</li>
                    <li>Straight angle: 180°</li>
                    <li>Reflex angle: greater than 180° but less than 360°</li>
                </ul>

                <h3>Important Geometry Facts</h3>
                <p>
                    Angles on a straight line add to 180°.
                    Angles around a point add to 360°.
                    Vertically opposite angles are equal.
                </p>

                <h3>Parallel Lines</h3>
                <p>
                    When parallel lines are crossed by a transversal, corresponding angles are equal,
                    alternate angles are equal and co-interior angles add to 180°.
                </p>
            `,

            examples: `
                <h4>Example 1</h4>
                <p>
                    Two angles on a straight line are 65° and x.
                </p>
                <p>
                    x + 65° = 180°.
                </p>
                <p>
                    x = <strong>115°</strong>.
                </p>

                <h4>Example 2</h4>
                <p>
                    Angles around a point are 80°, 110° and x.
                </p>
                <p>
                    x = 360° - 80° - 110°
                    = <strong>170°</strong>.
                </p>

                <h4>Example 3</h4>
                <p>
                    One angle formed by intersecting lines is 70°.
                    Its vertically opposite angle is also <strong>70°</strong>.
                </p>

                <h4>Example 4</h4>
                <p>
                    If an alternate angle is 55°, the corresponding alternate angle is also
                    <strong>55°</strong> when the lines are parallel.
                </p>
            `,

            practice: `
                <ol>
                    <li>Find the complement of 35°.</li>
                    <li>Find the supplement of 72°.</li>
                    <li>Two angles on a straight line are 48° and x. Find x.</li>
                    <li>Angles around a point are 90°, 120° and x. Find x.</li>
                    <li>Classify 45°.</li>
                    <li>Classify 90°.</li>
                    <li>Classify 135°.</li>
                    <li>What is the sum of angles on a straight line?</li>
                    <li>What is the sum of angles around a point?</li>
                    <li>State the relationship between vertically opposite angles.</li>
                </ol>
            `,

            answers: `
                <ol>
                    <li>55°</li>
                    <li>108°</li>
                    <li>132°</li>
                    <li>150°</li>
                    <li>Acute</li>
                    <li>Right angle</li>
                    <li>Obtuse</li>
                    <li>180°</li>
                    <li>360°</li>
                    <li>They are equal.</li>
                </ol>
            `
        },

        20: {
            title: "Angles and Lines",

            lesson: `
                <h3>Lines</h3>
                <p>
                    Lines may be parallel, perpendicular or intersecting.
                    Parallel lines never meet, while perpendicular lines meet at 90°.
                </p>

                <h3>Transversal</h3>
                <p>
                    A transversal is a line that crosses two or more other lines.
                    Special angle relationships are formed when a transversal crosses parallel lines.
                </p>

                <h3>Corresponding Angles</h3>
                <p>
                    Corresponding angles are equal when two parallel lines are crossed by a transversal.
                </p>

                <h3>Alternate Angles</h3>
                <p>
                    Alternate angles are equal when the lines are parallel.
                </p>

                <h3>Co-interior Angles</h3>
                <p>
                    Co-interior angles on the same side of a transversal add up to 180°.
                </p>

                <h3>Angle Problems</h3>
                <p>
                    Use known angle relationships to form equations and calculate unknown angles.
                </p>
            `,

            examples: `
                <h4>Example 1</h4>
                <p>
                    A corresponding angle is 72°. Find the matching angle.
                </p>
                <p>
                    Corresponding angles are equal.
                    Answer = <strong>72°</strong>.
                </p>

                <h4>Example 2</h4>
                <p>
                    Co-interior angles are x and 115°.
                </p>
                <p>
                    x + 115° = 180°.
                </p>
                <p>
                    x = <strong>65°</strong>.
                </p>

                <h4>Example 3</h4>
                <p>
                    Two perpendicular lines meet. If one angle is 90°, all four angles around
                    the intersection are <strong>90°</strong>.
                </p>

                <h4>Example 4</h4>
                <p>
                    An angle is 125°. Its adjacent angle on a straight line is:
                </p>
                <p>
                    180° - 125° = <strong>55°</strong>.
                </p>
            `,

            practice: `
                <ol>
                    <li>Find the supplementary angle of 65°.</li>
                    <li>Find the complementary angle of 28°.</li>
                    <li>If a corresponding angle is 80°, find the other corresponding angle.</li>
                    <li>If an alternate angle is 63°, find its alternate pair.</li>
                    <li>Find x if x + 110° = 180°.</li>
                    <li>Find x if x + 75° = 180°.</li>
                    <li>What angle is formed by perpendicular lines?</li>
                    <li>What is a transversal?</li>
                    <li>What is the relationship between co-interior angles?</li>
                    <li>If one angle is 140°, find the adjacent angle on a straight line.</li>
                </ol>
            `,

            answers: `
                <ol>
                    <li>115°</li>
                    <li>62°</li>
                    <li>80°</li>
                    <li>63°</li>
                    <li>70°</li>
                    <li>105°</li>
                    <li>90°</li>
                    <li>A line crossing two or more lines.</li>
                    <li>They add to 180° when the lines are parallel.</li>
                    <li>40°</li>
                </ol>
            `
        },

        21: {
            title: "Triangles",

            lesson: `
                <h3>Meaning of a Triangle</h3>
                <p>
                    A triangle is a plane figure bounded by three straight lines.
                    It has three sides, three angles and three vertices.
                </p>

                <h3>Types According to Sides</h3>
                <ul>
                    <li>Equilateral triangle: three equal sides.</li>
                    <li>Isosceles triangle: two equal sides.</li>
                    <li>Scalene triangle: no equal sides.</li>
                </ul>

                <h3>Types According to Angles</h3>
                <ul>
                    <li>Acute-angled triangle</li>
                    <li>Right-angled triangle</li>
                    <li>Obtuse-angled triangle</li>
                </ul>

                <h3>Angle Sum</h3>
                <p>
                    The sum of the interior angles of every triangle is 180°.
                </p>

                <h3>Exterior Angle</h3>
                <p>
                    An exterior angle of a triangle equals the sum of the two opposite interior angles.
                </p>

                <h3>Pythagoras' Theorem</h3>
                <p>
                    In a right-angled triangle:
                    a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>,
                    where c is the hypotenuse.
                </p>
            `,

            examples: `
                <h4>Example 1</h4>
                <p>
                    A triangle has angles 50° and 60°. Find the third angle.
                </p>
                <p>
                    Third angle = 180° - 50° - 60°
                    = <strong>70°</strong>.
                </p>

                <h4>Example 2</h4>
                <p>
                    Find the hypotenuse of a right triangle with sides 6 cm and 8 cm.
                </p>
                <p>
                    c<sup>2</sup> = 6<sup>2</sup> + 8<sup>2</sup>
                    = 36 + 64 = 100.
                </p>
                <p>
                    c = <strong>10 cm</strong>.
                </p>

                <h4>Example 3</h4>
                <p>
                    An isosceles triangle has equal angles of 50°. Find the third angle.
                </p>
                <p>
                    180° - 50° - 50° = <strong>80°</strong>.
                </p>

                <h4>Example 4</h4>
                <p>
                    The exterior angle of a triangle is 120°. One opposite interior angle is 50°.
                    Find the other.
                </p>
                <p>
                    120° = 50° + x.
                </p>
                <p>
                    x = <strong>70°</strong>.
                </p>
            `,

            practice: `
                <ol>
                    <li>Find the third angle of a triangle with angles 40° and 70°.</li>
                    <li>Find the third angle if two angles are 55° and 65°.</li>
                    <li>State the angle sum of a triangle.</li>
                    <li>What type of triangle has three equal sides?</li>
                    <li>What type of triangle has two equal sides?</li>
                    <li>Find the hypotenuse of a right triangle with sides 5 cm and 12 cm.</li>
                    <li>Find the missing side if the hypotenuse is 13 cm and one side is 5 cm.</li>
                    <li>An exterior angle is 110° and one opposite interior angle is 45°. Find the other.</li>
                    <li>Classify a triangle with angles 30°, 60° and 90°.</li>
                    <li>State Pythagoras' theorem.</li>
                </ol>
            `,

            answers: `
                <ol>
                    <li>70°</li>
                    <li>60°</li>
                    <li>180°</li>
                    <li>Equilateral</li>
                    <li>Isosceles</li>
                    <li>13 cm</li>
                    <li>12 cm</li>
                    <li>65°</li>
                    <li>Right-angled triangle</li>
                    <li>a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup></li>
                </ol>
            `
        },

        22: {
            title: "Quadrilaterals and Polygons",

            lesson: `
                <h3>Quadrilaterals</h3>
                <p>
                    A quadrilateral is a polygon with four sides, four vertices and four interior angles.
                    The sum of its interior angles is 360°.
                </p>

                <h3>Types of Quadrilaterals</h3>
                <ul>
                    <li>Square</li>
                    <li>Rectangle</li>
                    <li>Parallelogram</li>
                    <li>Rhombus</li>
                    <li>Trapezium</li>
                    <li>Kite</li>
                </ul>

                <h3>Polygons</h3>
                <p>
                    A polygon is a closed plane figure made up of straight line segments.
                </p>

                <h3>Names of Polygons</h3>
                <ul>
                    <li>3 sides — triangle</li>
                    <li>4 sides — quadrilateral</li>
                    <li>5 sides — pentagon</li>
                    <li>6 sides — hexagon</li>
                    <li>7 sides — heptagon</li>
                    <li>8 sides — octagon</li>
                    <li>9 sides — nonagon</li>
                    <li>10 sides — decagon</li>
                </ul>

                <h3>Interior Angle Sum</h3>
                <p>
                    For a polygon with n sides:
                    <strong>(n - 2) × 180°</strong>.
                </p>

                <h3>Regular Polygons</h3>
                <p>
                    A regular polygon has equal sides and equal interior angles.
                    Each interior angle is:
                    [(n - 2) × 180°] / n.
                </p>
            `,

            examples: `
                <h4>Example 1</h4>
                <p>
                    Find the fourth angle of a quadrilateral whose other angles are 80°, 90° and 100°.
                </p>
                <p>
                    x = 360° - 80° - 90° - 100°
                    = <strong>90°</strong>.
                </p>

                <h4>Example 2</h4>
                <p>
                    Find the sum of the interior angles of a pentagon.
                </p>
                <p>
                    (5 - 2) × 180° = <strong>540°</strong>.
                </p>

                <h4>Example 3</h4>
                <p>
                    Find each interior angle of a regular hexagon.
                </p>
                <p>
                    [(6 - 2) × 180°] / 6
                    = 720° / 6
                    = <strong>120°</strong>.
                </p>

                <h4>Example 4</h4>
                <p>
                    Find the sum of the interior angles of an octagon.
                </p>
                <p>
                    (8 - 2) × 180°
                    = <strong>1080°</strong>.
                </p>
            `,

            practice: `
                <ol>
                    <li>Find the sum of angles in a quadrilateral.</li>
                    <li>Find the fourth angle of a quadrilateral with angles 70°, 80° and 100°.</li>
                    <li>Find the interior angle sum of a pentagon.</li>
                    <li>Find the interior angle sum of a hexagon.</li>
                    <li>Find the interior angle sum of an octagon.</li>
                    <li>Find each interior angle of a regular pentagon.</li>
                    <li>Find each interior angle of a regular octagon.</li>
                    <li>How many sides does a decagon have?</li>
                    <li>How many sides does a hexagon have?</li>
                    <li>State the formula for the sum of interior angles of an n-sided polygon.</li>
                </ol>
            `,

            answers: `
                <ol>
                    <li>360°</li>
                    <li>110°</li>
                    <li>540°</li>
                    <li>720°</li>
                    <li>1080°</li>
                    <li>108°</li>
                    <li>135°</li>
                    <li>10</li>
                    <li>6</li>
                    <li>(n - 2) × 180°</li>
                </ol>
            `
        },

        23: {
            title: "Circles",

            lesson: `
                <h3>Parts of a Circle</h3>
                <ul>
                    <li><strong>Centre:</strong> middle point of the circle.</li>
                    <li><strong>Radius:</strong> distance from centre to circumference.</li>
                    <li><strong>Diameter:</strong> line through the centre joining two points on the circumference.</li>
                    <li><strong>Chord:</strong> line segment joining two points on the circumference.</li>
                    <li><strong>Arc:</strong> part of the circumference.</li>
                    <li><strong>Sector:</strong> region bounded by two radii and an arc.</li>
                    <li><strong>Segment:</strong> region bounded by a chord and an arc.</li>
                </ul>

                <h3>Diameter and Radius</h3>
                <p>
                    Diameter = 2 × radius.
                </p>

                <h3>Circumference</h3>
                <p>
                    C = 2πr or C = πd.
                </p>

                <h3>Area</h3>
                <p>
                    A = πr<sup>2</sup>.
                </p>

                <h3>Angles in a Circle</h3>
                <p>
                    The angle at the centre standing on an arc is twice the angle at the circumference
                    standing on the same arc.
                </p>

                <p>
                    The angle in a semicircle is 90°.
                </p>
            `,

            examples: `
                <h4>Example 1: Find the circumference of a circle of radius 7 cm.</h4>
                <p>
                    C = 2πr
                    = 2 × 22/7 × 7
                    = <strong>44 cm</strong>.
                </p>

                <h4>Example 2: Find the area of a circle of radius 7 cm.</h4>
                <p>
                    A = πr<sup>2</sup>
                    = 22/7 × 7 × 7
                    = <strong>154 cm<sup>2</sup></strong>.
                </p>

                <h4>Example 3</h4>
                <p>
                    The angle at the centre is 100°. Find the angle at the circumference standing
                    on the same arc.
                </p>
                <p>
                    100° ÷ 2 = <strong>50°</strong>.
                </p>

                <h4>Example 4</h4>
                <p>
                    A circle has diameter 14 cm. Find its radius.
                </p>
                <p>
                    Radius = 14 ÷ 2 = <strong>7 cm</strong>.
                </p>
            `,

            practice: `
                <ol>
                    <li>Find the diameter of a circle with radius 5 cm.</li>
                    <li>Find the radius of a circle with diameter 18 cm.</li>
                    <li>Find the circumference of a circle with radius 7 cm using π = 22/7.</li>
                    <li>Find the area of a circle with radius 7 cm using π = 22/7.</li>
                    <li>Find the circumference of a circle with diameter 14 cm.</li>
                    <li>If the central angle is 80°, find the angle at the circumference on the same arc.</li>
                    <li>If the angle at the circumference is 35°, find the central angle.</li>
                    <li>What is the angle in a semicircle?</li>
                    <li>State the formula for the area of a circle.</li>
                    <li>State the formula for the circumference of a circle.</li>
                </ol>
            `,

            answers: `
                <ol>
                    <li>10 cm</li>
                    <li>9 cm</li>
                    <li>44 cm</li>
                    <li>154 cm<sup>2</sup></li>
                    <li>44 cm</li>
                    <li>40°</li>
                    <li>70°</li>
                    <li>90°</li>
                    <li>A = πr<sup>2</sup></li>
                    <li>C = 2πr or πd</li>
                </ol>
            `
        },

        24: {
            title: "Mensuration of Plane Shapes",

            lesson: `
                <h3>Meaning of Mensuration</h3>
                <p>
                    Mensuration is the branch of mathematics concerned with measuring lengths,
                    perimeters, areas and other dimensions of geometric figures.
                </p>

                <h3>Rectangle</h3>
                <p>
                    Area = length × width.
                    Perimeter = 2(length + width).
                </p>

                <h3>Square</h3>
                <p>
                    Area = side<sup>2</sup>.
                    Perimeter = 4 × side.
                </p>

                <h3>Triangle</h3>
                <p>
                    Area = 1/2 × base × perpendicular height.
                </p>

                <h3>Parallelogram</h3>
                <p>
                    Area = base × perpendicular height.
                </p>

                <h3>Trapezium</h3>
                <p>
                    Area = 1/2 × (sum of parallel sides) × height.
                </p>

                <h3>Circle</h3>
                <p>
                    Area = πr<sup>2</sup>.
                    Circumference = 2πr.
                </p>

                <h3>Units</h3>
                <p>
                    Length is measured in units such as cm and m.
                    Area is measured in square units such as cm<sup>2</sup> and m<sup>2</sup>.
                    Always make sure units are consistent before calculating.
                </p>
            `,

            examples: `
                <h4>Example 1: Find the area of a rectangle 12 cm by 5 cm.</h4>
                <p>
                    Area = 12 × 5
                    = <strong>60 cm<sup>2</sup></strong>.
                </p>

                <h4>Example 2: Find the perimeter of a rectangle 10 m by 6 m.</h4>
                <p>
                    P = 2(10 + 6)
                    = <strong>32 m</strong>.
                </p>

                <h4>Example 3: Find the area of a triangle with base 8 cm and height 5 cm.</h4>
                <p>
                    A = 1/2 × 8 × 5
                    = <strong>20 cm<sup>2</sup></strong>.
                </p>

                <h4>Example 4: Find the area of a trapezium with parallel sides 8 cm and 12 cm
                and height 5 cm.</h4>
                <p>
                    A = 1/2(8 + 12)(5)
                    = 1/2 × 20 × 5
                    = <strong>50 cm<sup>2</sup></strong>.
                </p>

                <h4>Example 5: Find the area of a square of side 9 cm.</h4>
                <p>
                    A = 9<sup>2</sup>
                    = <strong>81 cm<sup>2</sup></strong>.
                </p>
            `,

            practice: `
                <ol>
                    <li>Find the area of a rectangle 15 cm by 8 cm.</li>
                    <li>Find the perimeter of a rectangle 12 cm by 7 cm.</li>
                    <li>Find the area of a square of side 11 cm.</li>
                    <li>Find the perimeter of a square of side 9 cm.</li>
                    <li>Find the area of a triangle with base 10 cm and height 6 cm.</li>
                    <li>Find the area of a parallelogram with base 12 cm and height 7 cm.</li>
                    <li>Find the area of a trapezium with parallel sides 10 cm and 16 cm and height 5 cm.</li>
                    <li>Find the circumference of a circle with radius 7 cm using π = 22/7.</li>
                    <li>Find the area of a circle with radius 7 cm using π = 22/7.</li>
                    <li>State the formula for the area of a triangle.</li>
                </ol>
            `,

            answers: `
                <ol>
                    <li>120 cm<sup>2</sup></li>
                    <li>38 cm</li>
                    <li>121 cm<sup>2</sup></li>
                    <li>36 cm</li>
                    <li>30 cm<sup>2</sup></li>
                    <li>84 cm<sup>2</sup></li>
                    <li>65 cm<sup>2</sup></li>
                    <li>44 cm</li>
                    <li>154 cm<sup>2</sup></li>
                    <li>1/2 × base × perpendicular height</li>
                </ol>
            `
        }

    };


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

    `;
}
