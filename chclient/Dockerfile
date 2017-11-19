FROM nginx
RUN apt-get update
COPY ./dist /usr/share/nginx/html
COPY carehack.conf /etc/nginx/conf.d/default.conf
EXPOSE 80  

