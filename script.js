function showTopic() {

    const topic = document.getElementById("topicSelect").value;
    const lesson = document.getElementById("lesson");

    const topics = {

        25: {
            title: "Mensuration of Solids",

            lesson: `
                <h3>Introduction</h3>
                <p>
                    Mensuration of solids deals with measuring three-dimensional objects.
                    Important measurements include surface area and volume.
                </p>

                <h3>Cube</h3>
                <p>
                    A cube has six equal square faces.
                </p>
                <p>
                    Volume = side<sup>3</sup>.
                    <br>
                    Total surface area = 6 × side<sup>2</sup>.
                </p>

                <h3>Cuboid</h3>
                <p>
                    Volume = length × width × height.
                </p>
                <p>
                    Total surface area = 2(lw + lh + wh).
                </p>

                <h3>Cylinder</h3>
                <p>
                    Volume = πr<sup>2</sup>h.
                </p>
                <p>
                    Curved surface area = 2πrh.
                    <br>
                    Total surface area = 2πr(h + r).
                </p>

                <h3>Prism</h3>
                <p>
                    Volume of a prism = area of cross-section × length.
                </p>

                <h3>Units</h3>
                <p>
                    Volume is measured in cubic units such as cm<sup>3</sup> and m<sup>3</sup>.
                    Surface area is measured in square units.
                </p>
            `,

            examples: `
                <h4>Example 1</h4>
                <p>
                    Find the volume of a cuboid measuring 8 cm × 5 cm × 3 cm.
                </p>
                <p>
                    V = 8 × 5 × 3 = <strong>120 cm<sup>3</sup></strong>.
                </p>

                <h4>Example 2</h4>
                <p>
                    Find the volume of a cube of side 6 cm.
                </p>
                <p>
                    V = 6<sup>3</sup> = <strong>216 cm<sup>3</sup></strong>.
                </p>

                <h4>Example 3</h4>
                <p>
                    Find the volume of a cylinder of radius 7 cm and height 10 cm.
                    Use π = 22/7.
                </p>
                <p>
                    V = πr<sup>2</sup>h
                    = 22/7 × 7 × 7 × 10
                    = <strong>1540 cm<sup>3</sup></strong>.
                </p>

                <h4>Example 4</h4>
                <p>
                    Find the total surface area of a cube of side 4 cm.
                </p>
                <p>
                    TSA = 6 × 4<sup>2</sup>
                    = 6 × 16
                    = <strong>96 cm<sup>2</sup></strong>.
                </p>
            `,

            practice: `
                <ol>
                    <li>Find the volume of a cube of side 5 cm.</li>
                    <li>Find the volume of a cuboid measuring 10 cm × 4 cm × 3 cm.</li>
                    <li>Find the total surface area of a cube of side 7 cm.</li>
                    <li>Find the volume of a cylinder of radius 7 cm and height 5 cm. Use π = 22/7.</li>
                    <li>Find the curved surface area of a cylinder with radius 7 cm and height 10 cm. Use π = 22/7.</li>
                    <li>A cuboid has length 12 cm, width 5 cm and height 4 cm. Find its volume.</li>
                    <li>A cube has volume 125 cm<sup>3</sup>. Find its side.</li>
                    <li>State the formula for the volume of a cylinder.</li>
                    <li>State the formula for the volume of a cuboid.</li>
                    <li>State the formula for the volume of a prism.</li>
                </ol>
            `,

            answers: `
                <ol>
                    <li>125 cm<sup>3</sup></li>
                    <li>120 cm<sup>3</sup></li>
                    <li>294 cm<sup>2</sup></li>
                    <li>770 cm<sup>3</sup></li>
                    <li>440 cm<sup>2</sup></li>
                    <li>240 cm<sup>3</sup></li>
                    <li>5 cm</li>
                    <li>V = πr<sup>2</sup>h</li>
                    <li>V = lwh</li>
                    <li>Volume = area of cross-section × length</li>
                </ol>
            `
        },

        26: {
            title: "Coordinate Geometry",

            lesson: `
                <h3>Introduction</h3>
                <p>
                    Coordinate geometry uses numbers to describe the position of points on a plane.
                    The plane consists of a horizontal x-axis and a vertical y-axis.
                </p>

                <h3>Coordinates</h3>
                <p>
                    A point is written as (x, y). The first number gives the horizontal position
                    and the second gives the vertical position.
                </p>

                <h3>Quadrants</h3>
                <ul>
                    <li>First quadrant: (+, +)</li>
                    <li>Second quadrant: (-, +)</li>
                    <li>Third quadrant: (-, -)</li>
                    <li>Fourth quadrant: (+, -)</li>
                </ul>

                <h3>Midpoint</h3>
                <p>
                    The midpoint of (x<sub>1</sub>, y<sub>1</sub>) and (x<sub>2</sub>, y<sub>2</sub>) is:
                </p>
                <p>
                    ((x<sub>1</sub> + x<sub>2</sub>)/2,
                    (y<sub>1</sub> + y<sub>2</sub>)/2)
                </p>

                <h3>Distance Between Two Points</h3>
                <p>
                    Distance =
                    √[(x<sub>2</sub> - x<sub>1</sub>)<sup>2</sup>
                    + (y<sub>2</sub> - y<sub>1</sub>)<sup>2</sup>].
                </p>
            `,

            examples: `
                <h4>Example 1</h4>
                <p>
                    State the quadrant containing (3, 5).
                </p>
                <p>
                    Both coordinates are positive, so the point lies in the
                    <strong>first quadrant</strong>.
                </p>

                <h4>Example 2</h4>
                <p>
                    Find the midpoint of (2, 4) and (8, 10).
                </p>
                <p>
                    Midpoint = ((2 + 8)/2, (4 + 10)/2)
                    = <strong>(5, 7)</strong>.
                </p>

                <h4>Example 3</h4>
                <p>
                    Find the distance between (0, 0) and (3, 4).
                </p>
                <p>
                    d = √(3<sup>2</sup> + 4<sup>2</sup>)
                    = √25
                    = <strong>5 units</strong>.
                </p>

                <h4>Example 4</h4>
                <p>
                    State the coordinates of the origin.
                </p>
                <p>
                    The origin is <strong>(0, 0)</strong>.
                </p>
            `,

            practice: `
                <ol>
                    <li>Which quadrant contains (4, 6)?</li>
                    <li>Which quadrant contains (-3, 5)?</li>
                    <li>Which quadrant contains (-2, -7)?</li>
                    <li>Which quadrant contains (5, -4)?</li>
                    <li>Find the midpoint of (2, 6) and (8, 10).</li>
                    <li>Find the midpoint of (-2, 4) and (6, 8).</li>
                    <li>Find the distance between (0, 0) and (6, 8).</li>
                    <li>Find the distance between (1, 2) and (4, 6).</li>
                    <li>State the coordinates of the origin.</li>
                    <li>What are the coordinates of a point on the x-axis?</li>
                </ol>
            `,

            answers: `
                <ol>
                    <li>First quadrant</li>
                    <li>Second quadrant</li>
                    <li>Third quadrant</li>
                    <li>Fourth quadrant</li>
                    <li>(5, 8)</li>
                    <li>(2, 6)</li>
                    <li>10 units</li>
                    <li>5 units</li>
                    <li>(0, 0)</li>
                    <li>(x, 0)</li>
                </ol>
            `
        },

        27: {
            title: "Straight Lines and Graphs",

            lesson: `
                <h3>Introduction</h3>
                <p>
                    A straight-line graph represents a linear relationship between two variables.
                </p>

                <h3>Equation of a Straight Line</h3>
                <p>
                    A common form is:
                    <strong>y = mx + c</strong>.
                </p>

                <p>
                    m is the gradient or slope, while c is the y-intercept.
                </p>

                <h3>Gradient</h3>
                <p>
                    Gradient =
                    change in y / change in x.
                </p>

                <h3>Positive and Negative Gradient</h3>
                <p>
                    A positive gradient rises from left to right.
                    A negative gradient falls from left to right.
                </p>

                <h3>Plotting a Graph</h3>
                <p>
                    Choose values of x, calculate the corresponding values of y,
                    plot the ordered pairs and join them with a straight line.
                </p>

                <h3>Intercepts</h3>
                <p>
                    The y-intercept is the point where the line crosses the y-axis.
                    The x-intercept is where the line crosses the x-axis.
                </p>
            `,

            examples: `
                <h4>Example 1</h4>
                <p>
                    Find the gradient of a line passing through (1, 2) and (5, 10).
                </p>
                <p>
                    m = (10 - 2)/(5 - 1)
                    = 8/4
                    = <strong>2</strong>.
                </p>

                <h4>Example 2</h4>
                <p>
                    Identify the gradient and y-intercept of y = 3x + 5.
                </p>
                <p>
                    Gradient = <strong>3</strong>.
                    <br>
                    y-intercept = <strong>5</strong>.
                </p>

                <h4>Example 3</h4>
                <p>
                    Find y when x = 4 in y = 2x + 3.
                </p>
                <p>
                    y = 2(4) + 3
                    = <strong>11</strong>.
                </p>

                <h4>Example 4</h4>
                <p>
                    Find the x-intercept of y = x - 4.
                </p>
                <p>
                    At the x-intercept, y = 0.
                    Therefore 0 = x - 4.
                    <br>
                    x = <strong>4</strong>.
                </p>
            `,

            practice: `
                <ol>
                    <li>State the gradient of y = 4x + 2.</li>
                    <li>State the y-intercept of y = 5x + 7.</li>
                    <li>Find y when x = 3 in y = 2x + 1.</li>
                    <li>Find y when x = 5 in y = 3x - 2.</li>
                    <li>Find the gradient through (0, 0) and (4, 8).</li>
                    <li>Find the gradient through (2, 3) and (6, 11).</li>
                    <li>Find the x-intercept of y = x - 6.</li>
                    <li>What does m represent in y = mx + c?</li>
                    <li>What does c represent in y = mx + c?</li>
                    <li>State the formula for gradient.</li>
                </ol>
            `,

            answers: `
                <ol>
                    <li>4</li>
                    <li>7</li>
                    <li>7</li>
                    <li>13</li>
                    <li>2</li>
                    <li>2</li>
                    <li>6</li>
                    <li>Gradient</li>
                    <li>y-intercept</li>
                    <li>Gradient = change in y / change in x</li>
                </ol>
            `
        },

        28: {
            title: "Trigonometry",

            lesson: `
                <h3>Introduction</h3>
                <p>
                    Trigonometry is the study of relationships between the sides and angles
                    of triangles, especially right-angled triangles.
                </p>

                <h3>The Three Main Ratios</h3>
                <p>
                    For an angle θ:
                </p>

                <ul>
                    <li>sin θ = opposite / hypotenuse</li>
                    <li>cos θ = adjacent / hypotenuse</li>
                    <li>tan θ = opposite / adjacent</li>
                </ul>

                <p>
                    A useful memory aid is <strong>SOH-CAH-TOA</strong>.
                </p>

                <h3>Finding an Unknown Side</h3>
                <p>
                    Identify the known sides and the required side.
                    Choose the appropriate trigonometric ratio and solve.
                </p>

                <h3>Finding an Unknown Angle</h3>
                <p>
                    Use the inverse trigonometric functions:
                    sin<sup>-1</sup>, cos<sup>-1</sup> or tan<sup>-1</sup>.
                </p>

                <h3>Pythagoras and Trigonometry</h3>
                <p>
                    Pythagoras' theorem can also be used with right-angled triangles
                    when two sides are known.
                </p>
            `,

            examples: `
                <h4>Example 1</h4>
                <p>
                    In a right triangle, the opposite side is 6 cm and the hypotenuse is 10 cm.
                    Find sin θ.
                </p>
                <p>
                    sin θ = 6/10 = <strong>0.6</strong>.
                </p>

                <h4>Example 2</h4>
                <p>
                    If opposite = 8 cm and adjacent = 6 cm, find tan θ.
                </p>
                <p>
                    tan θ = 8/6 = <strong>4/3</strong>.
                </p>

                <h4>Example 3</h4>
                <p>
                    Find the angle θ if sin θ = 0.5.
                </p>
                <p>
                    θ = sin<sup>-1</sup>(0.5)
                    = <strong>30°</strong>.
                </p>

                <h4>Example 4</h4>
                <p>
                    A right triangle has hypotenuse 10 cm and angle 30°.
                    Find the opposite side.
                </p>
                <p>
                    sin 30° = opposite/10.
                </p>
                <p>
                    0.5 = opposite/10.
                    <br>
                    Opposite = <strong>5 cm</strong>.
                </p>
            `,

            practice: `
                <ol>
                    <li>State the formula for sin θ.</li>
                    <li>State the formula for cos θ.</li>
                    <li>State the formula for tan θ.</li>
                    <li>If opposite = 3 and hypotenuse = 5, find sin θ.</li>
                    <li>If adjacent = 4 and hypotenuse = 5, find cos θ.</li>
                    <li>If opposite = 6 and adjacent = 8, find tan θ.</li>
                    <li>Find θ if sin θ = 0.5.</li>
                    <li>Find θ if cos θ = 0.5.</li>
                    <li>A right triangle has hypotenuse 10 cm and angle 60°. Find the opposite side.</li>
                    <li>What does SOH-CAH-TOA help us remember?</li>
                </ol>
            `,

            answers: `
                <ol>
                    <li>sin θ = opposite/hypotenuse</li>
                    <li>cos θ = adjacent/hypotenuse</li>
                    <li>tan θ = opposite/adjacent</li>
                    <li>3/5 = 0.6</li>
                    <li>4/5 = 0.8</li>
                    <li>6/8 = 0.75</li>
                    <li>30°</li>
                    <li>60°</li>
                    <li>5√3 cm</li>
                    <li>The three basic trigonometric ratios.</li>
                </ol>
            `
        },

        29: {
            title: "Bearings and Distances",

            lesson: `
                <h3>Meaning of Bearing</h3>
                <p>
                    A bearing is a direction measured clockwise from North.
                    Bearings are normally written as three-figure angles.
                </p>

                <h3>Important Rules</h3>
                <ul>
                    <li>North is 000°.</li>
                    <li>East is 090°.</li>
                    <li>South is 180°.</li>
                    <li>West is 270°.</li>
                </ul>

                <h3>Three-Figure Bearings</h3>
                <p>
                    Always use three digits. For example, 45° is written as 045°.
                </p>

                <h3>Back Bearing</h3>
                <p>
                    To find a back bearing, add 180° if the bearing is less than 180°.
                    If it is greater than 180°, subtract 180°.
                </p>

                <h3>Bearings and Trigonometry</h3>
                <p>
                    Trigonometry and Pythagoras' theorem can be used to calculate distances
                    and unknown bearings in navigation problems.
                </p>
            `,

            examples: `
                <h4>Example 1</h4>
                <p>
                    Express 60° as a three-figure bearing.
                </p>
                <p>
                    Answer = <strong>060°</strong>.
                </p>

                <h4>Example 2</h4>
                <p>
                    Find the back bearing of 070°.
                </p>
                <p>
                    070° + 180° = <strong>250°</strong>.
                </p>

                <h4>Example 3</h4>
                <p>
                    Find the back bearing of 240°.
                </p>
                <p>
                    240° - 180° = <strong>060°</strong>.
                </p>

                <h4>Example 4</h4>
                <p>
                    A point is 3 km east and 4 km north of another point.
                    Find the straight-line distance.
                </p>
                <p>
                    d = √(3<sup>2</sup> + 4<sup>2</sup>)
                    = √25
                    = <strong>5 km</strong>.
                </p>
            `,

            practice: `
                <ol>
                    <li>Write 40° as a three-figure bearing.</li>
                    <li>Write 125° as a three-figure bearing.</li>
                    <li>What is the bearing of East?</li>
                    <li>What is the bearing of South?</li>
                    <li>What is the bearing of West?</li>
                    <li>Find the back bearing of 080°.</li>
                    <li>Find the back bearing of 150°.</li>
                    <li>Find the back bearing of 300°.</li>
                    <li>A point is 6 km east and 8 km north. Find its distance from the starting point.</li>
                    <li>From what direction are bearings measured?</li>
                </ol>
            `,

            answers: `
                <ol>
                    <li>040°</li>
                    <li>125°</li>
                    <li>090°</li>
                    <li>180°</li>
                    <li>270°</li>
                    <li>260°</li>
                    <li>330°</li>
                    <li>120°</li>
                    <li>10 km</li>
                    <li>Clockwise from North.</li>
                </ol>
            `
        },

        30: {
            title: "Statistics",

            lesson: `
                <h3>Meaning of Statistics</h3>
                <p>
                    Statistics is the branch of mathematics concerned with collecting,
                    organizing, presenting, analyzing and interpreting data.
                </p>

                <h3>Data</h3>
                <p>
                    Data are facts or observations collected for a particular purpose.
                </p>

                <h3>Types of Data</h3>
                <ul>
                    <li>Qualitative data describe qualities or categories.</li>
                    <li>Quantitative data are numerical.</li>
                    <li>Discrete data are countable.</li>
                    <li>Continuous data can take any value within a range.</li>
                </ul>

                <h3>Presentation of Data</h3>
                <p>
                    Data can be presented using tables, bar charts, pie charts,
                    histograms, line graphs and frequency distributions.
                </p>

                <h3>Frequency</h3>
                <p>
                    Frequency tells us how many times a particular value occurs.
                </p>

                <h3>Frequency Table</h3>
                <p>
                    A frequency table organizes data by listing values and their frequencies.
                </p>
            `,

            examples: `
                <h4>Example 1</h4>
                <p>
                    The data are 2, 3, 3, 4, 4, 4, 5.
                    What is the frequency of 4?
                </p>
                <p>
                    4 occurs three times.
                    Answer = <strong>3</strong>.
                </p>

                <h4>Example 2</h4>
                <p>
                    Arrange 8, 3, 6, 2, 5 in ascending order.
                </p>
                <p>
                    Answer = <strong>2, 3, 5, 6, 8</strong>.
                </p>

                <h4>Example 3</h4>
                <p>
                    Find the range of 4, 7, 9, 2 and 11.
                </p>
                <p>
                    Range = highest - lowest
                    = 11 - 2
                    = <strong>9</strong>.
                </p>

                <h4>Example 4</h4>
                <p>
                    State whether the number of students in a class is discrete or continuous data.
                </p>
                <p>
                    It is <strong>discrete</strong> because students are counted in whole numbers.
                </p>
            `,

            practice: `
                <ol>
                    <li>Define statistics.</li>
                    <li>What is data?</li>
                    <li>Find the frequency of 5 in 2, 5, 3, 5, 4, 5.</li>
                    <li>Arrange 9, 2, 7, 4, 1 in ascending order.</li>
                    <li>Find the range of 3, 8, 12, 5 and 7.</li>
                    <li>Is height continuous or discrete data?</li>
                    <li>Is number of children discrete or continuous data?</li>
                    <li>Name two methods of presenting data.</li>
                    <li>What is frequency?</li>
                    <li>What is a frequency table?</li>
                </ol>
            `,

            answers: `
                <ol>
                    <li>The collection, organization, analysis and interpretation of data.</li>
                    <li>Facts or observations collected for a purpose.</li>
                    <li>3</li>
                    <li>1, 2, 4, 7, 9</li>
                    <li>9</li>
                    <li>Continuous</li>
                    <li>Discrete</li>
                    <li>Bar chart and pie chart.</li>
                    <li>The number of times a value occurs.</li>
                    <li>A table showing values and their frequencies.</li>
                </ol>
            `
        },

        31: {
            title: "Measures of Central Tendency",

            lesson: `
                <h3>Introduction</h3>
                <p>
                    Measures of central tendency provide a single value that represents
                    the centre or typical value of a set of data.
                </p>

                <h3>Mean</h3>
                <p>
                    Mean = sum of all observations ÷ number of observations.
                </p>

                <h3>Median</h3>
                <p>
                    The median is the middle value when the data are arranged in order.
                    If there is an even number of observations, the median is the average
                    of the two middle values.
                </p>

                <h3>Mode</h3>
                <p>
                    The mode is the value that occurs most frequently.
                </p>

                <h3>Choosing a Measure</h3>
                <p>
                    The mean uses every observation but can be affected by extreme values.
                    The median is less affected by extreme values.
                    The mode is useful when the most common value is required.
                </p>

                <h3>Frequency Data</h3>
                <p>
                    For frequency data:
                    Mean = Σfx / Σf.
                </p>
            `,

            examples: `
                <h4>Example 1: Find the mean of 4, 6, 8 and 10.</h4>
                <p>
                    Mean = (4 + 6 + 8 + 10) / 4
                    = 28/4
                    = <strong>7</strong>.
                </p>

                <h4>Example 2: Find the median of 3, 7, 5, 9 and 1.</h4>
                <p>
                    Arrange: 1, 3, 5, 7, 9.
                </p>
                <p>
                    Middle value = <strong>5</strong>.
                </p>

                <h4>Example 3: Find the mode of 2, 3, 3, 4, 5, 3.</h4>
                <p>
                    3 occurs most frequently.
                    Answer = <strong>3</strong>.
                </p>

                <h4>Example 4</h4>
                <p>
                    Find the median of 2, 4, 6 and 8.
                </p>
                <p>
                    The middle values are 4 and 6.
                </p>
                <p>
                    Median = (4 + 6)/2 = <strong>5</strong>.
                </p>
            `,

            practice: `
                <ol>
                    <li>Find the mean of 2, 4, 6, 8 and 10.</li>
                    <li>Find the mean of 5, 7, 9 and 11.</li>
                    <li>Find the median of 1, 3, 5, 7 and 9.</li>
                    <li>Find the median of 2, 4, 6 and 8.</li>
                    <li>Find the mode of 3, 4, 4, 5, 6, 4.</li>
                    <li>Find the mode of 2, 2, 3, 4, 5, 5, 5.</li>
                    <li>What is the mean?</li>
                    <li>What is the median?</li>
                    <li>What is the mode?</li>
                    <li>Which measure is represented by Σfx/Σf?</li>
                </ol>
            `,

            answers: `
                <ol>
                    <li>6</li>
                    <li>8</li>
                    <li>5</li>
                    <li>5</li>
                    <li>4</li>
                    <li>5</li>
                    <li>Sum of observations divided by number of observations.</li>
                    <li>The middle value when data are arranged in order.</li>
                    <li>The most frequently occurring value.</li>
                    <li>Mean</li>
                </ol>
            `
        },

        32: {
            title: "Probability",

            lesson: `
                <h3>Meaning of Probability</h3>
                <p>
                    Probability measures how likely an event is to occur.
                    Probability values lie between 0 and 1 inclusive.
                </p>

                <h3>Probability Formula</h3>
                <p>
                    P(E) =
                    number of favourable outcomes /
                    total number of equally likely outcomes.
                </p>

                <h3>Impossible and Certain Events</h3>
                <p>
                    An impossible event has probability 0.
                    A certain event has probability 1.
                </p>

                <h3>Complementary Events</h3>
                <p>
                    If E is an event, then:
                    P(not E) = 1 - P(E).
                </p>

                <h3>Experimental Probability</h3>
                <p>
                    Experimental probability is based on actual results from an experiment:
                    frequency of event / total number of trials.
                </p>
            `,

            examples: `
                <h4>Example 1</h4>
                <p>
                    A fair die is rolled. Find the probability of getting 4.
                </p>
                <p>
                    There is one favourable outcome and six possible outcomes.
                </p>
                <p>
                    P(4) = <strong>1/6</strong>.
                </p>

                <h4>Example 2</h4>
                <p>
                    Find the probability of getting an even number on a fair die.
                </p>
                <p>
                    Even outcomes = 2, 4, 6.
                </p>
                <p>
                    P(even) = 3/6 = <strong>1/2</strong>.
                </p>

                <h4>Example 3</h4>
                <p>
                    The probability of rain is 0.3. Find the probability that it will not rain.
                </p>
                <p>
                    P(not rain) = 1 - 0.3
                    = <strong>0.7</strong>.
                </p>

                <h4>Example 4</h4>
                <p>
                    A bag contains 3 red balls and 2 blue balls.
                    Find the probability of selecting a red ball.
                </p>
                <p>
                    Total balls = 5.
                </p>
                <p>
                    P(red) = 3/5.
                </p>
            `,

            practice: `
                <ol>
                    <li>What is the probability of an impossible event?</li>
                    <li>What is the probability of a certain event?</li>
                    <li>Find the probability of getting a 6 on a fair die.</li>
                    <li>Find the probability of getting an odd number on a fair die.</li>
                    <li>Find the probability of getting a head when a fair coin is tossed.</li>
                    <li>A bag has 4 red and 6 blue balls. Find P(red).</li>
                    <li>If P(A) = 0.4, find P(not A).</li>
                    <li>A card is selected from numbers 1 to 10. Find P(5).</li>
                    <li>What is the range of probability?</li>
                    <li>State the probability formula.</li>
                </ol>
            `,

            answers: `
                <ol>
                    <li>0</li>
                    <li>1</li>
                    <li>1/6</li>
                    <li>1/2</li>
                    <li>1/2</li>
                    <li>2/5</li>
                    <li>0.6</li>
                    <li>1/10</li>
                    <li>0 to 1 inclusive</li>
                    <li>P(E) = favourable outcomes / total equally likely outcomes</li>
                </ol>
            `
        },

        33: {
            title: "Permutation",

            lesson: `
                <h3>Meaning of Permutation</h3>
                <p>
                    A permutation is an arrangement of objects in which order matters.
                </p>

                <h3>Factorial</h3>
                <p>
                    Factorial notation is written as n!.
                </p>

                <p>
                    n! = n × (n - 1) × (n - 2) × ... × 1.
                </p>

                <p>
                    Also, 0! = 1.
                </p>

                <h3>Permutation Formula</h3>
                <p>
                    The number of arrangements of r objects selected from n objects is:
                </p>

                <p>
                    nPr = n! / (n - r)!.
                </p>

                <h3>When All Objects Are Arranged</h3>
                <p>
                    The number of arrangements of n different objects is n!.
                </p>

                <h3>Important Point</h3>
                <p>
                    In permutation problems, changing the order produces a different arrangement.
                </p>
            `,

            examples: `
                <h4>Example 1</h4>
                <p>
                    Find 5!.
                </p>
                <p>
                    5! = 5 × 4 × 3 × 2 × 1
                    = <strong>120</strong>.
                </p>

                <h4>Example 2</h4>
                <p>
                    In how many ways can 3 different books be arranged?
                </p>
                <p>
                    3! = 3 × 2 × 1
                    = <strong>6 ways</strong>.
                </p>

                <h4>Example 3</h4>
                <p>
                    Find 5P2.
                </p>
                <p>
                    5P2 = 5!/(5 - 2)!
                    = 5!/3!
                    = 5 × 4
                    = <strong>20</strong>.
                </p>

                <h4>Example 4</h4>
                <p>
                    Find 6P3.
                </p>
                <p>
                    6P3 = 6 × 5 × 4
                    = <strong>120</strong>.
                </p>
            `,

            practice: `
                <ol>
                    <li>Find 4!.</li>
                    <li>Find 6!.</li>
                    <li>Find 3!.</li>
                    <li>Find 5P2.</li>
                    <li>Find 6P2.</li>
                    <li>Find 6P3.</li>
                    <li>In how many ways can 4 different books be arranged?</li>
                    <li>In how many ways can 5 students stand in a line?</li>
                    <li>State the formula for nPr.</li>
                    <li>Does order matter in permutation?</li>
                </ol>
            `,

            answers: `
                <ol>
                    <li>24</li>
                    <li>720</li>
                    <li>6</li>
                    <li>20</li>
                    <li>30</li>
                    <li>120</li>
                    <li>24 ways</li>
                    <li>120 ways</li>
                    <li>nPr = n!/(n-r)!</li>
                    <li>Yes</li>
                </ol>
            `
        },

        34: {
            title: "Combination",

            lesson: `
                <h3>Meaning of Combination</h3>
                <p>
                    A combination is a selection of objects where order does not matter.
                </p>

                <h3>Combination Formula</h3>
                <p>
                    The number of ways of selecting r objects from n objects is:
                </p>

                <p>
                    nCr = n! / [r!(n - r)!].
                </p>

                <h3>Permutation versus Combination</h3>
                <p>
                    In permutation, order matters.
                    In combination, order does not matter.
                </p>

                <h3>Useful Relationship</h3>
                <p>
                    nCr = nPr / r!.
                </p>

                <h3>Applications</h3>
                <p>
                    Combinations are used when selecting teams, committees, groups
                    or objects where the arrangement of the selected objects is irrelevant.
                </p>
            `,

            examples: `
                <h4>Example 1</h4>
                <p>
                    Find 5C2.
                </p>
                <p>
                    5C2 = 5!/[2!3!]
                    = (5 × 4)/(2 × 1)
                    = <strong>10</strong>.
                </p>

                <h4>Example 2</h4>
                <p>
                    Find 6C3.
                </p>
                <p>
                    6C3 = 6!/[3!3!]
                    = 20.
                </p>

                <h4>Example 3</h4>
                <p>
                    From 7 students, how many ways can 2 students be selected?
                </p>
                <p>
                    7C2 = 7!/[2!5!]
                    = <strong>21 ways</strong>.
                </p>

                <h4>Example 4</h4>
                <p>
                    A committee of 3 is selected from 8 people.
                    How many committees are possible?
                </p>
                <p>
                    8C3 = 8!/[3!5!]
                    = <strong>56</strong>.
                </p>
            `,

            practice: `
                <ol>
                    <li>Find 4C2.</li>
                    <li>Find 5C2.</li>
                    <li>Find 6C2.</li>
                    <li>Find 6C3.</li>
                    <li>Find 7C2.</li>
                    <li>Find 8C3.</li>
                    <li>From 5 students, how many ways can 2 be selected?</li>
                    <li>From 10 people, how many ways can 3 be selected?</li>
                    <li>State the formula for nCr.</li>
                    <li>Does order matter in combination?</li>
                </ol>
            `,

            answers: `
                <ol>
                    <li>6</li>
                    <li>10</li>
                    <li>15</li>
                    <li>20</li>
                    <li>21</li>
                    <li>56</li>
                    <li>10 ways</li>
                    <li>120 ways</li>
                    <li>nCr = n!/[r!(n-r)!]</li>
                    <li>No</li>
                </ol>
            `
        },

        35: {
            title: "Introduction to Matrices",

            lesson: `
                <h3>Meaning of a Matrix</h3>
                <p>
                    A matrix is a rectangular arrangement of numbers, symbols or expressions
                    arranged in rows and columns.
                </p>

                <h3>Order of a Matrix</h3>
                <p>
                    The order of a matrix is written as:
                    number of rows × number of columns.
                </p>

                <p>
                    For example, a matrix with 2 rows and 3 columns has order 2 × 3.
                </p>

                <h3>Elements</h3>
                <p>
                    Each number in a matrix is called an element.
                    Elements are identified by their row and column positions.
                </p>

                <h3>Types of Matrices</h3>
                <ul>
                    <li>Row matrix</li>
                    <li>Column matrix</li>
                    <li>Square matrix</li>
                    <li>Zero matrix</li>
                    <li>Identity matrix</li>
                </ul>

                <h3>Matrix Addition</h3>
                <p>
                    Two matrices can be added only when they have the same order.
                    Corresponding elements are added.
                </p>

                <h3>Matrix Subtraction</h3>
                <p>
                    Two matrices of the same order can be subtracted by subtracting
                    corresponding elements.
                </p>

                <h3>Scalar Multiplication</h3>
                <p>
                    To multiply a matrix by a number, multiply every element by that number.
                </p>
            `,

            examples: `
                <h4>Example 1</h4>
                <p>
                    Consider:
                </p>

                <p>
                    A = [1  2  3]<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;[4  5  6]
                </p>

                <p>
                    Matrix A has 2 rows and 3 columns.
                    Therefore its order is <strong>2 × 3</strong>.
                </p>

                <h4>Example 2</h4>
                <p>
                    Add:
                </p>

                <p>
                    A = [1  2]<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;[3  4]
                </p>

                <p>
                    B = [5  6]<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;[7  8]
                </p>

                <p>
                    A + B =
                    [6  8]<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;[10 12]
                </p>

                <h4>Example 3</h4>
                <p>
                    Subtract:
                </p>

                <p>
                    [8  7] - [3  2]
                    = <strong>[5  5]</strong>.
                </p>

                <h4>Example 4</h4>
                <p>
                    Multiply the matrix [2  3; 4  5] by 3.
                </p>

                <p>
                    3[2  3; 4  5]
                    = <strong>[6  9; 12 15]</strong>.
                </p>

                <h4>Example 5</h4>
                <p>
                    State the order of:
                </p>

                <p>
                    [2  4]<br>
                    [6  8]<br>
                    [1  3]
                </p>

                <p>
                    There are 3 rows and 2 columns.
                    Order = <strong>3 × 2</strong>.
                </p>
            `,

            practice: `
                <ol>
                    <li>What is a matrix?</li>
                    <li>Find the order of a matrix with 4 rows and 3 columns.</li>
                    <li>Find the order of [1 2 3].</li>
                    <li>Add [1 2] and [3 4].</li>
                    <li>Add [2 5; 3 6] and [4 1; 7 2].</li>
                    <li>Subtract [8 7] - [3 2].</li>
                    <li>Multiply [2 4; 3 5] by 2.</li>
                    <li>What is a square matrix?</li>
                    <li>When can two matrices be added?</li>
                    <li>What is a matrix element?</li>
                </ol>
            `,

            answers: `
                <ol>
                    <li>A rectangular arrangement of numbers or expressions in rows and columns.</li>
                    <li>4 × 3</li>
                    <li>1 × 3</li>
                    <li>[4 6]</li>
                    <li>[6 6; 10 8]</li>
                    <li>[5 5]</li>
                    <li>[4 8; 6 10]</li>
                    <li>A matrix having the same number of rows and columns.</li>
                    <li>They must have the same order.</li>
                    <li>An individual entry in a matrix.</li>
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
