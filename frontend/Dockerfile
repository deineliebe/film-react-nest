FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "build"]
RUN npm install -g serve
CMD ["serve", "-s", "dist", "-l", "80"]