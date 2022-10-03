const cookieController = {};

cookieController.setCookie = (req, res, next) => {
  res.cookie('TasselledWobblegong', 
    Math.floor( Math.random() * 100 ).toString(), {
      expires: new Date(Date.now() + 900000),
      httpOnly: true
    }
  );
  return next();
};

cookieController.setSSIDCookie = (req, res, next) => {
  res.cookie('ssid', res.locals.username, {
    expires: new Date(Date.now() + 900000)
  });
  return next();
};

cookieController.setSSIDCookieAuth = (req, res, next) => {
  res.cookie('ssid', res.locals.token, {
    expires: new Date(Date.now() + 900000)
  });
  return next();
};

cookieController.deleteSSIDCookie = (req, res, next) => {
  res.cookie('ssid', '');
  return next();
};

module.exports = cookieController;