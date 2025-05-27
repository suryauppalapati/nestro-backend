process.loadEnvFile();

const config = {
  NODE_PORT: process.env.NODE_PORT,
  NODE_ENV: process.env.NODE_ENV,

  // DB Config
  DB_HOST: process.env.DB_HOST || "localhost",
  DB_USER: process.env.DB_USER || "root",
  DB_PASSWORD: process.env.DB_PASSWORD || "toor",
  DB_NAME: process.env.DB_NAME || "test_db",
};

export default config;
