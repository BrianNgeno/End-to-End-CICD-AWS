FROM node:16

WORKDIR /app/src/app

COPY app/src/package*.json ./

RUN npm ci --omit=dev

COPY app/src/ .

EXPOSE 3000

CMD ["npm", "start"]