'use strict';

/**
 * news-and-media service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::news-and-media.news-and-media');
