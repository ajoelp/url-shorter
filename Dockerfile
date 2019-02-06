FROM node:10
WORKDIR /usr/src/app
ENV CFG_DIR /config
ENV PORT 8080
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "node", "index.js" ]