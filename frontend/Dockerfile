FROM node

WORKDIR /app/frontend
COPY package.json /app/frontend

RUN npm install
COPY . /app/frontend
RUN chmod 777 node_modules
EXPOSE 3000
CMD ["npm", "start"]