'use strict'

/**
 * Server Configuration
 * (app.config.realtime)
 *
 * Configure the Primus Websockets
 *
 * @see {@link https://github.com/jaumard/trailpack-twilio}
 */
module.exports = {
  primus: {
    options: {
      transformer: 'websockets'
    }
  }
}
