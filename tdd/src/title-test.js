const React = require('react');
const ReactDomServer = require('react-dom/server');
const $ = require('whacko');

const Title = require('./title');

const TitleComponent = ReactDomServer.renderToStaticMarkup(
  React.createElement(Title)
  )

console.log($(TitleComponent).get(0).tagName)