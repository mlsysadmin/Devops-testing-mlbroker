# START BUILD CLIENT
FROM node:18 AS frontend-build
WORKDIR /frontend

COPY package*.json ./
RUN npm install

COPY . ./

RUN npm install -g serve

CMD ["sh", "-c", "npm run build && npx serve -s build -l 3003"]

EXPOSE 3003