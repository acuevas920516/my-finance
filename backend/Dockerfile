# Use the official Node.js image as the base image
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json yarn.lock ./

# Install the application dependencies
RUN yarn

# Copy the rest of the application files
COPY . .

RUN chown -R node:node /usr/src/app

USER node

# Build the NestJS application
RUN yarn run build

# Expose the application port
EXPOSE 3000

# Command to run the application
CMD ["node", "dist/main"]