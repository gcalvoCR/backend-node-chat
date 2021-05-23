const credentials = {
  user: "NAMR",
  pass: "PASS",
  host: "HOSTNAME",
  database: "DB_NAME",
};

const config = {
  uri:
    process.env.DB_URL ||
    `mongodb+srv://${credentials.user}:${credentials.pass}@${credentials.host}/${credentials.database}?retryWrites=true&w=majority`,
  port: process.env.PORT || 3000,
  host: process.env.HOST || "http://localhost",
  publicRoute: process.env.PUBLIC_ROUTE || "/app",
  filesRoute: process.env.FILES_ROUTE || "files",
};

module.exports = config;
