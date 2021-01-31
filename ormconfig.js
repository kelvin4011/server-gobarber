console.log('vc esta usando a url: ', process.env.DATABASE_URL);
module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false
    }
  },
  "entities": [
    "./dist/modules/**/infra/typeorm/entities/*.js"
  ],
  "migrations": [
    "./dist/shared/infra/typeorm/migrations/*.js"
  ],
  "cli": {
    "migrationsDir": "./src/shared/infra/typeorm/migrations"
  }
},
// {
//   "host": process.env.REDIS_HOST,
//   "port": process.env.REDIS_PORT,
//   "password": process.env.REDIS_PASS || undefined,
// },
{
  "name": "mongo",
  "type": "mongodb",
  "host": "localhost",
  "port": 27017,
  "database": "gobarber",
  "useUnifiedTopology": true,
  "entities": [
    "./src/modules/**/infra/typeorm/schemas/*.js"
  ]
}

