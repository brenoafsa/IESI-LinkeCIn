FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . . 

RUN npx prisma generate --schema=db/prisma/schema.prisma

ENV PORT=3001

EXPOSE 3001 

CMD ["sh", "-c", "npx prisma migrate deploy --schema=db/prisma/schema.prisma && npm start"]