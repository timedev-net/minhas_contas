FROM node:16

WORKDIR /usr/app

# COPY package*.json ./
COPY . .
RUN npm install

# RUN npm run build
# RUN cp ./.env.production ./build/.env
# RUN node build/server.js

EXPOSE 4000

CMD ["npm", "run", "start"]
