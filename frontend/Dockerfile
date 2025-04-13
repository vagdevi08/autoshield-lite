FROM node:18

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

# Use a simple server to serve React build folder
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "3000"]
