#!/bin/bash
FROM --platform=linux/arm64 node:16
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 4200
EXPOSE 8080
CMD ["npm", "start"]