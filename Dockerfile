# START BUILD CLIENT
FROM node:20 AS frontend-build

# Set the working directory
WORKDIR /app

# Copy package files first for better cache utilization
COPY package*.json ./

# Install dependencies (only production dependencies if building for production)
RUN npm install --omit=dev && npm install -g serve
#UN npm run build
# Copy the rest of the application files
COPY . .

# Build the frontend application
RUN npm run build

# Expose the port for the application
EXPOSE 3003

# Command to run the server
CMD ["serve", "-s", "build", "-l", "3003"]
#CMD ["npm", "start"]