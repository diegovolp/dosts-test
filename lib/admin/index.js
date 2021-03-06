/**
 * Module dependencies.
 */

var express = require('express')
var forumRouter = require('lib/forum-router')

/**
 * Exports Application
 */

var app = module.exports = express()

app.get(forumRouter('/admin'), require('lib/layout'))
app.get(forumRouter('/admin/topics'), require('lib/layout'))
app.get(forumRouter('/admin/topics/:id'), require('lib/layout'))
app.get(forumRouter('/admin/topics/create'), require('lib/layout'))
app.get(forumRouter('/admin/tags'), require('lib/layout'))
app.get(forumRouter('/admin/tags/:id'), require('lib/layout'))
app.get(forumRouter('/admin/tags/create'), require('lib/layout'))
app.get(forumRouter('/admin/users'), require('lib/layout'))
app.get(forumRouter('/admin/users/create'), require('lib/layout'))
app.get(forumRouter('/admin/users/:id'), require('lib/layout'))
app.get(forumRouter('/admin/permissions'), require('lib/layout'))
