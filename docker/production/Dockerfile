FROM node:19-alpine as build
WORKDIR /

COPY package*.json ./
COPY static ./
COPY prisma ./
RUN apk add --no-cache python3 py3-pip make g++
RUN npm install --force
COPY . .
RUN npx prisma generate
RUN npm run build

FROM node:19-alpine
WORKDIR /

COPY --from=build /build .
COPY package*.json ./
COPY prisma ./
RUN apk add --no-cache python3 py3-pip make g++
RUN npm install --force
RUN npx prisma generate

ENV HOST=0.0.0.0
EXPOSE 4173
CMD ["node", "./index.js"]
