FROM node:12.16.3

RUN mkdir -p /usr/src/auth_api
WORKDIR /usr/src/auth_api
COPY package*.json /usr/src/auth_api/
RUN npm install
COPY . /usr/src/auth_api/
EXPOSE 3032

CMD ["npm", "start"]
