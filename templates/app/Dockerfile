# To build and run with Docker:
#
#  $ docker build -t angular2-ts .
#  $ docker run -it --rm -p 3000:3000 -p 3001:3001 angular2-ts
#
FROM node:latest

# Who are the important guys?
MAINTAINER Döll, Sebastian "sebastian@pixelmilk.com"

EXPOSE 8080 8081

RUN mkdir -p /app /home/nodejs && \
    groupadd -r nodejs && \
    useradd -r -g nodejs -d /home/nodejs -s /sbin/nologin nodejs && \
    chown -R nodejs:nodejs /home/nodejs

WORKDIR /app
RUN npm i -g grunt-cli \
  jspm \
  eslint \
  typings \
  typescript \
  plato
# COPY Gruntpackage.json typings.json /app/
# RUN npm install --unsafe-perm=true
#
# COPY . /app
# RUN chown -R nodejs:nodejs /quickstart
USER nodejs

CMD grunt fun
