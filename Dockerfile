FROM node:14

COPY . /code

WORKDIR /code

RUN cp .env.example .env

RUN npm i

RUN node_modules/typescript/bin/tsc

CMD ["node", "dist/app.js" ]