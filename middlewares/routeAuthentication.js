/** 
 * Route Authentication Middleware
 */

// For routes that we do want only guests or residents to enter, and 
// you do need to be a certain user for access.
function isGuest(req, res, next) {
  if (!(req.user.userGroup === 'Guest')) {
    res.redirect('back');
    return
  }
  next();
}

function isResident(req, res, next) {
  if (!(req.user.userGroup === 'Resident')) {
    res.redirect('back');
    return
  }
  next();
}

// For routes that we do not want guests or residents to enter, but you also
// do not need to be a certain user for access.
function isNotLoggedIn(req, res, next) {
  if (req.user) {
    req.flash('doNotAllowSignUp', 'You cannot do that while logged in.')
    res.redirect('back');
    return
  }
  next();
}

module.exports = {
  // isLoggedIn: isLoggedIn,
  isNotLoggedIn: isNotLoggedIn,
  isGuest: isGuest,
  // isNotGuest: isNotGuest,
  isResident: isResident,
  // isNotResident: isNotResident
}
