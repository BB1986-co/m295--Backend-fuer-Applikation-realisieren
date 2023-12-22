# m295--Backend-fuer-Applikation-realisieren

Autor: Barbara Baerfuss

Erste Schritte:

1. Erstellen des repository mit Readmedatei und .gitIgnore Datei.
2. Klonen des repositorys auf Visual Studio Code.
3. Erstellen eines Containers in Docker, und prüfen ob er läuft.
4. Erste Ordnerstruktur anlegen (code/src, config, docs).
5. Installieren der benötigten erweiterungen mit npm install node express.
6. Installieren des Codeprüfers Plugin eslinc mit npm init @eslint/config.
7. Server verbindung auf Port 3000 erstellen und Testen.

# Server Starten
Der server wird mit 'node endpoints.js' gestartet.

# Endpunkte
Folgende Endpunkte sind definiert:
Tasks:
- get /tasks (alle Tasks aufrufen)
- post /tasks (neuer Task erstellen)
- get /tasks/:id (Task per id aufrufen)
- patch /tasks/:id (Task per id verändern)
- delete /tasks/:id (Task per id löschen)

Login:
- get /login (Einloggen)
- post /verify (Session verifizieren)
- delete /logout (Ausloggen)

# Dokumentation:

Die Dokumention ist im Ordner dosc als documentation.md abgelegt.


# Testing:
Die Test sind im Ornder Test zu finden Datei Testing.postman_collection.json.











