FROM node:16-alpine as builder

WORKDIR /vue

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine as production-build
COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /vue/dist /usr/share/nginx/html

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]