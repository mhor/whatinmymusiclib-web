FROM node:carbon

WORKDIR /usr/src/app


COPY package.json yarn.lock ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]
