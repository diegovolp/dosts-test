/**
 * Module dependencies.
 */

var config = require('lib/config')
var express = require('express')
var app = module.exports = express()

app.get('/help', require('lib/layout'))
app.get('/help/markdown', require('lib/layout'))
if (config.termsOfService) {
  app.get('/help/terms-of-service', require('lib/layout'))
}
if (config.privacyPolicy) {
  app.get('/help/privacy-policy', require('lib/layout'))
}
if (config.frequentlyAskedQuestions) {
  app.get('/help/faq', require('lib/layout'))
}
if (config.glossary) {
  app.get('/help/glossary', require('lib/layout'))
}
