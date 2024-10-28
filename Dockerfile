# START BUILD SERVER
FROM node:18-alpine AS backend-build
WORKDIR /backend

COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

EXPOSE 8002

CMD ["npm", "start"]