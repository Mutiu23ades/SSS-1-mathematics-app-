const topics = {

    // =========================================================
    // TOPIC 1: NUMBER BASES
    // =========================================================

    1: {
        title: "Number Bases",

        lesson: `
            <p>A number base is the number of different digits used in a
            number system. The common decimal system has base 10 and uses
            the digits 0 to 9.</p>

            <p>In base 2, the digits are 0 and 1. In base 3, the digits are
            0, 1 and 2. In general, a number in base n uses digits from
            0 to n-1.</p>

            <p>The value of a number depends on the position of each digit.</p>

            <p>For example:</p>
            <p><strong>132<sub>4</sub></strong></p>

            <p>
            = 1 × 4² + 3 × 4¹ + 2 × 4⁰<br>
            = 16 + 12 + 2<br>
            = <strong>30<sub>10</sub></strong>
            </p>

            <p>Therefore, 132 in base 4 is equal to 30 in base 10.</p>
        `,

        examples: `
            <ol>
                <li>Convert 1011₂ to base 10.<br>
                = 1×2³ + 0×2² + 1×2 + 1<br>
                = 8 + 0 + 2 + 1 = <strong>11</strong></li>

                <li>Convert 23₄ to base 10.<br>
                = 2×4 + 3 = <strong>11</strong></li>

                <li>Convert 39₁₀ to base 5.<br>
                39 ÷ 5 = 7 remainder 4<br>
                7 ÷ 5 = 1 remainder 2<br>
                1 ÷ 5 = 0 remainder 1<br>
                Therefore 39₁₀ = <strong>124₅</strong>.</li>
            </ol>
        `,

        practice: `
            <ol>
                <li>Convert 1010₂ to base 10.</li>
                <li>Convert 120₃ to base 10.</li>
                <li>Convert 18₁₀ to base 2.</li>
                <li>Convert 23₄ to base 10.</li>
                <li>Convert 39₁₀ to base 5.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>10</li>
                <li>15</li>
                <li>10010₂</li>
                <li>11</li>
                <li>124₅</li>
            </ol>
        `
    },

    // =========================================================
    // TOPIC 2: FRACTIONS AND DECIMALS
    // =========================================================

    2: {
        title: "Fractions and Decimals",

        lesson: `
            <p>A fraction represents part of a whole. It has a numerator
            and denominator.</p>

            <p>Types of fractions include proper fractions, improper
            fractions and mixed numbers.</p>

            <p>To add or subtract fractions, first find a common
            denominator.</p>

            <p>To multiply fractions, multiply the numerators and multiply
            the denominators.</p>

            <p>To divide fractions, multiply by the reciprocal of the
            second fraction.</p>

            <p>Decimals can be converted to fractions and fractions can be
            converted to decimals.</p>
        `,

        examples: `
            <ol>
                <li>
                    1/3 + 1/6<br>
                    = 2/6 + 1/6<br>
                    = <strong>1/2</strong>
                </li>

                <li>
                    3/4 × 2/5<br>
                    = 6/20<br>
                    = <strong>3/10</strong>
                </li>

                <li>
                    0.375 = 375/1000 = <strong>3/8</strong>
                </li>

                <li>
                    2 1/4 = (2×4+1)/4 = <strong>9/4</strong>
                </li>
            </ol>
        `,

        practice: `
            <ol>
                <li>Calculate 1/2 + 1/4.</li>
                <li>Calculate 3/5 - 1/10.</li>
                <li>Calculate 2/3 × 3/4.</li>
                <li>Convert 0.25 to a fraction.</li>
                <li>Convert 1 3/5 to an improper fraction.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>3/4</li>
                <li>1/2</li>
                <li>1/2</li>
                <li>1/4</li>
                <li>8/5</li>
            </ol>
        `
    },

    // =========================================================
    // TOPIC 3: APPROXIMATION AND ESTIMATION
    // =========================================================

    3: {
        title: "Approximation and Estimation",

        lesson: `
            <p>Approximation means giving a value that is close to the
            exact value.</p>

            <p>A number can be rounded to a specified number of decimal
            places or significant figures.</p>

            <p>When rounding, look at the digit immediately after the place
            to which you are rounding.</p>

            <p>If it is 5 or greater, increase the preceding digit by 1.
            If it is less than 5, leave the preceding digit unchanged.</p>

            <p>Estimation involves replacing numbers with convenient
            approximate values to make calculations easier.</p>
        `,

        examples: `
            <ol>
                <li>Round 7.486 to 2 decimal places = <strong>7.49</strong>.</li>
                <li>Round 0.003746 to 2 significant figures =
                <strong>0.0037</strong>.</li>
                <li>Estimate 49.8 × 20.2 ≈ 50 × 20 =
                <strong>1000</strong>.</li>
            </ol>
        `,

        practice: `
            <ol>
                <li>Round 8.765 to 2 decimal places.</li>
                <li>Round 4567 to 2 significant figures.</li>
                <li>Round 0.00456 to 2 significant figures.</li>
                <li>Estimate 19.8 × 5.1.</li>
                <li>Estimate 402 ÷ 19.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>8.77</li>
                <li>4600</li>
                <li>0.0046</li>
                <li>100</li>
                <li>20</li>
            </ol>
        `
    },

    // =========================================================
    // TOPIC 4: STANDARD FORM
    // =========================================================

    4: {
        title: "Standard Form",

        lesson: `
            <p>Standard form is used to write very large or very small
            numbers conveniently.</p>

            <p>A number in standard form is written as:</p>

            <p><strong>a × 10ⁿ</strong></p>

            <p>where 1 ≤ a &lt; 10 and n is an integer.</p>

            <p>Large numbers have positive powers of 10 while small numbers
            have negative powers of 10.</p>

            <p>When multiplying numbers in standard form, multiply the
            coefficients and add the powers.</p>

            <p>When dividing, divide the coefficients and subtract the
            powers.</p>
        `,

        examples: `
            <ol>
                <li>450000 = <strong>4.5 × 10⁵</strong></li>
                <li>0.00072 = <strong>7.2 × 10⁻⁴</strong></li>
                <li>
                    (3×10⁴)(2×10³)
                    = 6×10⁷
                </li>
                <li>
                    (8×10⁶)/(2×10²)
                    = <strong>4×10⁴</strong>
                </li>
            </ol>
        `,

        practice: `
            <ol>
                <li>Write 720000 in standard form.</li>
                <li>Write 0.00045 in standard form.</li>
                <li>Calculate (2×10³)(4×10²).</li>
                <li>Calculate (9×10⁶)/(3×10²).</li>
                <li>Write 6.4×10⁵ as an ordinary number.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>7.2×10⁵</li>
                <li>4.5×10⁻⁴</li>
                <li>8×10⁵</li>
                <li>3×10⁴</li>
                <li>640000</li>
            </ol>
        `
    },

    // =========================================================
    // TOPIC 5: LOGARITHMS
    // =========================================================

    5: {
        title: "Logarithms",

        lesson: `
            <p>A logarithm is another way of expressing an index.</p>

            <p>If:</p>

            <p><strong>aˣ = N</strong></p>

            <p>then:</p>

            <p><strong>logₐN = x</strong></p>

            <p>The laws of logarithms include:</p>

            <ul>
                <li>log(ab) = log a + log b</li>
                <li>log(a/b) = log a - log b</li>
                <li>log(aⁿ) = n log a</li>
            </ul>

            <p>Common logarithms have base 10.</p>
        `,

        examples: `
            <ol>
                <li>log₂ 8 = <strong>3</strong> because 2³ = 8.</li>
                <li>log₁₀ 1000 = <strong>3</strong>.</li>
                <li>log 100 = <strong>2</strong>.</li>
            </ol>
        `,

        practice: `
            <ol>
                <li>Find log₂ 16.</li>
                <li>Find log₃ 27.</li>
                <li>Find log₁₀ 10000.</li>
                <li>Evaluate log₂ 32.</li>
                <li>If log₅ x = 3, find x.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>4</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>125</li>
            </ol>
        `
    },

    // =========================================================
    // TOPIC 6: INDICES
    // =========================================================

    6: {
        title: "Indices",

        lesson: `
            <p>Indices, also called powers or exponents, show how many
            times a number is multiplied by itself.</p>

            <p>The basic laws of indices are:</p>

            <ul>
                <li>aᵐ × aⁿ = aᵐ⁺ⁿ</li>
                <li>aᵐ ÷ aⁿ = aᵐ⁻ⁿ</li>
                <li>(aᵐ)ⁿ = aᵐⁿ</li>
                <li>a⁰ = 1</li>
                <li>a⁻ⁿ = 1/aⁿ</li>
                <li>a¹⁄ⁿ = ⁿ√a</li>
            </ul>

            <p>These laws are useful when simplifying expressions and
            solving equations involving powers.</p>

            <h4>Indicial Equations</h4>

            <p>An indicial equation is an equation in which the unknown
            occurs as an index.</p>

            <p>For example:</p>

            <p>2ˣ = 32</p>

            <p>Since 32 = 2⁵:</p>

            <p>2ˣ = 2⁵</p>

            <p>Therefore <strong>x = 5</strong>.</p>
        `,

        examples: `
            <ol>
                <li>
                    2³ × 2⁴ = 2⁷ = <strong>128</strong>
                </li>

                <li>
                    5⁶ ÷ 5² = 5⁴ = <strong>625</strong>
                </li>

                <li>
                    (3²)³ = 3⁶ = <strong>729</strong>
                </li>

                <li>
                    Solve 2ˣ = 32.<br>
                    32 = 2⁵<br>
                    Therefore <strong>x = 5</strong>.
                </li>

                <li>
                    Solve 3²ˣ = 81.<br>
                    81 = 3⁴<br>
                    Therefore 2x = 4 and <strong>x = 2</strong>.
                </li>
            </ol>
        `,

        practice: `
            <ol>
                <li>Simplify 2³ × 2⁵.</li>
                <li>Simplify 7⁶ ÷ 7².</li>
                <li>Simplify (5²)³.</li>
                <li>Solve 2ˣ = 64.</li>
                <li>Solve 3²ˣ = 729.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>256</li>
                <li>2401</li>
                <li>15625</li>
                <li>x = 6</li>
                <li>x = 3</li>
            </ol>
        `
    },

    // =========================================================
    // TOPIC 7: SURDS
    // =========================================================

    7: {
        title: "Surds",

        lesson: `
            <p>A surd is an irrational root that cannot be simplified to a
            rational number.</p>

            <p>Examples include √2, √3 and √5.</p>

            <p>To simplify a surd, look for perfect square factors.</p>

            <p>For example:</p>

            <p>√12 = √(4×3) = <strong>2√3</strong>.</p>

            <p>Like surds can be added or subtracted.</p>

            <p>Surds can also be multiplied and denominators containing
            surds can be rationalised.</p>
        `,

        examples: `
            <ol>
                <li>√18 = √(9×2) = <strong>3√2</strong>.</li>
                <li>2√3 + 5√3 = <strong>7√3</strong>.</li>
                <li>√2 × √8 = √16 = <strong>4</strong>.</li>
                <li>1/√2 = <strong>√2/2</strong>.</li>
            </ol>
        `,

        practice: `
            <ol>
                <li>Simplify √20.</li>
                <li>Simplify √45.</li>
                <li>Calculate 3√5 + 2√5.</li>
                <li>Calculate √3 × √12.</li>
                <li>Rationalise 1/√3.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>2√5</li>
                <li>3√5</li>
                <li>5√5</li>
                <li>6</li>
                <li>√3/3</li>
            </ol>
        `
    },

    // =========================================================
    // TOPIC 8: SETS
    // =========================================================

    8: {
        title: "Sets",

        lesson: `
            <p>A set is a well-defined collection of objects.</p>

            <p>The objects in a set are called elements or members.</p>

            <p>Important types include universal sets, empty sets and
            subsets.</p>

            <p>The union of A and B is written A ∪ B.</p>

            <p>The intersection is written A ∩ B.</p>

            <p>The complement of A is the set of elements in the universal
            set that are not in A.</p>
        `,

        examples: `
            <p>Let A = {1,2,3} and B = {3,4,5}.</p>

            <p>A ∪ B = {1,2,3,4,5}</p>

            <p>A ∩ B = {3}</p>
        `,

        practice: `
            <ol>
                <li>Let A={1,2,3} and B={3,4,5}. Find A∪B.</li>
                <li>Find A∩B.</li>
                <li>How many elements are in {a,b,c,d}?</li>
                <li>Is {1,2} a subset of {1,2,3}?</li>
                <li>What is the symbol for the empty set?</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>{1,2,3,4,5}</li>
                <li>{3}</li>
                <li>4</li>
                <li>Yes</li>
                <li>∅</li>
            </ol>
        `
    },

    // =========================================================
    // TOPIC 9: ALGEBRAIC EXPRESSIONS
    // =========================================================

    9: {
        title: "Algebraic Expressions",

        lesson: `
            <p>An algebraic expression contains numbers, variables and
            mathematical operations.</p>

            <p>Terms are separated by plus or minus signs.</p>

            <p>Like terms have the same variables raised to the same
            powers.</p>

            <p>Like terms can be collected together.</p>

            <p>Algebraic expressions can also be expanded using the
            distributive law.</p>
        `,

        examples: `
            <ol>
                <li>3x + 5x = <strong>8x</strong>.</li>
                <li>7a - 2a + 4 = <strong>5a + 4</strong>.</li>
                <li>3(x+4) = <strong>3x+12</strong>.</li>
                <li>2(x+3)+x = <strong>3x+6</strong>.</li>
            </ol>
        `,

        practice: `
            <ol>
                <li>Simplify 4x + 7x.</li>
                <li>Simplify 9a - 3a + 2.</li>
                <li>Expand 5(x+2).</li>
                <li>Expand 3(2x+4).</li>
                <li>Simplify 2x+3x-4.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>11x</li>
                <li>6a+2</li>
                <li>5x+10</li>
                <li>6x+12</li>
                <li>5x-4</li>
            </ol>
        `
    },

    // =========================================================
    // TOPIC 10: FACTORIZATION
    // =========================================================

    10: {
        title: "Factorization",

        lesson: `
            <p>Factorization is the process of writing an expression as a
            product of factors.</p>

            <p>A common factor can be taken outside brackets.</p>

            <p>Quadratic expressions can often be factorised by finding two
            numbers whose product and sum satisfy the expression.</p>

            <p>The difference of two squares is:</p>

            <p><strong>a²-b² = (a-b)(a+b)</strong>.</p>
        `,

        examples: `
            <ol>
                <li>6x+9 = <strong>3(2x+3)</strong>.</li>
                <li>x²+5x+6 = <strong>(x+2)(x+3)</strong>.</li>
                <li>x²-9 = <strong>(x-3)(x+3)</strong>.</li>
            </ol>
        `,

        practice: `
            <ol>
                <li>Factorise 8x+12.</li>
                <li>Factorise x²+7x+12.</li>
                <li>Factorise x²-16.</li>
                <li>Factorise 3x²+6x.</li>
                <li>Factorise x²+9x+20.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>4(2x+3)</li>
                <li>(x+3)(x+4)</li>
                <li>(x-4)(x+4)</li>
                <li>3x(x+2)</li>
                <li>(x+4)(x+5)</li>
            </ol>
        `
    },

    // =========================================================
    // TOPIC 11: LINEAR EQUATIONS
    // =========================================================

    11: {
        title: "Linear Equations",

        lesson: `
            <p>A linear equation is an equation in which the highest power
            of the variable is 1.</p>

            <p>The aim is to isolate the unknown variable.</p>

            <p>Whatever operation is performed on one side of an equation
            must also be performed on the other side.</p>
        `,

        examples: `
            <ol>
                <li>
                    x+5=12<br>
                    x=12-5=<strong>7</strong>
                </li>

                <li>
                    3x=18<br>
                    x=<strong>6</strong>
                </li>

                <li>
                    2x+4=14<br>
                    2x=10<br>
                    x=<strong>5</strong>
                </li>
            </ol>
        `,

        practice: `
            <ol>
                <li>x+8=15</li>
                <li>2x=20</li>
                <li>3x+5=17</li>
                <li>5x-4=21</li>
                <li>4x+8=28</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>x=7</li>
                <li>x=10</li>
                <li>x=4</li>
                <li>x=5</li>
                <li>x=5</li>
            </ol>
        `
    },

    // =========================================================
    // TOPIC 12: CHANGE OF SUBJECT OF FORMULA
    // =========================================================

    12: {
        title: "Change of Subject of Formula",

        lesson: `
            <p>Changing the subject of a formula means rearranging an
            equation so that a different variable is alone on one side.</p>

            <p>Use inverse operations carefully while maintaining equality.</p>
        `,

        examples: `
            <ol>
                <li>
                    y=3x+2<br>
                    y-2=3x<br>
                    x=<strong>(y-2)/3</strong>
                </li>

                <li>
                    A=πr²<br>
                    r²=A/π<br>
                    r=<strong>√(A/π)</strong>
                </li>
            </ol>
        `,

        practice: `
            <ol>
                <li>Make x the subject: y=2x+5.</li>
                <li>Make a the subject: v=u+at.</li>
                <li>Make r the subject: A=πr².</li>
                <li>Make h the subject: V=lwh.</li>
                <li>Make x the subject: y=(x+3)/2.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>x=(y-5)/2</li>
                <li>a=(v-u)/t</li>
                <li>r=√(A/π)</li>
                <li>h=V/(lw)</li>
                <li>x=2y-3</li>
            </ol>
        `
    },

    // =========================================================
    // TOPIC 13: SIMULTANEOUS EQUATIONS
    // =========================================================

    13: {
        title: "Simultaneous Equations",

        lesson: `
            <p>Simultaneous equations are two or more equations involving
            the same unknowns.</p>

            <p>They can be solved using substitution or elimination.</p>
        `,

        examples: `
            <p>Solve:</p>

            <p>x+y=7</p>
            <p>x-y=1</p>

            <p>Add the equations:</p>

            <p>2x=8</p>
            <p>x=4</p>

            <p>Therefore y=3.</p>
        `,

        practice: `
            <ol>
                <li>x+y=10, x-y=2.</li>
                <li>x+y=12, x-y=4.</li>
                <li>2x+y=9, x+y=5.</li>
                <li>x+2y=8, x-y=2.</li>
                <li>3x+y=11, x+y=5.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>x=6, y=4</li>
                <li>x=8, y=4</li>
                <li>x=4, y=1</li>
                <li>x=4, y=2</li>
                <li>x=3, y=2</li>
            </ol>
        `
    },

    // =========================================================
    // TOPIC 14: QUADRATIC EQUATIONS
    // =========================================================

    14: {
        title: "Quadratic Equations",

        lesson: `
            <p>A quadratic equation has the general form:</p>

            <p><strong>ax²+bx+c=0</strong></p>

            <p>Quadratic equations can be solved by factorization,
            completing the square or the quadratic formula.</p>

            <p>The quadratic formula is:</p>

            <p>
            x = (-b ± √(b²-4ac))/(2a)
            </p>
        `,

        examples: `
            <p>Solve x²+5x+6=0.</p>

            <p>(x+2)(x+3)=0</p>

            <p>Therefore:</p>

            <p><strong>x=-2 or x=-3</strong>.</p>
        `,

        practice: `
            <ol>
                <li>Solve x²+5x+6=0.</li>
                <li>Solve x²-5x+6=0.</li>
                <li>Solve x²-9=0.</li>
                <li>Solve x²+7x+12=0.</li>
                <li>Solve x²-4x+3=0.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>x=-2,-3</li>
                <li>x=2,3</li>
                <li>x=±3</li>
                <li>x=-3,-4</li>
                <li>x=1,3</li>
            </ol>
        `
    },

    // =========================================================
    // TOPIC 15: VARIATION
    // =========================================================

    15: {
        title: "Variation",

        lesson: `
            <p>Variation describes how one quantity changes in relation
            to another.</p>

            <p>In direct variation, y ∝ x, so y=kx.</p>

            <p>In inverse variation, y ∝ 1/x, so y=k/x.</p>

            <p>The constant k is called the constant of variation.</p>
        `,

        examples: `
            <ol>
                <li>If y∝x and y=12 when x=3, then k=4 and y=4x.</li>
                <li>If y∝1/x and y=6 when x=2, then k=12 and y=12/x.</li>
            </ol>
        `,

        practice: `
            <ol>
                <li>y varies directly as x. If y=10 when x=2, find y when x=5.</li>
                <li>y varies directly as x. If y=18 when x=6, find k.</li>
                <li>y varies inversely as x. If y=8 when x=3, find k.</li>
                <li>Using y=24/x, find y when x=6.</li>
                <li>If y=5x, find y when x=7.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>25</li>
                <li>3</li>
                <li>24</li>
                <li>4</li>
                <li>35</li>
            </ol>
        `
    },

    // =========================================================
    // TOPIC 16: SEQUENCE AND SERIES
    // =========================================================

    16: {
        title: "Sequence and Series",

        lesson: `
            <p>A sequence is an ordered list of numbers following a
            particular pattern.</p>

            <p>An arithmetic sequence has a common difference.</p>

            <p>The nth term of an arithmetic sequence is:</p>

            <p><strong>Tₙ=a+(n-1)d</strong></p>

            <p>A series is the sum of the terms of a sequence.</p>
        `,

        examples: `
            <p>For 3, 7, 11, 15,...</p>

            <p>a=3 and d=4.</p>

            <p>Tₙ=3+(n-1)4</p>

            <p>= <strong>4n-1</strong>.</p>
        `,

        practice: `
            <ol>
                <li>Find the next term: 2,5,8,11.</li>
                <li>Find the common difference of 4,9,14,19.</li>
                <li>Find the nth term of 3,6,9,12.</li>
                <li>Find the 10th term of 2,5,8,...</li>
                <li>Find the 5th term of 7,11,15,...</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>14</li>
                <li>5</li>
                <li>3n</li>
                <li>29</li>
                <li>23</li>
            </ol>
        `
    },

    // =========================================================
    // TOPIC 17: BINARY OPERATIONS
    // =========================================================

    17: {
        title: "Binary Operations",

        lesson: `
            <p>A binary operation combines two elements of a set to
            produce another element.</p>

            <p>A binary operation may be represented by a special symbol,
            such as *.</p>

            <p>For example, if a*b=a+b+ab, values can be substituted into
            the rule to evaluate the operation.</p>
        `,

        examples: `
            <p>If a*b=a+b+ab:</p>

            <p>2*3 = 2+3+(2×3)</p>

            <p>= <strong>11</strong>.</p>
        `,

        practice: `
            <ol>
                <li>If a*b=a+b, find 3*4.</li>
                <li>If a*b=a+b+ab, find 2*3.</li>
                <li>If a*b=ab, find 5*6.</li>
                <li>If a*b=a-b, find 8*3.</li>
                <li>If a*b=2a+b, find 4*5.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>7</li>
                <li>11</li>
                <li>30</li>
                <li>5</li>
                <li>13</li>
            </ol>
        `
    },

    // =========================================================
    // TOPIC 18: MODULAR ARITHMETIC
    // =========================================================

    18: {
        title: "Modular Arithmetic",

        lesson: `
            <p>Modular arithmetic deals with remainders after division.</p>

            <p>The expression a mod n means the remainder when a is
            divided by n.</p>

            <p>For example:</p>

            <p>17 mod 5 = <strong>2</strong>.</p>

            <p>Numbers with the same remainder when divided by n are
            congruent modulo n.</p>
        `,

        examples: `
            <ol>
                <li>23 mod 4 = <strong>3</strong>.</li>
                <li>35 mod 6 = <strong>5</strong>.</li>
                <li>20 ≡ 2 (mod 6).</li>
            </ol>
        `,

        practice: `
            <ol>
                <li>17 mod 5.</li>
                <li>29 mod 6.</li>
                <li>40 mod 7.</li>
                <li>25 mod 4.</li>
                <li>31 mod 10.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>2</li>
                <li>5</li>
                <li>5</li>
                <li>1</li>
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
            <p>Plane geometry deals with flat two-dimensional figures.</p>

            <p>Important concepts include points, lines, angles, triangles,
            quadrilaterals, polygons and circles.</p>

            <p>The sum of angles in a triangle is 180°.</p>

            <p>The sum of angles in a quadrilateral is 360°.</p>
        `,

        examples: `
            <p>If two angles of a triangle are 60° and 70°:</p>

            <p>Third angle = 180° - 60° - 70°</p>

            <p>= <strong>50°</strong>.</p>
        `,

        practice: `
            <ol>
                <li>Find the third angle of a triangle with angles 50° and 60°.</li>
                <li>Find the fourth angle of a quadrilateral with angles 80°,90°,100°.</li>
                <li>What is the sum of angles in a triangle?</li>
                <li>What is the sum of angles in a quadrilateral?</li>
                <li>How many dimensions does a plane figure have?</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>70°</li>
                <li>90°</li>
                <li>180°</li>
                <li>360°</li>
                <li>Two</li>
            </ol>
        `
    },

    // =========================================================
    // TOPIC 20: ANGLES AND LINES
    // =========================================================

    20: {
        title: "Angles and Lines",

        lesson: `
            <p>Angles are measured in degrees.</p>

            <p>An acute angle is less than 90°. A right angle is 90°. An
            obtuse angle is greater than 90° but less than 180°.</p>

            <p>Angles on a straight line add up to 180°.</p>

            <p>Angles around a point add up to 360°.</p>

            <p>Parallel lines produce corresponding, alternate and
            co-interior angle relationships.</p>
        `,

        examples: `
            <ol>
                <li>Angles on a straight line: 120° + x = 180°, so x=60°.</li>
                <li>Angles around a point total 360°.</li>
            </ol>
        `,

        practice: `
            <ol>
                <li>Find x if x+70°=180°.</li>
                <li>Find the complement of 35°.</li>
                <li>Find the supplement of 120°.</li>
                <li>Find the angle around a point if the other angles are 90°,110°,80°.</li>
                <li>What is the size of a right angle?</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>110°</li>
                <li>55°</li>
                <li>60°</li>
                <li>80°</li>
                <li>90°</li>
            </ol>
        `
    },

    // =========================================================
    // TOPIC 21: TRIANGLES
    // =========================================================

    21: {
        title: "Triangles",

        lesson: `
            <p>A triangle is a polygon with three sides and three angles.</p>

            <p>Triangles may be classified by their sides as equilateral,
            isosceles or scalene.</p>

            <p>They may also be classified by their angles as acute,
            right-angled or obtuse.</p>

            <p>The sum of the interior angles of every triangle is 180°.</p>
        `,

        examples: `
            <p>An isosceles triangle has two equal angles of 50° each.</p>

            <p>The third angle is:</p>

            <p>180° - 50° - 50° = <strong>80°</strong>.</p>
        `,

        practice: `
            <ol>
                <li>Find the third angle if two angles are 40° and 60°.</li>
                <li>Find the equal angles of an isosceles triangle if the third angle is 80°.</li>
                <li>What is each angle of an equilateral triangle?</li>
                <li>How many sides does a triangle have?</li>
                <li>What is the sum of angles in a triangle?</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>80°</li>
                <li>50° each</li>
                <li>60°</li>
                <li>3</li>
                <li>180°</li>
            </ol>
        `
    },

    // =========================================================
    // TOPIC 22: QUADRILATERALS AND POLYGONS
    // =========================================================

    22: {
        title: "Quadrilaterals and Polygons",

        lesson: `
            <p>A quadrilateral is a four-sided polygon.</p>

            <p>Examples include squares, rectangles, parallelograms,
            rhombuses and trapeziums.</p>

            <p>The sum of the interior angles of a quadrilateral is 360°.</p>

            <p>The sum of the interior angles of an n-sided polygon is:</p>

            <p><strong>(n-2) × 180°</strong>.</p>
        `,

        examples: `
            <ol>
                <li>A pentagon has angle sum (5-2)×180° = <strong>540°</strong>.</li>
                <li>A hexagon has angle sum (6-2)×180° = <strong>720°</strong>.</li>
            </ol>
        `,

        practice: `
            <ol>
                <li>Find the angle sum of a pentagon.</li>
                <li>Find the angle sum of a hexagon.</li>
                <li>Find the angle sum of an octagon.</li>
                <li>How many sides does a quadrilateral have?</li>
                <li>How many sides does a decagon have?</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>540°</li>
                <li>720°</li>
                <li>1080°</li>
                <li>4</li>
                <li>10</li>
            </ol>
        `
    },

    // =========================================================
    // TOPIC 23: CIRCLES
    // =========================================================

    23: {
        title: "Circles",

        lesson: `
            <p>A circle is a set of points at a constant distance from a
            fixed point called the centre.</p>

            <p>The distance from the centre to the circumference is the
            radius.</p>

            <p>The diameter is twice the radius.</p>

            <p>Circumference:</p>

            <p><strong>C=2πr</strong></p>

            <p>Area:</p>

            <p><strong>A=πr²</strong></p>
        `,

        examples: `
            <ol>
                <li>If r=7 cm, diameter = <strong>14 cm</strong>.</li>
                <li>Area of a circle with r=7 cm = 49π cm².</li>
                <li>Circumference with r=7 cm = 14π cm.</li>
            </ol>
        `,

        practice: `
            <ol>
                <li>Find the diameter of a circle with radius 5 cm.</li>
                <li>Find the area of a circle with radius 7 cm.</li>
                <li>Find the circumference of a circle with radius 7 cm.</li>
                <li>What is the radius if the diameter is 20 cm?</li>
                <li>State the formula for the area of a circle.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>10 cm</li>
                <li>49π cm²</li>
                <li>14π cm</li>
                <li>10 cm</li>
                <li>πr²</li>
            </ol>
        `
    },

    // =========================================================
    // TOPIC 24: MENSURATION OF PLANE SHAPES
    // =========================================================

    24: {
        title: "Mensuration of Plane Shapes",

        lesson: `
            <p>Mensuration is the measurement of geometric figures.</p>

            <p>Important formulas include:</p>

            <ul>
                <li>Rectangle: A=lw</li>
                <li>Square: A=a²</li>
                <li>Triangle: A=1/2bh</li>
                <li>Parallelogram: A=bh</li>
                <li>Trapezium: A=1/2(a+b)h</li>
            </ul>
        `,

        examples: `
            <ol>
                <li>Rectangle 8 cm by 5 cm: area = <strong>40 cm²</strong>.</li>
                <li>Triangle with base 10 cm and height 6 cm:
                area = <strong>30 cm²</strong>.</li>
                <li>Trapezium with parallel sides 8 cm and 12 cm and height
                5 cm: area = <strong>50 cm²</strong>.</li>
            </ol>
        `,

        practice: `
            <ol>
                <li>Find the area of a rectangle 10 cm by 4 cm.</li>
                <li>Find the area of a square of side 6 cm.</li>
                <li>Find the area of a triangle with base 8 cm and height 5 cm.</li>
                <li>Find the area of a parallelogram with base 7 cm and height 4 cm.</li>
                <li>Find the area of a trapezium with parallel sides 6 cm and 10 cm and height 4 cm.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>40 cm²</li>
                <li>36 cm²</li>
                <li>20 cm²</li>
                <li>28 cm²</li>
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
            <p>Solids are three-dimensional objects.</p>

            <p>Common solids include cubes, cuboids, cylinders, prisms and
            spheres.</p>

            <p>Volume measures the space occupied by a solid.</p>

            <p>For a cuboid:</p>

            <p><strong>V=lwh</strong></p>

            <p>For a cube:</p>

            <p><strong>V=a³</strong></p>

            <p>For a cylinder:</p>

            <p><strong>V=πr²h</strong></p>
        `,

        examples: `
            <ol>
                <li>A cuboid 5×4×3 cm has volume
                <strong>60 cm³</strong>.</li>
                <li>A cube of side 4 cm has volume
                <strong>64 cm³</strong>.</li>
            </ol>
        `,

        practice: `
            <ol>
                <li>Find the volume of a cuboid 6×4×3 cm.</li>
                <li>Find the volume of a cube of side 5 cm.</li>
                <li>Find the volume of a cylinder with r=3 cm and h=10 cm.</li>
                <li>What is the unit of volume of a cube measured in centimetres?</li>
                <li>State the formula for cuboid volume.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>72 cm³</li>
                <li>125 cm³</li>
                <li>90π cm³</li>
                <li>cm³</li>
                <li>lwh</li>
            </ol>
        `
    },

    // =========================================================
    // TOPIC 26: COORDINATE GEOMETRY
    // =========================================================

    26: {
        title: "Coordinate Geometry",

        lesson: `
            <p>Coordinate geometry studies points and shapes using
            coordinates.</p>

            <p>A point is written as (x,y).</p>

            <p>The x-coordinate gives the horizontal position while the
            y-coordinate gives the vertical position.</p>

            <p>The midpoint of two points is:</p>

            <p>
            ((x₁+x₂)/2, (y₁+y₂)/2)
            </p>
        `,

        examples: `
            <p>Find the midpoint of (2,4) and (6,8).</p>

            <p>
            = ((2+6)/2,(4+8)/2)
            </p>

            <p>= <strong>(4,6)</strong>.</p>
        `,

        practice: `
            <ol>
                <li>Find the midpoint of (2,4) and (6,8).</li>
                <li>What is the x-coordinate of (5,7)?</li>
                <li>What is the y-coordinate of (3,9)?</li>
                <li>Plot the point (4,2).</li>
                <li>Find the midpoint of (0,0) and (6,4).</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>(4,6)</li>
                <li>5</li>
                <li>9</li>
                <li>At x=4, y=2</li>
                <li>(3,2)</li>
            </ol>
        `
    },

    // =========================================================
    // TOPIC 27: STRAIGHT LINES AND GRAPHS
    // =========================================================

    27: {
        title: "Straight Lines and Graphs",

        lesson: `
            <p>A straight-line equation can be written as:</p>

            <p><strong>y=mx+c</strong></p>

            <p>where m is the gradient and c is the y-intercept.</p>

            <p>The gradient is:</p>

            <p><strong>m=(y₂-y₁)/(x₂-x₁)</strong>.</p>
        `,

        examples: `
            <p>For y=2x+3:</p>

            <p>Gradient = <strong>2</strong>.</p>

            <p>Y-intercept = <strong>3</strong>.</p>
        `,

        practice: `
            <ol>
                <li>Find the gradient of y=3x+2.</li>
                <li>Find the y-intercept of y=5x+4.</li>
                <li>Find y when x=2 in y=3x+1.</li>
                <li>Find y when x=5 in y=2x+4.</li>
                <li>Write the equation of a line with gradient 2 and intercept 3.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>3</li>
                <li>4</li>
                <li>7</li>
                <li>14</li>
                <li>y=2x+3</li>
            </ol>
        `
    },

    // =========================================================
    // TOPIC 28: TRIGONOMETRY
    // =========================================================

    28: {
        title: "Trigonometry",

        lesson: `
            <p>Trigonometry studies the relationship between the sides and
            angles of triangles.</p>

            <p>For a right-angled triangle:</p>

            <p><strong>sin θ = opposite/hypotenuse</strong></p>

            <p><strong>cos θ = adjacent/hypotenuse</strong></p>

            <p><strong>tan θ = opposite/adjacent</strong></p>

            <p>These are commonly remembered as SOH-CAH-TOA.</p>
        `,

        examples: `
            <ol>
                <li>
                    If opposite=3 and hypotenuse=5:
                    sin θ=3/5.
                </li>

                <li>
                    If adjacent=4 and hypotenuse=5:
                    cos θ=4/5.
                </li>

                <li>
                    If opposite=6 and adjacent=3:
                    tan θ=2.
                </li>
            </ol>
        `,

        practice: `
            <ol>
                <li>State the formula for sin θ.</li>
                <li>State the formula for cos θ.</li>
                <li>State the formula for tan θ.</li>
                <li>If opposite=4 and hypotenuse=5, find sin θ.</li>
                <li>If adjacent=3 and hypotenuse=5, find cos θ.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>Opposite/Hypotenuse</li>
                <li>Adjacent/Hypotenuse</li>
                <li>Opposite/Adjacent</li>
                <li>4/5</li>
                <li>3/5</li>
            </ol>
        `
    },

    // =========================================================
    // TOPIC 29: BEARINGS AND DISTANCES
    // =========================================================

    29: {
        title: "Bearings and Distances",

        lesson: `
            <p>A bearing is an angle measured clockwise from North.</p>

            <p>Bearings are normally written using three figures.</p>

            <p>For example, 045° represents a direction halfway between
            North and East.</p>

            <p>The bearing in the opposite direction is obtained by adding
            or subtracting 180°.</p>

            <p>Trigonometry can be used to calculate unknown distances and
            angles in bearing problems.</p>
        `,

        examples: `
            <ol>
                <li>The back bearing of 060° is 240°.</li>
                <li>The back bearing of 300° is 120°.</li>
            </ol>
        `,

        practice: `
            <ol>
                <li>Find the back bearing of 050°.</li>
                <li>Find the back bearing of 210°.</li>
                <li>What is the bearing of East?</li>
                <li>What is the bearing of South?</li>
                <li>What is the bearing of West?</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>230°</li>
                <li>030°</li>
                <li>090°</li>
                <li>180°</li>
                <li>270°</li>
            </ol>
        `
    },

    // =========================================================
    // TOPIC 30: STATISTICS
    // =========================================================

    30: {
        title: "Statistics",

        lesson: `
            <p>Statistics is the study of collecting, organising,
            presenting and interpreting data.</p>

            <p>Data may be qualitative or quantitative.</p>

            <p>Data can be presented using tables, bar charts, pie charts,
            histograms and graphs.</p>

            <p>Frequency tells us how many times a value occurs.</p>
        `,

        examples: `
            <p>Data: 2,3,3,4,5</p>

            <p>The frequency of 3 is <strong>2</strong>.</p>

            <p>The data contain 5 observations.</p>
        `,

        practice: `
            <ol>
                <li>Find the frequency of 4 in 2,4,4,5,6.</li>
                <li>How many observations are in 3,5,7,8?</li>
                <li>What is data?</li>
                <li>Name one method of presenting data.</li>
                <li>What does frequency mean?</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>2</li>
                <li>4</li>
                <li>Information collected for analysis</li>
                <li>Bar chart</li>
                <li>Number of times a value occurs</li>
            </ol>
        `
    },

    // =========================================================
    // TOPIC 31: MEASURES OF CENTRAL TENDENCY
    // =========================================================

    31: {
        title: "Measures of Central Tendency",

        lesson: `
            <p>The three main measures of central tendency are mean,
            median and mode.</p>

            <p>The mean is found by dividing the sum of observations by the
            number of observations.</p>

            <p>The median is the middle value when data are arranged in
            order.</p>

            <p>The mode is the value that occurs most frequently.</p>
        `,

        examples: `
            <p>For 2,4,4,6,9:</p>

            <p>Mean = 25/5 = <strong>5</strong>.</p>

            <p>Median = <strong>4</strong>.</p>

            <p>Mode = <strong>4</strong>.</p>
        `,

        practice: `
            <ol>
                <li>Find the mean of 2,4,6,8.</li>
                <li>Find the median of 1,3,5,7,9.</li>
                <li>Find the mode of 2,3,3,4,5.</li>
                <li>Find the mean of 5,5,10.</li>
                <li>Find the median of 2,4,6,8.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>5</li>
                <li>5</li>
                <li>3</li>
                <li>20/3</li>
                <li>5</li>
            </ol>
        `
    },

    // =========================================================
    // TOPIC 32: PROBABILITY
    // =========================================================

    32: {
        title: "Probability",

        lesson: `
            <p>Probability measures how likely an event is to occur.</p>

            <p>For equally likely outcomes:</p>

            <p>
            <strong>
            P(event) = favourable outcomes / total outcomes
            </strong>
            </p>

            <p>Probability lies between 0 and 1.</p>

            <p>An impossible event has probability 0 and a certain event
            has probability 1.</p>
        `,

        examples: `
            <p>A fair die has six faces.</p>

            <p>Probability of rolling a 3 = <strong>1/6</strong>.</p>

            <p>Probability of rolling an even number =
            3/6 = <strong>1/2</strong>.</p>
        `,

        practice: `
            <ol>
                <li>What is the probability of getting a head when tossing a fair coin?</li>
                <li>What is the probability of rolling a 6 on a fair die?</li>
                <li>What is the probability of rolling an even number?</li>
                <li>What is the probability of an impossible event?</li>
                <li>What is the probability of a certain event?</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>1/2</li>
                <li>1/6</li>
                <li>1/2</li>
                <li>0</li>
                <li>1</li>
            </ol>
        `
    },

    // =========================================================
    // TOPIC 33: PERMUTATION
    // =========================================================

    33: {
        title: "Permutation",

        lesson: `
            <p>A permutation is an arrangement of objects where order
            matters.</p>

            <p>The number of arrangements of n different objects is:</p>

            <p><strong>n!</strong></p>

            <p>where:</p>

            <p>n! = n×(n-1)×(n-2)...×1.</p>

            <p>For example, 4! = 4×3×2×1 = 24.</p>
        `,

        examples: `
            <ol>
                <li>3! = <strong>6</strong>.</li>
                <li>5! = <strong>120</strong>.</li>
                <li>The number of ways of arranging 4 different books is
                <strong>24</strong>.</li>
            </ol>
        `,

        practice: `
            <ol>
                <li>Find 4!.</li>
                <li>Find 5!.</li>
                <li>Find 6!.</li>
                <li>How many ways can 3 different objects be arranged?</li>
                <li>How many ways can 4 different students stand in a row?</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>24</li>
                <li>120</li>
                <li>720</li>
                <li>6</li>
                <li>24</li>
            </ol>
        `
    },

    // =========================================================
    // TOPIC 34: COMBINATION
    // =========================================================

    34: {
        title: "Combination",

        lesson: `
            <p>A combination is a selection of objects where order does
            not matter.</p>

            <p>The formula for selecting r objects from n objects is:</p>

            <p><strong>nCr = n!/[r!(n-r)!]</strong></p>

            <p>Unlike permutation, changing the order does not produce a
            different combination.</p>
        `,

        examples: `
            <p>Find 5C2.</p>

            <p>
            5C2 = 5!/(2!3!)
            </p>

            <p>= <strong>10</strong>.</p>
        `,

        practice: `
            <ol>
                <li>Find 4C2.</li>
                <li>Find 5C2.</li>
                <li>Find 6C2.</li>
                <li>Find 5C3.</li>
                <li>Find 6C3.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>6</li>
                <li>10</li>
                <li>15</li>
                <li>10</li>
                <li>20</li>
            </ol>
        `
    },

    // =========================================================
    // TOPIC 35: INTRODUCTION TO MATRICES
    // =========================================================

    35: {
        title: "Introduction to Matrices",

        lesson: `
            <p>A matrix is a rectangular arrangement of numbers or
            elements in rows and columns.</p>

            <p>The dimensions of a matrix are written as rows × columns.</p>

            <p>For example:</p>

            <p>
            A =
            [ 1  2 ]<br>
            [ 3  4 ]
            </p>

            <p>This is a 2×2 matrix.</p>

            <p>Matrices can be added or subtracted when they have the same
            dimensions.</p>
        `,

        examples: `
            <p>
            A =
            [1 2]<br>
            [3 4]
            </p>

            <p>
            B =
            [5 6]<br>
            [7 8]
            </p>

            <p>
            A+B =
            [6 8]<br>
            [10 12]
            </p>

            <p>The determinant of a 2×2 matrix</p>

            <p>
            [a b]<br>
            [c d]
            </p>

            <p>is <strong>ad-bc</strong>.</p>
        `,

        practice: `
            <ol>
                <li>What are the dimensions of a matrix with 3 rows and 2 columns?</li>
                <li>Add [1 2] and [3 4].</li>
                <li>Find the determinant of [2 3; 4 5].</li>
                <li>How many elements are in a 2×3 matrix?</li>
                <li>Can matrices of different dimensions normally be added?</li>
            </ol>
        `,

        answers: `
            <ol>
                <li>3×2</li>
                <li>[4 6]</li>
                <li>-2</li>
                <li>6</li>
                <li>No</li>
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

    `;
}
