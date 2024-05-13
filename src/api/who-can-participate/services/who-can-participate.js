'use strict';

/**
 * who-can-participate service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::who-can-participate.who-can-participate');
