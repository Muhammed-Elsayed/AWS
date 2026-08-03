FROM node:22-bookworm-slim

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY app.js ./

#-- containers exposed from img listens on port 3000
EXPOSE 3000  

CMD ["node", "app.js"]