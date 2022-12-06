FROM node:12-alpine

WORKDIR /usr/src/app

RUN rm -f package-lock.json

COPY package.json /usr/src/app/
RUN npm install && npm cache clean --force
COPY . /usr/src/app

HEALTHCHECK CMD ["npm", "run", "healthcheck"]
CMD ["npm", "run", "start"]