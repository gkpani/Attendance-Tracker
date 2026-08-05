const { MongoClient } = require("mongodb");

const uri =
"mongodb+srv://gkandhapani_db_user:<password>@cluster0.r80dmqr.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log("Connected!");
    } catch (err) {
        console.log(err);
    } finally {
        await client.close();
    }
}

run();