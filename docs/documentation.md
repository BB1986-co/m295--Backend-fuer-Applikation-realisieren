Endpunkte der Tasks

1. Endpunkt zum Aufrufen aller Tasks:
HTTP Methode: GET
Endpunkt: /tasks
Pfad: http://localhost:3000/tasks 
Daten: id : number, title : string, autor : string, erstellungsdatum : datum, erfüllungsdatum : null

Validierung:
- Wenn die Abfrage korrekt unktioniert wird der Status 200 zurückgeben.
- sonst wird der status 500 zurückgegeben

Rückgabe Status: 200, 500
Rückgabe Werte: JSON File mit Einrägen
_________________________________________________________________________________________________________

2. Endpunkt zum erstellen eines neuen Task:
HTTP Methode: POST
Endpunkt: /tasks
Pfad: http://localhost:3000/tasks 
Daten: id : number, title : string, autor : string, erstellungsdatum : datum, erfüllungsdatum : null

Validierung:
- Es wird ein neues Objekt erstellt, und zurückgesendet
- Wenn das Objekt nicht erstellt werden kann wird der Status 500 zurückgesendet

Rückgabe Status: 200, 500
Rückgabe Werte: Objekt inkl ID
_________________________________________________________________________________________________________

3. Endpunkt zum aufrufen eines bestimmten Task:
HTTP Methode: GET
Endpunkt: /tasks/:id
Pfad: http://localhost:3000/tasks 
Daten: id : number, title : string, autor : string, erstellungsdatum : datum, erfüllungsdatum : null

Validierung:
- dem Task wird noch eine 'id' mitgegeben

Rückgabe Status:
Rückgabe Werte:
_________________________________________________________________________________________________________

4. Endpunkt zum verändern eines Task:
HTTP Methode: GET
Endpunkt: /tasks
Pfad: http://localhost:3000/tasks 
Daten:
Validierung:
Rückgabe Status:
Rückgabe Werte:
_________________________________________________________________________________________________________

5. Endpunkt zum löschen eines Tasks:
HTTP Methode: GET
Endpunkt: /tasks
Pfad: http://localhost:3000/tasks 
Daten:
Validierung:
Rückgabe Status:
Rückgabe Werte: