FROM node:14-alpine AS builder

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

RUN npm run build

FROM node:14-alpine as runtime

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --production=true

COPY . .

COPY --from=builder /usr/src/app/dist ./dist

CMD ["node", "dist/apps/api/main"]
