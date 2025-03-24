FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["node", "dist/main"]

FROM node:alpine AS production
WORKDIR /app
COPY --from=build /app/dist /dist
COPY --from=build /app/package*.json /app/
COPY --from=build /app/public /app/public
EXPOSE 3000
CMD ["node", "dist/index.js"]