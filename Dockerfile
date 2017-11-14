FROM node:7
RUN npm install --global nodemon
RUN npm i -g knex && npm i knex
RUN mkdir /ecomanda
ADD . /ecomanda
WORKDIR /ecomanda
RUN npm i
EXPOSE 3000
CMD nodemon server.js localhost 3000