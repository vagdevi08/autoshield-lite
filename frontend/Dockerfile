FROM node:18

WORKDIR /app
COPY . .

RUN npm install && npm run build

# Install a lightweight server to serve static files
RUN npm install -g serve

# Serve the static build
CMD ["serve", "-s", "build", "-l", "8080"]
