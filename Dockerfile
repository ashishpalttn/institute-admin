# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --silent
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app will run on (Create React App defaults to 3000)
EXPOSE 3000

# Start the development server
CMD ["npm", "start"]
