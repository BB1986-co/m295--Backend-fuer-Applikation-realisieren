const express = require('express');
const { userInfo } = require('os');
const app = express();
const endpoints = require('./endpoints');
app.use(express.json());
app.use('/login', endpoints);



// Login

app.post('/login/:{email}&{password}', function (request, response) {
	const { email, password } = request.body

	// Check the credentials against store
	if (email?.toLowerCase() == request.email && password == request.password) {
		// Link email to session
		request.session.email = email

		return response.status(200).json({ email: request.session.email })
	}
  return response.status(401).json({ error: "E-Mail oder Passwort ist falsch" })
});

app.get('/verify', function (request, response) {
	
	// Check if email is set in session
	if (request.session.email) {
		return response.status(200).json({ email: request.session.email })
	}

  return response.status(401).json({ error: "Not logged in" })
})

app.delete('/logout', function (request, response) {

	// Check if email is set in session
	if (request.session.email) {

		// Reset link of session to email
		request.session.email = null

		return response.status(204).send()
	}

  return response.status(401).json({ error: "Not logged in" })
})