Endpunkte der Tasks

1. Endpunkt zum Aufrufen aller Tasks:
HTTP Methode: GET
Endpunkt: /tasks
Pfad: http://localhost:3000/tasks 
Daten: id : number, title : string, autor : string, erstellungsdatum : datum, erfüllungsdatum : null

Validierung:
- Wenn die Abfrage korrekt unktioniert wird der Status 200 zurückgeben.
- Sonst wird der status 500 zurückgegeben.

Rückgabe Status: 200, 500
Rückgabe Werte: JSON File mit Einrägen
_________________________________________________________________________________________________________

2. Endpunkt zum erstellen eines neuen Task:
HTTP Methode: POST
Endpunkt: /tasks
Pfad: http://localhost:3000/tasks 
Daten: id : number, title : string, autor : string, erstellungsdatum : datum, erfüllungsdatum : null

Validierung:
- Es wird ein neues Objekt erstellt, und zurückgesendet.
- Wenn das Objekt nicht erstellt werden kann wird der Status 500 zurückgesendet.

Rückgabe Status: 201, 500
Rückgabe Werte: Objekt inkl ID
_________________________________________________________________________________________________________

3. Endpunkt zum aufrufen eines bestimmten Task:
HTTP Methode: GET
Endpunkt: /tasks/:id?{id}
Pfad: http://localhost:3000/tasks 
Daten: id : number, title : string, autor : string, erstellungsdatum : datum, erfüllungsdatum : null

Validierung:
- Dem Task wird noch eine 'id' mitgegeben.
- Ist die Abfrage korrekt, wird der status 200 zurückgesendet.
- Bei eine id nicht gefunden wird der status 404 zurückgesendet.

Rückgabe Status: 200, 404
Rückgabe Werte: JSON Eintrag von id
_________________________________________________________________________________________________________

4. Endpunkt zum verändern eines Task:
HTTP Methode: PATCH
Endpunkt: /tasks/:id
Pfad: http://localhost:3000/tasks?{id} 

Daten: id : number, title : string, autor : string, erstellungsdatum : datum, erfüllungsdatum : null
Validierung:
- Die id und der Body eines Objectes welches die Änderungen enthält wird mitgesendet.
- Der Status 201 wird zurückgeschickt wenn alles OK ist.
- Wenn ein Fehler Auftritt kommt der Status 404 zurück.


Rückgabe Status: 201 , 404
Rückgabe Werte: das geänderte Objekt wird zurückgegeben
_________________________________________________________________________________________________________

5. Endpunkt zum löschen eines Tasks:
HTTP Methode: DELETE
Endpunkt: /tasks/:id
Pfad: http://localhost:3000/tasks?{id} 
Daten:id : number, title : string, autor : string, erstellungsdatum : datum, erfüllungsdatum : null

Validierung:
- Die id des zu löschenden Elementes wird mitgegeben.
- Der Status 201 wird zurückgeschickt wenn alles OK ist.
- Wenn ein Fehler Auftritt kommt der Status 404 zurück.

Rückgabe Status:200, 404
Rückgabe Werte: Das gelöschte Objekt wird zurückgegeben

------------------------------------------------------------------------------------------------------------

Endpunkte des Logins

1. Enpunkt mitgeben der Login Daten
HTTP Methode: POST
Endpunkt: /login/:{email}&{password}
Pfad: http://localhost:3000/login?{email}&?{password}
Daten: email = string, password = string

Validierung:
- Die eE-Mail Adresse und das Passwort wird zum erstellen der Session mitgegeben.
- Ist die Anmeldung erfolgreich wird der Status 200 zurückgesendet.
- Ist das Password oder die E-Mail Adresse falsch wird der Status 401 zurückgesendet.

Rückgabe Status:200, 401
Rückgabe Werte: Das Login ist erfolgreich oder nicht.
______________________________________________________________________________________________________________

2. Die Session wird verifiziert
HTTP Methode: GET
Endpunkt: /verify
Pfad: http://localhost:3000/verify
Daten:id : session : cookie, email = string

Validierung:
- Die Session wird an den Server geschickt
- Ist das Cookie richtig kommt der Status 200 zurück.
- Ist das Cookie falsch wird der Status 401 zurückgesendet.

Rückgabe Status:200, 401
Rückgabe Werte: Die Session wird bestätigt oder nicht.
______________________________________________________________________________________________________________

3. Der User wird abgemeldet
HTTP Methode: DELETE
Endpunkt: /logout
Pfad: http://localhost:3000/logout
Daten:id : session : null

Validierung:
- Die Session wird auf einen Null Wert gesetzt.
- Der Status 204 wird zurückgegeben wenn das Logout erfolgreich war.
- Bei einem Fehlerhaften ausloggen wird der Status 401 zurückgesendet.

Rückgabe Status:204, 401
Rückgabe Werte: Das gelöschte Objekt wird zurückgegeben
