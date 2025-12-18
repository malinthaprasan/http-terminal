FROM node:20-bookworm

RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    wget \
    net-tools \
    iputils-ping \
    dnsutils \
    telnet \
    netcat-openbsd \
    traceroute \
    tcpdump \
    vim \
    less \
    jq \
    && rm -rf /var/lib/apt/lists/*

RUN useradd -m -s /bin/bash appuser

WORKDIR /app

COPY package.json ./
COPY server.js ./

RUN chown -R appuser:appuser /app

USER appuser

EXPOSE 8080

CMD ["node", "server.js"]
