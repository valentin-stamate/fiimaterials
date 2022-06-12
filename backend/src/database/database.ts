import {Db, MongoClient} from "mongodb";
require('dotenv').config();

const env = process.env;

const uri = env.DB_URI as string;
const client = new MongoClient(uri);

export let database: Db = {} as Db;

export async function connectToMongo() {
    try {
        await client.connect();
        database = client.db('FIIMaterialsDB');

        console.log('Successfully connected with the MongoDB');
    } catch (err) {
        console.log(err);
    }
}

export enum MongoCollection {
    MATERIALS = 'materials',
    FEEDBACK = 'feedback',
}
