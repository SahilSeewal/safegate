/** 
 * TODO Route Authentication Middleware
 * This function should be used to protect all private Guest routes
 * from users who are not logged in as a guest. I need to learn more
 * about redirects before finishing this.
 */
function authenticateLocalGuest(req, res, next) {
  if (!req.user)
    res.redirect('/')
  if (req.user.userGroup !== "Guest")
    res.redirect('back')
  if (req.user.userGroup === "Guest")
    next();
}

module.exports = {
  authenticateLocalGuest: authenticateLocalGuest
}
