
import { Account, Client, ID, Databases, Storage, Query } from 'appwrite';




const client = new Client();

client
    .setEndpoint(String(process.env.NEXT_PUBLIC_APPWRITE_URL))
    .setProject(String(process.env.NEXT_PUBLIC_ENDPOINT));



const account = new Account(client);
const database = new Databases(client);
const storage = new Storage(client);
const unique_id = ID.unique()

export { client, account, database, storage, Query, unique_id }