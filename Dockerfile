FROM node:16.16.0-alpine

RUN set -e \
; apk upgrade -U \
; apk add ca-certificates ffmpeg mediainfo \
; rm -rf /var/cache/*

RUN npm install --verbose --location=global @remix-run/serve@1.6.8
RUN npm install --verbose --location=global pnpm@7.9.0

WORKDIR /app
COPY ./package.json ./pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY ./ ./
RUN pnpm run build

ENV NODE_ENV=production

CMD pnpm run start
