const http = require('http');
const { exec } = require('child_process');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method === 'POST' && req.url === '/exec') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      const cmd = body;
      console.log(`Executing: ${cmd}`);

      exec(cmd, { maxBuffer: 10 * 1024 * 1024 }, (error, stdout, stderr) => {
        let output = '';
        if (stdout) output += stdout;
        if (stderr) output += stderr;
        if (error && !stderr) output = `Error: ${error.message}`;

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(output || '(no output)');
        console.log(`Command completed`);
      });
    });
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(PORT, () => {
  console.log(`HTTP server running on http://localhost:${PORT}`);
});
