const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string
const uri = " mongodb://127.0.0.1:27017>";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('frutasDb');
    const frutas = database.collection('frutas');

    // Queries for a movie that has a title value of 'Back to the Future'
    const query = { name: 'Banana' };
    const fruta = await movies.findOne(query);

    console.log(fruta);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);