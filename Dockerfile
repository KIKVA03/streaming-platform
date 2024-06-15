FROM node:lts-alpine

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install 

COPY . .

# At first time migrate the database before that
RUN npx prisma generate 

EXPOSE 3000

CMD ["npm", "run", "dev"]
# CMD ["docker-entrypoint.sh"]