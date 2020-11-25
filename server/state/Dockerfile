FROM node:12-alpine
# Create app directory
WORKDIR /app

RUN npm install -g nodemon

COPY package*.json .

RUN npm install

COPY . .

CMD ["nodemon", "app.js"]