/** 
 * TODO: Route Authentication Middleware
 * 
 * [] Users who are not logged in should not access Guest or Resident private routes
 * [] Guests who are logged in should not access Resident private routes
 * [] Residents who are logged in should not access Guest private routes
 */
function redirectUserIfNotLoggedIn(req, res, next) {
  if (!req.user)
    res.redirect('back')
  next();
}

function blockGuestFromResidentRoutes(req, res, next) {
  if (req.user.userGroup === "Guest")
    res.redirect('/guest');
  next();
}

function blockResidentFromGuestRoutes(req, res, next) {
  if (req.user.userGroup === "Resident")
    res.redirect('/resident');
  next();
}

module.exports = {
  redirectUserIfNotLoggedIn: redirectUserIfNotLoggedIn,
  blockGuestFromResidentRoutes: blockGuestFromResidentRoutes,
  blockResidentFromGuestRoutes: blockResidentFromGuestRoutes,
}
