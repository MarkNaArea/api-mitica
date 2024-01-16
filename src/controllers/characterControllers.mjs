import db from "../db/conn.mjs";
import pkg from 'jsonwebtoken';

// Get a list of 50 posts
export const getCharacter = async (req, res) => {
    let collection = db.collection("characters");
    let results = await collection.find({}).toArray();

    res.send(results).status(200);
};


// Get a single post
export const getCharacterById = async (req, res) => {
    let collection = db.collection("characters");
    let query = { _id: ObjectId(req.params.id) };
    let result = await collection.findOne(query);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
};


// Register a new Document
export const createCharacter = async (req, res) => {
    let collection = db.collection("characters");
    let newDocument = req.body;
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
};


// Delete an entry
export const deleteCharacter = async (req, res) => {
    const query = { _id: ObjectId(req.params.id) };

    const collection = db.collection("characters");
    let result = await collection.deleteOne(query);

    res.send(result).status(200);
};

export const updateCharacter = async (req, res) => {
    let collection = db.collection("characters");
    let newDocument = req.body;

    const keysCharacter = req.body;
    console.log(keysCharacter);
    const filter = { _id: keysCharacter._id };

    const characterToUpdate = await collection.replaceOne(
        filter,
        keysCharacter
    );

    return successResponse(res, 202, { characters: characterToUpdate });
}
