FROM bitnami/node:16.20.0

ENV ADDITIONAL_PATH=/app/node_modules/.bin
ENV PATH=$PATH:$ADDITIONAL_PATH

WORKDIR /app
