FROM node:alpine

ENV PORT 8000
ENV HOST 0.0.0.0

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . .

EXPOSE ${PORT}

CMD ["yarn", "start"]