FROM node:12.16.3

RUN mkdir -p /usr/src/api
WORKDIR /usr/src/api
COPY package*.json /usr/src/api/
RUN npm install
COPY . /usr/src/api/
EXPOSE 3031

CMD ["npm", "start"]
