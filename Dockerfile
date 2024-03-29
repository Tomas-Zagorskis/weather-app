FROM node:20.11.0-alpine As development

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev" ]
