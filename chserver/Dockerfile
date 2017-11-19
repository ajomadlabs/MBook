FROM node:carbon
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
ENV MOBNO=8086699507
ENV SMSPASSWORD=qwertyui
ENV SMSKEY=ajojoKnaF7AY6OUgh3Db8sCGIkvVP9
CMD ["npm","start"]
