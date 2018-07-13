/** 
 * Route Authentication Middleware
 * 
 * [] Users who are not logged in should not access Guest or Resident private routes
 * [] Guests who are logged in should not access Resident private routes
 * [] Residents who are logged in should not access Guest private routes
 */
function redirectUserIfNotLoggedIn(req, res, next) {
  if (!req.user)
    res.redirect('back');
  next();
}

module.exports = {
  redirectUserIfNotLoggedIn: redirectUserIfNotLoggedIn,
}
