FROM node:9.2.1-alpine
WORKDIR /CODE
RUN npm config set registry https://registry.npm.taobao.org && npm install
COPY . .
EXPOSE 5400
CMD make server