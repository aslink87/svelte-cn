FROM node:19-alpine as build

WORKDIR /
COPY package*.json ./
# RUN npm config set python python3
RUN apk add --no-cache python3 py3-pip make g++
RUN npm install

COPY . .
RUN npx prisma generate

RUN npm run build


FROM node:19-alpine

WORKDIR /

COPY --from=build /build .

COPY package*.json ./
RUN npx prisma generate
RUN apk add --no-cache python3 py3-pip make g++
RUN npm install

CMD ["node", "./index.js"]
