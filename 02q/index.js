const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string
const uri = "mongodb://localhost:27017";
      
const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('frutasDb');
    const frutas = database.collection('frutas');

    // Queries for a movie that has a title value of 'Back to the Future'
    const query = { name: 'Banana' };
    const fruta = await frutas.findOne(query);

    console.log(fruta);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);