FROM node:14
COPY ./ /usr/src/app
WORKDIR /usr/src/app
RUN npm install code-executor

CMD ["node","worker.js"]