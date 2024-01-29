import db from "../db/conn.mjs";
import pkg from 'jsonwebtoken';

// Get a list of 50 posts
export const getRaces = async (req, res) => {
    let collection = db.collection("wiki_races");
    let results = await collection.find({}).toArray();

    res.send(results).status(200);
};


// Get a single post
export const getRaceById = async (req, res) => {
    let collection = db.collection("wiki_races");
    let query = { _id: ObjectId(req.params.id) };
    let result = await collection.findOne(query);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
};


// Register a new Document
export const createRace = async (req, res) => {
    let collection = db.collection("wiki_races");
    let newDocument = req.body;
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
};


// Delete an entry
export const deleteRace = async (req, res) => {
    const query = { _id: ObjectId(req.params.id) };

    const collection = db.collection("wiki_races");
    let result = await collection.deleteOne(query);

    res.send(result).status(200);
};

export const updateRace = async (req, res) => {
    let collection = db.collection("wiki_races");
    let newDocument = req.body;

    const keysRaces = req.body;
    console.log(keysRaces);
    const filter = { _id: keysRaces._id };

    const racesToUpdate = await collection.replaceOne(
        filter,
        keysRaces
    );

    return successResponse(res, 202, { skill: racesToUpdate });
}
