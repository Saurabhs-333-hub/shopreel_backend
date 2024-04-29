import db from 'node-appwrite';

const client = new db.Client();
client.setEndpoint(`https://cloud.appwrite.io/v1`);
client.setProject('65e383b2d13acfe63484');
client.setKey(process.env.NEXT_PUBLIC_APPWRITE_API_KEY);

const database= new db.Databases(client);
const storage= new db.Storage(client);
const query= new db.Query();
const id=db.ID;
const account = new db.Account(client);
const exception=db.AppwriteException;

export {
    client,
    database,
    storage,
    query,
    id,
    account,
    exception
}