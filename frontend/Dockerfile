FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package*.json yarn.lock ./

RUN yarn

COPY . .

RUN chown -R node:node /usr/src/app

USER node

EXPOSE 4000

CMD ["yarn", "build"]