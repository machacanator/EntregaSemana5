const express = require('express');
const passport = require('passport');

const router = express.Router();

router.post('/register', (req, res, next) => {
  // Invocamos a la autenticación de Passport
  passport.authenticate('register', (error, user) => {
    // Si hay un error, renderizamos de nuevo el formulario con un error
    if (error) {
			return res.render('register', { error: error.message });    
		}

    // Si no hay error, redijimos a los usuarios a la ruta que queramos
    return res.redirect('/users');
  })(req); // ¡No te olvides de invocarlo aquí!
});

module.exports = router;