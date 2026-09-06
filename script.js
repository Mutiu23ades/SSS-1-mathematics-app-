const topics = {

1: {
title: "Number Bases",
lesson: `
<p>A number base is a system used for writing and representing numbers. The decimal number system that we normally use is base 10 because it uses ten digits: 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9.</p>

<h4>Common Number Bases</h4>
<ul>
<li>Base 2: Binary — digits 0 and 1.</li>
<li>Base 5: digits 0 to 4.</li>
<li>Base 8: Octal — digits 0 to 7.</li>
<li>Base 10: Decimal — digits 0 to 9.</li>
<li>Base 16: Hexadecimal — digits 0 to 9 and A to F.</li>
</ul>

<h4>Place Value</h4>
<p>In a base b, the place values are powers of b.</p>
<p>For example:</p>
<p><strong>231<sub>4</sub> = 2 × 4² + 3 × 4¹ + 1 × 4⁰</strong></p>
<p>= 32 + 12 + 1 = <strong>45<sub>10</sub></strong>.</p>

<h4>Conversion to Base 10</h4>
<p>Multiply each digit by the corresponding power of the base and add the results.</p>

<h4>Conversion from Base 10</h4>
<p>Repeatedly divide the number by the required base. Record the remainders and read them from bottom to top.</p>

<h4>Binary Numbers</h4>
<p>Binary is base 2 and is particularly important in computers and digital systems.</p>
`,
examples: `
<p><strong>Example 1:</strong> Convert 1011<sub>2</sub> to base 10.</p>
<p>= 1 × 2³ + 0 × 2² + 1 × 2¹ + 1 × 2⁰</p>
<p>= 8 + 0 + 2 + 1 = <strong>11<sub>10</sub></strong>.</p>

<p><strong>Example 2:</strong> Convert 25<sub>10</sub> to base 2.</p>
<p>25 ÷ 2 = 12 remainder 1</p>
<p>12 ÷ 2 = 6 remainder 0</p>
<p>6 ÷ 2 = 3 remainder 0</p>
<p>3 ÷ 2 = 1 remainder 1</p>
<p>1 ÷ 2 = 0 remainder 1</p>
<p>Reading the remainders upward gives <strong>11001<sub>2</sub></strong>.</p>

<p><strong>Example 3:</strong> Convert 132<sub>4</sub> to base 10.</p>
<p>= 1 × 4² + 3 × 4 + 2</p>
<p>= 16 + 12 + 2 = <strong>30<sub>10</sub></strong>.</p>
`,
practice: `
<ol>
<li>Convert 1101<sub>2</sub> to base 10.</li>
<li>Convert 18<sub>10</sub> to base 2.</li>
<li>Convert 132<sub>4</sub> to base 10.</li>
<li>Convert 45<sub>10</sub> to base 5.</li>
<li>Add 101<sub>2</sub> and 11<sub>2</sub>.</li>
</ol>
`,
answers: `
<ol>
<li>13<sub>10</sub></li>
<li>10010<sub>2</sub></li>
<li>30<sub>10</sub></li>
<li>140<sub>5</sub></li>
<li>1000<sub>2</sub></li>
</ol>
`
},

2: {
title: "Fractions and Decimals",
lesson: `
<p>A fraction represents part of a whole. It has a numerator and a denominator.</p>

<h4>Types of Fractions</h4>
<ul>
<li><strong>Proper fraction:</strong> numerator is smaller than denominator.</li>
<li><strong>Improper fraction:</strong> numerator is equal to or greater than denominator.</li>
<li><strong>Mixed number:</strong> a whole number and a proper fraction together.</li>
</ul>

<h4>Adding and Subtracting Fractions</h4>
<p>Fractions with the same denominator can be added or subtracted directly. Fractions with different denominators should first be converted to equivalent fractions with a common denominator.</p>

<h4>Multiplication</h4>
<p>Multiply the numerators together and the denominators together.</p>

<h4>Division</h4>
<p>To divide by a fraction, multiply by its reciprocal.</p>

<h4>Decimals</h4>
<p>A decimal is another way of representing fractions based on powers of ten.</p>
`,
examples: `
<p><strong>Example 1:</strong> Calculate 1/3 + 1/6.</p>
<p>LCM = 6.</p>
<p>1/3 = 2/6.</p>
<p>Therefore 2/6 + 1/6 = <strong>1/2</strong>.</p>

<p><strong>Example 2:</strong> Calculate 3/4 × 2/5.</p>
<p>= 6/20 = <strong>3/10</strong>.</p>

<p><strong>Example 3:</strong> Convert 0.375 to a fraction.</p>
<p>0.375 = 375/1000 = <strong>3/8</strong>.</p>
`,
practice: `
<ol>
<li>Calculate 2/5 + 1/10.</li>
<li>Calculate 7/8 − 1/4.</li>
<li>Calculate 3/5 × 10/9.</li>
<li>Convert 0.75 to a fraction.</li>
<li>Convert 7/8 to a decimal.</li>
</ol>
`,
answers: `
<ol>
<li>1/2</li>
<li>5/8</li>
<li>2/3</li>
<li>3/4</li>
<li>0.875</li>
</ol>
`
},

3: {
title: "Approximation and Estimation",
lesson: `
<p>Approximation means giving a number that is close to the exact value. It
