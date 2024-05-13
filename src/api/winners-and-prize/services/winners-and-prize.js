'use strict';

/**
 * winners-and-prize service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::winners-and-prize.winners-and-prize');
