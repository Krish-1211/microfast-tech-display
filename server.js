import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, 'dist')));

// Handle all other routes
app.get('*', (req, res) => {
    // User requested explicit redirect to homepage on refresh failure logic
    // "as soon as someone refreshes it it redirects to homepage"
    // So instead of serving index.html on the SAME URL, we redirect to /
    // NOTE: This changes strictly SPA behavior (deep linking) to a "Safe Fallback" behavior.
    // If the user access /contact, they get redirected to /.
    res.redirect('/');

    // Alternative (Correct SPA): 
    // res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
