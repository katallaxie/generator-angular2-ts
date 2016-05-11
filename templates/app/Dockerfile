# To build and run with Docker:
#
#  $ docker build -t angular2-ts .
#  $ docker run -it --rm angular2-ts
#
FROM node:latest

EXPOSE 8080

RUN mkdir -p /app /home/nodejs && \
    groupadd -r nodejs && \
    useradd -r -g nodejs -d /home/nodejs -s /sbin/nologin nodejs && \
    chown -R nodejs:nodejs /home/nodejs

WORKDIR /app
RUN npm i --unsafe-perm=true -g live-server

COPY www/ ./
RUN chown -R nodejs:nodejs /app

USER nodejs

CMD live-server
