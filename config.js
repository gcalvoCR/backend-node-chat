const config = {
  uri: process.env.DB_URL || 'mongodb://127.0.0.1:27017/my_database',
  port: process.env.PORT || 8080,
  host: process.env.HOST || "http://localhost",
  publicRoute: process.env.PUBLIC_ROUTE || "/app",
  filesRoute: process.env.FILES_ROUTE || "files",
  secret: process.env.SECRET || 'supersecret',
  secured: process.env.SECURED || false
};

module.exports = config;

// URI FormData
// `mongodb+srv://${credentials.user}:${credentials.pass}@${credentials.host}/${credentials.database}?retryWrites=true&w=majority`,
