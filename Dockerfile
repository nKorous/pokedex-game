#!/bin/bash
FROM node:alpine:3.16
ENV NODE_VERSION 16.20.0
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build:prod
EXPOSE 4200
EXPOSE 8080
CMD ["npm", "start"]
