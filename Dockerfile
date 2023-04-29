FROM bitnami/node:16.20.0

ENV ADDITIONAL_PATH=/app/node_modules/.bin
ENV PATH=$PATH:$ADDITIONAL_PATH

WORKDIR /vue3-circle-progress
COPY ./vue3-circle-progress/package.json .
COPY ./vue3-circle-progress/package-lock.json .
COPY ./vue3-circle-progress/dist ./dist
WORKDIR /app
