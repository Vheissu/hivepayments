import config from './config';

import { MongoClient } from 'mongodb';

export async function find(collectionName: string, query: any) {
    const client = await MongoClient.connect(config.DATABASE.URL, { useNewUrlParser: true,  useUnifiedTopology: true }).catch(err => { console.log(err); });

    if (!client) {
        return;
    }

    try {
        const db = client.db(config.DATABASE.NAME);
        const collection = await db.collection(collectionName);

        return await collection.find(query).toArray();
    } catch (e) {
        console.error(e);
    } finally {
        client.close();
    }
}

export async function findOne(collectionName: string, query: any) {
    const client = await MongoClient.connect(config.DATABASE.URL, { useNewUrlParser: true,  useUnifiedTopology: true }).catch(err => { console.log(err); });

    if (!client) {
        return;
    }

    try {
        const db = client.db(config.DATABASE.NAME);
        const collection = await db.collection(collectionName);

        return await collection.findOne(query);
    } catch (e) {
        console.error(e);
    } finally {
        client.close();
    }
}

export async function insertOne(collectionName: string, doc: any) {
    const client = await MongoClient.connect(config.DATABASE.URL, { useNewUrlParser: true,  useUnifiedTopology: true }).catch(err => { console.log(err); });

    if (!client) {
        return;
    }

    try {
        const db = client.db(config.DATABASE.NAME);
        const collection = await db.collection(collectionName);

        return await collection.insertOne(doc);
    } catch (e) {
        console.error(e);
    } finally {
        client.close();
    }
}
export async function insertMany(collectionName: string, docs: any[]) {
    const client = await MongoClient.connect(config.DATABASE.URL, { useNewUrlParser: true,  useUnifiedTopology: true }).catch(err => { console.log(err); });

    if (!client) {
        return;
    }

    try {
        const db = client.db(config.DATABASE.NAME);
        const collection = await db.collection(collectionName);

        return await collection.insertMany(docs);
    } catch (e) {
        console.error(e);
    } finally {
        client.close();
    }
}

export async function update(collectionName: string, query: any, data: any) {
    const client = await MongoClient.connect(config.DATABASE.URL, { useNewUrlParser: true,  useUnifiedTopology: true }).catch(err => { console.log(err); });

    if (!client) {
        return;
    }

    try {
        const db = client.db(config.DATABASE.NAME);
        const collection = await db.collection(collectionName);

        return await collection.updateOne(query, data);
    } catch (e) {
        console.error(e);
    } finally {
        client.close();
    }
}

export async function remove(collectionName: string, query: any) {
    const client = await MongoClient.connect(config.DATABASE.URL, { useNewUrlParser: true,  useUnifiedTopology: true }).catch(err => { console.log(err); });

    if (!client) {
        return;
    }

    try {
        const db = client.db(config.DATABASE.NAME);
        const collection = await db.collection(collectionName);

        return await collection.deleteOne(query);
    } catch (e) {
        console.error(e);
    } finally {
        client.close();
    }
}

export async function createIndex(collectionName: string, query: any) {
    const client = await MongoClient.connect(config.DATABASE.URL, { useNewUrlParser: true,  useUnifiedTopology: true }).catch(err => { console.log(err); });

    if (!client) {
        return;
    }

    try {
        const db = client.db(config.DATABASE.NAME);
        const collection = await db.collection(collectionName);

        return collection.createIndex(query);
    } catch (e) {
        console.error(e);
    } finally {
        client.close();
    }
}