const { Pool } = require('pg');

const URI = process.env.PG_URI;

const pool = new Pool({
  connectionString: URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('Executed Query:', text);
    return pool.query(text, params, callback);
  },
};

/*

Create Applications Table:

CREATE TABLE Applications(
   id SERIAL PRIMARY KEY,
   company VARCHAR NOT NULL,
   position VARCHAR NOT NULL,
   contact VARCHAR,
   notes VARCHAR,
   status VARCHAR NOT NULL,
   applied_at DATE NOT NULL DEFAULT CURRENT_DATE
);

*/
