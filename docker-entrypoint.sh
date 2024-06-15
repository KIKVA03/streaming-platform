#!/bin/sh

# Check if the NODE_ENV environment variable is set to "production"
if [ "${NODE_ENV}" = "production" ]; then
  # If it is, start the application using npm start
  npm run build;
  exec npm start
else
  # Otherwise, start the application in development mode using npm run dev
  exec npm run dev
fi