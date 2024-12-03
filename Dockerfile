FROM node:20-alpine

RUN apk update && apk add

WORKDIR /usr/src/app

COPY . /usr/src/app

VOLUME fluig

RUN npm install -g @angular/cli@18

RUN npm install

EXPOSE 4200

# CMD ["ng", "serve", "--host", "0.0.0.0", "--live-reload"]
# CMD ["npm","start"]