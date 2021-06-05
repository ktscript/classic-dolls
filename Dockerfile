FROM node:12-alpine
ENV NODE_ENV production

WORKDIR /app
ADD . /app

RUN yarn install --frozen-lockfile &&  yarn build

EXPOSE 3000
CMD node_modules/nuxt/bin/nuxt.js start
