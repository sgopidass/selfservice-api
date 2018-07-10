module.exports = {
  server: {
    host: 'localhost',
    port: 3000,
  },
  sqlserver: {
    server: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
};
