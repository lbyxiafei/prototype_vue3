FROM node:16.16-alpine as builder

WORKDIR /vue

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine as production-build

RUN rm /etc/nginx/conf.d/default.conf
COPY ./.nginx/nginx.conf /etc/nginx/conf.d

RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /vue/dist /usr/share/nginx/html

COPY --from=builder /vue .

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]