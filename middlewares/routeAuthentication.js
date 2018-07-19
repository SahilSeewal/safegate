/** 
 * Route Authentication Middleware
 */

function isLoggedIn(req, res, next) {

}

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

// These are for routes that we do not want guests or residents to enter, but you also
// do not need to be a certain user for access.
function isNotLoggedIn(req, res, next) {
  if (req.user) {
    req.flash('doNotAllowSignUp', 'You cannot do that while logged in!')
    res.redirect('back');
    return
  }
  next();
}

function isNotGuest(req, res, next) {
  if (req.user.userGroup === 'Guest') {
    res.redirect('back');
    return
  }
  next();
}

function isNotResident(req, res, next) {
  if (req.user.userGroup === 'Resident') {
    res.redirect('back');
    return
  }
  next();
}

module.exports = {
  isLoggedIn: isLoggedIn,
  isNotLoggedIn: isNotLoggedIn,
  isGuest: isGuest,
  isNotGuest: isNotGuest,
  isResident: isResident,
  isNotResident: isNotResident
}
