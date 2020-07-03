module.exports = {
  is_production: process.env.NODE_ENV === 'production',
  GLOBAL: 'http://expressjs-sample-app.herokuapp.com',
  LOCAL: 'http://localhost',
  PORT: process.env.PORT || 8000
};