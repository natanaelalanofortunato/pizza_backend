#!/bin/bash

# allow the bash to run chmod +x bash.sh

# your_project/./bash.sh

# Check if Yarn is installed
if ! command -v yarn &> /dev/null
then
    echo "Yarn is not installed. Please install Yarn and try again."
    exit 1
fi

# Install Prisma and client
yarn add prisma
yarn add @prisma/client

# Install Express and types
yarn add express
yarn add @types/express -D
yarn add express-async-errors

# Install bcryptjs and its types
yarn add bcryptjs
yarn add @types/bcryptjs -D

# Install CORS and its types
yarn add cors
yarn add @types/cors -D

# Install ts-node-dev for development
yarn add ts-node-dev -D

# Install jsonwebtoken and its types
yarn add jsonwebtoken
yarn add @types/jsonwebtoken -D

# Install moment-timezone for handling dates
yarn add moment-timezone

# Install dotenv for environment variables
yarn add dotenv

# Install multer for handling files
yarn add multer
yarn add @types/multer -D

# Install TypeScript
yarn add typescript -D

echo "All dependencies have been installed."
