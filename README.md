# HTTP Terminal

A web-based terminal that executes shell commands on a remote server via HTTP.

## Structure

```
├── backend/       # Node.js server that executes commands
│   └── server.js
├── frontend/      # Browser-based terminal UI
│   └── index.html
```

## Setup

### Backend

```bash
cd backend
npm install
npm start
```

Server runs on `http://localhost:8080` by default. Set `PORT` env var to change.

### Frontend

Open `frontend/index.html` in a browser. Configure the server URL in the toolbar if needed.

## Docker

```bash
cd backend
docker build -t http-terminal .
docker run -p 8080:8080 http-terminal
```

The Docker image includes common networking tools: curl, wget, ping, dig, telnet, netcat, traceroute, tcpdump, jq.

## Usage

Type commands in the terminal interface and press Enter. Output is displayed below each command.