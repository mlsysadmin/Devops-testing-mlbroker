# START BUILD SERVER
FROM node:18-alpine AS backend-build
WORKDIR /backend

COPY package*.json ./
RUN npm install
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    && rm -rf /var/lib/apt/lists/*

# Copy the rest of the application code
COPY . .

EXPOSE 8002

CMD ["npm", "start"]