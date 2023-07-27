import { MongoClient } from "mongodb"

export const connectDatabase = async() => {
    const client = await MongoClient.connect("mongodb+srv://mansihaldankar15:test1234@cluster0.w94w8dp.mongodb.net/?retryWrites=true&w=majority");

    return client
}

export const insertDocument = async(client, collection, document) => {
    const db = client.db();
  
    const result = await db.collection(collection).insertOne(document);
  
    return result;
  }
  