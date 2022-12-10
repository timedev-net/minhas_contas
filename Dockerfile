FROM node:18

WORKDIR /usr/app

# COPY package*.json ./
COPY . .
RUN npm install

# RUN npm run build
# RUN cp ./.env.production ./build/.env
# RUN node build/server.js
RUN npx prisma generate
EXPOSE 4000

CMD ["npm", "run", "start"]



# docker run -d --restart always --name minhas_contas_api -p 4000:4000 minhas_contas_api