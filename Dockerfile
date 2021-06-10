FROM node:15.4

WORKDIR /app
COPY package*.json .
RUN yarn install 
COPY . .

CMD yarn run start:dev