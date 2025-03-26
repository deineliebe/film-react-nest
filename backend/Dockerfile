FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --force
COPY . .
RUN npm run build

FROM node:20-alpine as production
WORKDIR /app
COPY --from=builder /app/package*.json /app/
COPY --from=builder /app/public /app/public
RUN npm install --only=production
EXPOSE 3000
CMD ["node", "dist/main"]