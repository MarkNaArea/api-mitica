// Get a list of 50 posts
import db from "../db/conn.mjs";
import pkg from 'jsonwebtoken';

export const getCharacterInvites = async (req, res) => {
    let collection = db.collection("campaign_invites");
    let results = await collection.find({}).toArray();

    res.send(results).status(200);
};


// Get a single post
export const getCharacterInvitesByUserId = async (req, res) => {
    let collection = db.collection("campaign_invites");
    let query = { userId: ObjectId(req.params.id) };
    let result = await collection.find(query).toArray();

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
};


// Register a new Document
export const createharacterInvite = async (req, res) => {
    let collection = db.collection("campaign_invites");
    let newDocument = req.body;
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
};


// Delete an entry
export const deleteCharacterInvite = async (req, res) => {
    const query = { _id: ObjectId(req.params.id) };

    const collection = db.collection("campaign_invites");
    let result = await collection.deleteOne(query);

    res.send(result).status(200);
};
