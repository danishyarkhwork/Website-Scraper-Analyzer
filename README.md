<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SEO Analyzer</title>
</head>
<body>
    <h1>SEO Analyzer</h1>

    <h2>Overview</h2>
    <p>The <strong>SEO Analyzer</strong> is a web application that allows users to input a URL, analyze its SEO performance, and display the results, such as title tags, meta descriptions, H1 tags, image alt tags, canonical tags, and an overall SEO score. The project is built using <strong>Node.js</strong> for the backend and <strong>HTML</strong>, <strong>Tailwind CSS</strong>, and <strong>JavaScript</strong> for the frontend.</p>

    <h2>Features</h2>
    <ul>
        <li>Analyze SEO elements of a given URL, such as:
            <ul>
                <li>Title Tag</li>
                <li>Meta Description</li>
                <li>H1 Tags</li>
                <li>Image Alt Tags</li>
                <li>Canonical Tag</li>
                <li>SEO Score</li>
            </ul>
        </li>
        <li>Simple and clean user interface using <strong>Tailwind CSS</strong>.</li>
        <li>Basic scoring system to assess the overall SEO health of the page.</li>
    </ul>

    <h2>Technologies Used</h2>
    <ul>
        <li><strong>Node.js</strong>: Backend server to handle URL analysis and SEO checks.</li>
        <li><strong>Express.js</strong>: Web framework to serve the frontend and handle API requests.</li>
        <li><strong>Axios</strong>: For making HTTP requests to fetch HTML content from the provided URL.</li>
        <li><strong>Cheerio</strong>: Used to parse the HTML content and extract SEO-related elements.</li>
        <li><strong>Tailwind CSS</strong>: Frontend framework for building a responsive and modern UI.</li>
    </ul>

    <h2>Project Structure</h2>
    <pre>
/project-root
  /public
    index.html     <-- Frontend HTML file
    styles.css     <-- (Optional) Custom styles for Tailwind
    script.js      <-- Frontend JavaScript (if needed)
  server.js        <-- Node.js backend server
  package.json     <-- Project configuration and dependencies
    </pre>

    <h2>Prerequisites</h2>
    <p>Before you start, ensure that you have the following installed:</p>
    <ul>
        <li><strong>Node.js</strong> (v12.x or higher)</li>
        <li><strong>npm</strong> (comes with Node.js)</li>
    </ul>

    <h2>Installation</h2>
    <ol>
        <li><strong>Clone the repository:</strong>
            <pre>
git clone https://github.com/your-username/seo-analyzer.git
cd seo-analyzer
            </pre>
        </li>
        <li><strong>Install dependencies:</strong>
            <pre>
npm install
            </pre>
        </li>
    </ol>

    <h2>Usage</h2>

    <h3>1. Running the Application</h3>
    <p>After installing the dependencies, you can start the Node.js server. This server will handle both the frontend (HTML) and backend (SEO analysis logic).</p>

    <pre>
node server.js
    </pre>

    <p>By default, the server will run on <strong>http://localhost:3000</strong>. You can open this in your browser to access the frontend interface.</p>

    <h3>2. Using the Application</h3>
    <ol>
        <li><strong>Input a URL</strong>: Enter the URL of the website you want to analyze in the provided input field.</li>
        <li><strong>Click "Analyze"</strong>: After entering the URL, click the "Analyze" button. The server will fetch the page content, analyze the SEO elements, and display the results on the page.</li>
        <li><strong>View SEO Results</strong>: The results will display key SEO metrics, including the title tag, meta description, H1 tags, images with alt attributes, canonical tags, and the overall SEO score.</li>
    </ol>

    <h2>Code Breakdown</h2>

    <h3>Backend: <code>server.js</code></h3>
    <p>The Node.js server performs the following tasks:</p>
    <ul>
        <li>Serves static files from the <code>public</code> directory using <code>express.static()</code>.</li>
        <li>Listens for POST requests to the <code>/analyze-seo</code> endpoint. When a request is made, the backend:
            <ol>
                <li>Uses <strong>Axios</strong> to fetch the HTML content of the provided URL.</li>
                <li>Parses the HTML using <strong>Cheerio</strong> to extract key SEO elements (title, meta description, H1 tags, image alt tags, and canonical tag).</li>
                <li>Calculates an SEO score based on the presence or absence of these elements.</li>
                <li>Sends the results back to the frontend as JSON.</li>
            </ol>
        </li>
    </ul>

    <h3>Frontend: <code>index.html</code></h3>
    <p>The frontend consists of a simple HTML page styled with <strong>Tailwind CSS</strong> and contains:</p>
    <ul>
        <li>A form to input the URL.</li>
        <li>A section to display the analyzed SEO results.</li>
        <li>JavaScript (in <code>script.js</code> or inline) handles the form submission, sends a POST request to the backend, and updates the page with the analysis results.</li>
    </ul>

    <h3>Tailwind CSS</h3>
    <p>The project uses <strong>Tailwind CSS</strong> for responsive design and modern styles. If you need to customize any styles, you can either edit the <code>styles.css</code> file or update the Tailwind configuration.</p>

    <h2>SEO Scoring Logic</h2>
    <p>The backend analyzes the following SEO elements:</p>
    <ul>
        <li><strong>Title Tag</strong>: Checks if a <code>&lt;title&gt;</code> tag exists and if it has content. Missing titles reduce the SEO score.</li>
        <li><strong>Meta Description</strong>: Checks for the presence of a <code>&lt;meta name="description"&gt;</code> tag with content. Missing or empty meta descriptions reduce the score.</li>
        <li><strong>H1 Tags</strong>: Checks for the presence of at least one <code>&lt;h1&gt;</code> tag. More than one H1 tag or no H1 tag affects the score.</li>
        <li><strong>Image Alt Tags</strong>: Checks for the presence of <code>alt</code> attributes in <code>&lt;img&gt;</code> tags. Missing alt attributes reduce the score.</li>
        <li><strong>Canonical Tag</strong>: Checks for a <code>&lt;link rel="canonical"&gt;</code> tag. Missing canonical tags reduce the score.</li>
        <li><strong>SEO Score</strong>: A base score of 100 is adjusted based on missing elements, following a basic scoring system.</li>
    </ul>

    <h2>Future Enhancements</h2>
    <ul>
        <li><strong>JavaScript-heavy websites</strong>: Add functionality to handle JavaScript-rendered pages using headless browsers like <strong>Puppeteer</strong>.</li>
        <li><strong>More SEO checks</strong>: Check for additional SEO metrics, such as mobile-friendliness, proper URL structures, structured data, etc.</li>
        <li><strong>Export reports</strong>: Allow users to download the SEO analysis as a PDF or CSV file.</li>
    </ul>

    <h2>Troubleshooting</h2>
    <p>If you encounter issues like <code>Cannot GET /</code>, ensure that the frontend files are being served correctly using <code>express.static()</code> in your Node.js server.</p>

    <p>If you run into CORS issues, ensure that the backend allows cross-origin requests. You can use the <code>cors</code> package to enable CORS in your Express app.</p>

    <h2>License</h2>
    <p>This project is licensed under the MIT License. See the <code>LICENSE</code> file for more details.</p>

    <h2>Contact</h2>
    <p>For any questions or suggestions, feel free to reach out to the author via <strong>[danishyarkhwork@gmail.com]</strong> or open an issue in the GitHub repository.</p>
</body>
</html>
