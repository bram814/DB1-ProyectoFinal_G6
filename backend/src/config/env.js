module.exports = {
    NODE_ENV: process.env.NODE_ENV  || 'development',
    HOST: process.env.HOST          || 'localhost',
    PORT: process.env.PORT          || 5000,
    USERDB: process.env.USERDB      || 'useroracle',
    PASS: process.env.PASS          || 'password',
    CONN: process.env.CONN          || 'localhost:1521/ORCLCDB.localdomain'

  }