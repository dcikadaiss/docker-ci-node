# Image de base
FROM node:18-alpine

# Répertoire de travail
WORKDIR /app

# Copier package.json et installer les dépendances
COPY package*.json ./
RUN npm install

# Copier le code source
COPY . .

# Exposer le port
EXPOSE 3000

# Commande de démarrage
CMD ["npm", "start"]
