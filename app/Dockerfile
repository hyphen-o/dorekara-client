FROM node:18.14.0-alpine

WORKDIR /works

COPY ./.yarnrc.yml ./package.json ./yarn.lock works/
COPY ./.yarn ./.yarn

RUN yarn install

COPY . /works

CMD ["yarn", "dev"]
