/* created by sgopidass */

const mssql = require('mssql');
const config = require('./../../config/default');
const logger = require('./../../lib/logger');

async function getRecordset(authorId = 0) {
  return new Promise(((resolve, reject) => {
    mssql.connect(config.sqlserver, (err) => {
      if (err) {
        logger.info(err);
        reject(err);
      }
      logger.info('connected to sql server');
      const request = new mssql.Request();
      const sql = `SELECT * FROM [dbo].[authors] where author_id=${authorId}`;
      request.query(sql, (error, result) => {
        logger.info(`Running SQL query:${sql}`);
        if (error) {
          logger.info(error);
          reject(err);
        }
        resolve({ data: result.recordset });
      });
    });
  }));
}
module.exports = { getRecordset };
