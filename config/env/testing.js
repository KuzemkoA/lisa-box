'use strict'

const winston = require('winston')

module.exports = {

  log: {
    logger: new winston.Logger({
      level: 'infos',
      exitOnError: false,
      transports: [
        new winston.transports.Console({
          timestamp: true
        })
      ]
    })
  },
  database: {
    stores: {

      /**
       * Define a store called "local" which uses SQLite3 to persist data.
       */
      sqlite: {
        database: 'lisa',
        storage: './test/lisa.sqlite',
        host: '127.0.0.1',
        dialect: 'sqlite',
        logging: false
      }
    },

    models: {
      defaultStore: 'sqlite',
      migrate: 'drop'
    }
  }

}
