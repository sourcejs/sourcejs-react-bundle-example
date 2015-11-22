// Script for pre-building webpack bundle, before running in Heroku and other containers
if (process.env.NODE_ENV === 'production') {
  require('sourcejs-react-styleguidist/core/build.js');
}
