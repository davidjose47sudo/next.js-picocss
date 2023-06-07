let dataConection:object
if (typeof (process.env.DB_PORT) === "number") {
  dataConection = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    ssl: true,
  }
}
else {
  dataConection = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: 5432,
    database: process.env.DB_DATABASE,
    ssl: true,
  }
}

export default dataConection;
