FROM node:16.16.0-alpine

WORKDIR /app
COPY ./bin/index.js /app/index.js

CMD node /app/index.js
