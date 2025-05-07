const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string
const uri = "mongodb://localhost:27017";
      
const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('frutasDb');
    const frutas = database.collection('frutas');

    const novaFruta = {
      name: 'Uva',
      price: 2.5,
    }
    const result = await frutas.insertOne(novaFruta);
    console.log(`A new fruta was inserted with the _id: ${result.insertedId}`);
    // Queries for a movie that has a title value of 'Back to the Future'
    
  } finally {
    await client.close();
  }
}
run().catch(console.dir);