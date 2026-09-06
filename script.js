const topics = {

1: {
title: "Number Bases",
lesson: `
<p>A number base is a system used to represent numbers. The decimal system has base 10 and uses the digits 0 to 9. Other commonly used bases include binary (base 2), octal (base 8) and hexadecimal (base 16).</p>

<h4>Place Value in a Base</h4>
<p>In base b, the place values are powers of b.</p>
<p>For example:</p>
<p><strong>231₄ = 2×4² + 3×4¹ + 1×4⁰</strong></p>

<h4>Conversion to Base 10</h4>
<p>Multiply each digit by its corresponding power of the base and add the results.</p>

<h4>Conversion from Base 10</h4>
<p>Repeatedly divide the decimal number by the new base and read the remainders from bottom to top.</p>

<h4>Binary Numbers</h4>
<p>Binary uses only 0 and 1. It is important in computer science and digital technology.</p>
`,
examples: `
<p><strong>Example 1:</strong> Convert 1011₂ to base 10.</p>
<p>= 1×2³ + 0×2² + 1×2¹ + 1×2⁰</p>
<p>= 8 + 0 + 2 + 1 = <strong>11₁₀</strong></p>

<p><strong>Example 2:</strong> Convert 25₁₀ to base 2.</p>
<p>25 ÷ 2 = 12 remainder 1</p>
<p>12 ÷ 2 = 6 remainder 0</p>
<p>6 ÷ 2 = 3 remainder 0</p>
<p>3 ÷ 2 = 1 remainder 1</p>
<p>1 ÷ 2 = 0 remainder 1</p>
<p>Reading upward gives <strong>11001₂</strong>.</p>
`,
practice: `
<ol>
<li>Convert 1101₂ to base 10.</li>
<li>Convert 18₁₀ to base 2.</li>
<li>Convert 132₄ to base 10.</li>
<li>Convert 45₁₀ to base 5.</li>
<li>Add 101₂ and 11₂.</li>
</ol>
`,
answers: `
<ol>
<li>13₁₀</li>
<li>10010₂</li>
<li>30₁₀</li>
<li>140₅</li>
<li>1000₂</li>
</ol>
`
},

2: {
title: "Fractions and Decimals",
lesson: `
<p>A fraction represents part of a whole and is written as <strong>a/b</strong>, where a is the numerator and b is the denominator.</p>

<h4>Types of Fractions</h4>
<p>Proper fractions have numerator smaller than denominator. Improper fractions have numerator greater than or equal to denominator. Mixed numbers contain a whole number and a fraction.</p>

<h4>Operations</h4>
<p>To add or subtract fractions, use a common denominator. To multiply fractions, multiply numerators and denominators. To divide, multiply by the reciprocal of the second fraction.</p>

<h4>Decimals</h4>
<p>Decimals are another way of representing fractions. For example, 0.5 = 1/2 and 0.25 = 1/4.</p>
`,
examples: `
<p><strong>Example 1:</strong> 1/3 + 1/6</p>
<p>= 2/6 + 1/6 = <strong>1/2</strong></p>

<p><strong>Example 2:</strong> 3/4 × 2/5</p>
<p>= 6/20 = <strong>3/10</strong></p>

<p><strong>Example 3:</strong> Convert 0.375 to a fraction.</p>
<p>0.375 = 375/1000 = <strong>3/8</strong></p>
`,
practice: `
<ol>
<li>Calculate 2/5 + 1/10.</li>
<li>Calculate 7/8 − 1/4.</li>
<li>Calculate 3/5 × 10/9.</li>
<li>Calculate 4/7 ÷ 2/3.</li>
<li>Convert 0.625 to a fraction.</li>
</ol>
`,
answers: `
<ol>
<li>1/2</li>
<li>5/8</li>
<li>2/3</li>
<li>6/7</li>
<li>5/8</li>
</ol>
`
},

3: {
title: "Approximation and Estimation",
lesson: `
<p>Approximation means finding a value that is close to the exact value. It is useful when an exact answer is unnecessary or difficult to calculate.</p>

<h4>Decimal Places</h4>
<p>To round to decimal places, look at the digit immediately after the required place. If it is 5 or more, increase the required digit by 1.</p>

<h4>Significant Figures</h4>
<p>Significant figures begin with the first non-zero digit.</p>

<h4>Estimation</h4>
<p>Numbers may be rounded to convenient values before calculation. This helps us check whether an answer is reasonable.</p>
`,
examples: `
<p><strong>Example 1:</strong> Round 37.684 to 2 decimal places.</p>
<p>The third decimal digit is 4, so the answer is <strong>37.68</strong>.</p>

<p><strong>Example 2:</strong> Round 0.006784 to 2 significant figures.</p>
<p>The first two significant digits are 6 and 7. The next digit is 8, so the answer is <strong>0.0068</strong>.</p>

<p><strong>Example 3:</strong> Estimate 49.8 × 20.2.</p>
<p>≈ 50 × 20 = <strong>1000</strong>.</p>
`,
practice: `
<ol>
<li>Round 56.738 to 2 decimal places.</li>
<li>Round 0.004827 to 2 significant figures.</li>
<li>Round 7,846 to the nearest hundred.</li>
<li>Estimate 39.7 × 21.1.</li>
<li>Estimate 598 ÷ 19.8.</li>
</ol>
`,
answers: `
<ol>
<li>56.74</li>
<li>0.0048</li>
<li>7,800</li>
<li>About 800</li>
<li>About 30</li>
</ol>
`
},

4: {
title: "Standard Form",
lesson: `
<p>Standard form is used to write very large or very small numbers conveniently.</p>

<p>A number in standard form is written as:</p>
<p><strong>a × 10ⁿ</strong></p>
<p>where 1 ≤ a &lt; 10 and n is an integer.</p>

<h4>Large Numbers</h4>
<p>Move the decimal point to the left. The number of movements gives a positive power of 10.</p>

<h4>Small Numbers</h4>
<p>Move the decimal point to the right. The number of movements gives a negative power of 10.</p>
`,
examples: `
<p><strong>Example 1:</strong> Write 4500000 in standard form.</p>
<p>= <strong>4.5 × 10⁶</strong></p>

<p><strong>Example 2:</strong> Write 0.00032 in standard form.</p>
<p>= <strong>3.2 × 10⁻⁴</strong></p>

<p><strong>Example 3:</strong> Calculate (3 × 10⁴)(2 × 10³).</p>
<p>= 6 × 10⁷.</p>
`,
practice: `
<ol>
<li>Write 720000 in standard form.</li>
<li>Write 0.000056 in standard form.</li>
<li>Write 6.4 × 10⁵ as an ordinary number.</li>
<li>Calculate (2 × 10³)(5 × 10²).</li>
<li>Calculate (8 × 10⁶) ÷ (2 × 10²).</li>
</ol>
`,
answers: `
<ol>
<li>7.2 × 10⁵</li>
<li>5.6 × 10⁻⁵</li>
<li>640000</li>
<li>1 × 10⁶</li>
<li>4 × 10⁴</li>
</ol>
`
},

5: {
title: "Logarithms",
lesson: `
<p>A logarithm is the inverse operation of exponentiation.</p>

<p>If <strong>aˣ = N</strong>, then <strong>logₐN = x</strong>.</p>

<h4>Laws of Logarithms</h4>
<p>logₐ(MN) = logₐM + logₐN</p>
<p>logₐ(M/N) = logₐM − logₐN</p>
<p>logₐ(Mⁿ) = n logₐM</p>

<p>The base must be positive and not equal to 1, and the argument must be positive.</p>
`,
examples: `
<p><strong>Example 1:</strong> Evaluate log₂32.</p>
<p>Since 2⁵ = 32, log₂32 = <strong>5</strong>.</p>

<p><strong>Example 2:</strong> Simplify log₃9 + log₃27.</p>
<p>= log₃(9×27) = log₃243 = <strong>5</strong>.</p>

<p><strong>Example 3:</strong> Solve log₂x = 4.</p>
<p>x = 2⁴ = <strong>16</strong>.</p>
`,
practice: `
<ol>
<li>Evaluate log₂16.</li>
<li>Evaluate log₅125.</li>
<li>Simplify log₂8 + log₂4.</li>
<li>Solve log₃x = 4.</li>
<li>Solve log₁₀x = 2.</li>
</ol>
`,
answers: `
<ol>
<li>4</li>
<li>3</li>
<li>5</li>
<li>81</li>
<li>100</li>
</ol>
`
},

6: {
title: "Indices",
lesson: `
<p>Indices, or powers, show repeated multiplication.</p>

<h4>Laws of Indices</h4>
<p>aᵐ × aⁿ = aᵐ⁺ⁿ</p>
<p>aᵐ ÷ aⁿ = aᵐ⁻ⁿ</p>
<p>(aᵐ)ⁿ = aᵐⁿ</p>
<p>a⁰ = 1</p>
<p>a⁻ⁿ = 1/aⁿ</p>
<p>a¹⁄ⁿ = ⁿ√a</p>

<h4>Indicial Equations</h4>
<p>When solving equations involving indices, express both sides using the same base whenever possible.</p>
`,
examples: `
<p><strong>Example 1:</strong> Simplify 2³ × 2⁴.</p>
<p>= 2⁷ = <strong>128</strong>.</p>

<p><strong>Example 2:</strong> Simplify x⁸ ÷ x³.</p>
<p>= <strong>x⁵</strong>.</p>

<p><strong>Example 3:</strong> Solve 2ˣ = 32.</p>
<p>32 = 2⁵, therefore <strong>x = 5</strong>.</p>

<p><strong>Example 4:</strong> Solve 3²ˣ = 81.</p>
<p>81 = 3⁴, so 2x = 4 and <strong>x = 2</strong>.</p>
`,
practice: `
<ol>
<li>Simplify 5² × 5³.</li>
<li>Simplify a⁹ ÷ a⁴.</li>
<li>Simplify (x²)⁴.</li>
<li>Solve 2ˣ = 64.</li>
<li>Solve 5ˣ = 625.</li>
</ol>
`,
answers: `
<ol>
<li>5⁵</li>
<li>a⁵</li>
<li>x⁸</li>
<li>x = 6</li>
<li>x = 4</li>
</ol>
`
},

7: {
title: "Surds",
lesson: `
<p>A surd is an irrational root that cannot be expressed exactly as a rational number.</p>

<p>Examples include √2, √3 and √5.</p>

<h4>Simplifying Surds</h4>
<p>Look for perfect square factors.</p>

<h4>Operations</h4>
<p>Like surds can be added or subtracted. Surds can also be multiplied and divided.</p>
`,
examples: `
<p><strong>Example 1:</strong> Simplify √50.</p>
<p>√50 = √(25×2) = <strong>5√2</strong>.</p>

<p><strong>Example 2:</strong> Simplify 3√2 + 5√2.</p>
<p>= <strong>8√2</strong>.</p>

<p><strong>Example 3:</strong> √3 × √12 = √36 = <strong>6</strong>.</p>
`,
practice: `
<ol>
<li>Simplify √72.</li>
<li>Simplify √98.</li>
<li>Simplify 4√3 + 2√3.</li>
<li>Calculate √5 × √20.</li>
<li>Simplify √48 ÷ √3.</li>
</ol>
`,
answers: `
<ol>
<li>6√2</li>
<li>7√2</li>
<li>6√3</li>
<li>10</li>
<li>4</li>
</ol>
`
},

8: {
title: "Sets",
lesson: `
<p>A set is a well-defined collection of objects called elements.</p>

<h4>Notation</h4>
<p>Sets are usually represented by capital letters. For example, A = {1,2,3,4}.</p>

<h4>Important Concepts</h4>
<p>Universal set, empty set, subset, union and intersection are important ideas in set theory.</p>

<p>A ∪ B means elements in A or B.</p>
<p>A ∩ B means elements common to A and B.</p>
`,
examples: `
<p><strong>Example:</strong> Let A={1,2,3,4} and B={3,4,5,6}.</p>
<p>A ∪ B = <strong>{1,2,3,4,5,6}</strong></p>
<p>A ∩ B = <strong>{3,4}</strong></p>
`,
practice: `
<ol>
<li>Write the elements of the set of even numbers less than 10.</li>
<li>Find the union of {1,2,3} and {3,4,5}.</li>
<li>Find the intersection of {2,4,6} and {1,2,4}.</li>
<li>How many elements are in {a,b,c,d}?</li>
<li>State whether {1,2} is a subset of {1,2,3}.</li>
</ol>
`,
answers: `
<ol>
<li>{2,4,6,8}</li>
<li>{1,2,3,4,5}</li>
<li>{2,4}</li>
<li>4</li>
<li>Yes</li>
</ol>
`
},

9: {
title: "Algebraic Expressions",
lesson: `
<p>An algebraic expression contains numbers, variables and mathematical operations.</p>

<p>Terms are separated by plus or minus signs. Like terms have the same variables raised to the same powers.</p>

<h4>Simplification</h4>
<p>Collect like terms by adding or subtracting their coefficients.</p>

<h4>Expansion</h4>
<p>Use the distributive law to remove brackets.</p>
`,
examples: `
<p><strong>Example 1:</strong> Simplify 3x + 5x − 2.</p>
<p>= <strong>8x − 2</strong>.</p>

<p><strong>Example 2:</strong> Expand 4(x+3).</p>
<p>= <strong>4x + 12</strong>.</p>

<p><strong>Example 3:</strong> Simplify 2a + 3b − a + 5b.</p>
<p>= <strong>a + 8b</strong>.</p>
`,
practice: `
<ol>
<li>Simplify 7x + 2x − 4.</li>
<li>Expand 3(x+5).</li>
<li>Expand 2(3x−4).</li>
<li>Simplify 5a+2b−3a+b.</li>
<li>Expand x(x+4).</li>
</ol>
`,
answers: `
<ol>
<li>9x−4</li>
<li>3x+15</li>
<li>6x−8</li>
<li>2a+3b</li>
<li>x²+4x</li>
</ol>
`
},

10: {
title: "Factorization",
lesson: `
<p>Factorization is the process of writing an expression as a product of its factors.</p>

<h4>Common Factor</h4>
<p>Find the greatest common factor of all terms.</p>

<h4>Quadratic Factorization</h4>
<p>For expressions such as x²+bx+c, find two numbers whose product is c and whose sum is b.</p>
`,
examples: `
<p><strong>Example 1:</strong> Factorize 6x+12.</p>
<p>= <strong>6(x+2)</strong>.</p>

<p><strong>Example 2:</strong> Factorize x²+5x+6.</p>
<p>Numbers are 2 and 3.</p>
<p>= <strong>(x+2)(x+3)</strong>.</p>

<p><strong>Example 3:</strong> Factorize x²−9.</p>
<p>= <strong>(x−3)(x+3)</strong>.</p>
`,
practice: `
<ol>
<li>Factorize 8x+16.</li>
<li>Factorize 3x²+6x.</li>
<li>Factorize x²+7x+12.</li>
<li>Factorize x²−25.</li>
<li>Factorize x²−x−6.</li>
</ol>
`,
answers: `
<ol>
<li>8(x+2)</li>
<li>3x(x+2)</li>
<li>(x+3)(x+4)</li>
<li>(x−5)(x+5)</li>
<li>(x−3)(x+2)</li>
</ol>
`
},

11: {
title: "Linear Equations",
lesson: `
<p>A linear equation is an equation in which the highest power of the variable is 1.</p>

<p>The aim is to isolate the unknown variable on one side of the equation.</p>

<p>Whatever operation is performed on one side must also be performed on the other side.</p>
`,
examples: `
<p><strong>Example 1:</strong> Solve 3x+5=20.</p>
<p>3x=15, therefore <strong>x=5</strong>.</p>

<p><strong>Example 2:</strong> Solve 5x−7=18.</p>
<p>5x=25, therefore <strong>x=5</strong>.</p>

<p><strong>Example 3:</strong> Solve 2(x+3)=14.</p>
<p>x+3=7, therefore <strong>x=4</strong>.</p>
`,
practice: `
<ol>
<li>Solve 2x+4=14.</li>
<li>Solve 4x−3=17.</li>
<li>Solve 5x+10=35.</li>
<li>Solve 3(x+2)=18.</li>
<li>Solve 2x−5=11.</li>
</ol>
`,
answers: `
<ol>
<li>x=5</li>
<li>x=5</li>
<li>x=5</li>
<li>x=4</li>
<li>x=8</li>
</ol>
`
},

12: {
title: "Change of Subject of Formula",
lesson: `
<p>Changing the subject of a formula means rearranging an equation so that a different variable is alone on one side.</p>

<p>The same algebraic operations used in solving equations are used here.</p>

<p>Care must be taken when the required subject occurs in more than one term.</p>
`,
examples: `
<p><strong>Example 1:</strong> Make x the subject of y=x+5.</p>
<p><strong>x=y−5</strong>.</p>

<p><strong>Example 2:</strong> Make r the subject of A=πr².</p>
<p>r²=A/π, therefore <strong>r=√(A/π)</strong>.</p>

<p><strong>Example 3:</strong> Make v the subject of s=ut+½vt².</p>
<p>v=(2(s−ut))/t².</p>
`,
practice: `
<ol>
<li>Make x the subject of y=3x+2.</li>
<li>Make a the subject of v=u+at.</li>
<li>Make r the subject of C=2πr.</li>
<li>Make h the subject of A=½bh.</li>
<li>Make x the subject of y=(x+4)/3.</li>
</ol>
`,
answers: `
<ol>
<li>x=(y−2)/3</li>
<li>a=(v−u)/t</li>
<li>r=C/(2π)</li>
<li>h=2A/b</li>
<li>x=3y−4</li>
</ol>
`
},

13: {
title: "Simultaneous Equations",
lesson: `
<p>Simultaneous equations are two or more equations involving the same unknowns. The solution must satisfy all equations simultaneously.</p>

<h4>Methods</h4>
<p>The main methods are elimination, substitution and graphical methods.</p>

<p>In the elimination method, one variable is eliminated by adding or subtracting suitable multiples of the equations.</p>
`,
examples: `
<p><strong>Example:</strong></p>
<p>x+y=10</p>
<p>x−y=2</p>
<p>Add the equations: 2x=12.</
