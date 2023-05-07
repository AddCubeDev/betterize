FROM bitnami/node:16.20.0
# Installing libvips-dev for sharp Compatibility
# RUN apt-get update && apt-get -y install zlib1g-dev libpng-dev libvips-dev

ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV

ENV ADDITIONAL_PATH=/app/node_modules/.bin
ENV PATH=$PATH:$ADDITIONAL_PATH

RUN ulimit -n 40000
RUN npm install -g npm@9.6.5
# RUN npm install -g sharp-cli

WORKDIR /app
# RUN chown node:node ./
# USER node

# RUN npm install --install-links