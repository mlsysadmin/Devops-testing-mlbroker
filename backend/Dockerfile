# START BUILD SERVER
FROM node:18-alpine AS backend-build
WORKDIR /app

# Install required build tools for bcrypt and other native modules
RUN apk add --no-cache python3 make g++

COPY package*.json ./
RUN npm install --omit=dev

# Copy the rest of the application code
COPY . .

EXPOSE 8002

CMD ["npm", "start"]