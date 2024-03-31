FROM node:latest

WORKDIR /app

COPY package.json yarn.lock .env ./

RUN yarn

COPY index.js ./

CMD ["yarn", "start:watch"]
