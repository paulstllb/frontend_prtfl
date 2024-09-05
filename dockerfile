FROM node:16

# Setze das Arbeitsverzeichnis im Container
WORKDIR /app

# Kopiere package.json und package-lock.json in das Arbeitsverzeichnis
COPY package*.json ./

# Installiere Abhängigkeiten
RUN npm install

# Kopiere den Rest der Anwendungsdateien
COPY . .

# Baue die Anwendung für die Produktion
RUN npm run build

# Exponiere den Port, den die Anwendung verwendet
EXPOSE 5173

# Definiere den Befehl, um die Anwendung zu starten
CMD ["npm", "run", "dev" ]
