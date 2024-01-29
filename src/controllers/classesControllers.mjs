import db from "../db/conn.mjs";
import pkg from 'jsonwebtoken';

// Get a list of 50 posts
export const getClasses = async (req, res) => {
    let collection = db.collection("wiki_classes");
    let results = await collection.find({}).toArray();

    res.send(results).status(200);
};


// Get a single post
export const getClassById = async (req, res) => {
    let collection = db.collection("classes");
    let query = { _id: ObjectId(req.params.id) };
    let result = await collection.findOne(query);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
};


// Register a new Document
export const createClass = async (req, res) => {
    let collection = db.collection("classes");
    let newDocument = req.body;
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
};


// Delete an entry
export const deleteClass = async (req, res) => {
    const query = { _id: ObjectId(req.params.id) };

    const collection = db.collection("classes");
    let result = await collection.deleteOne(query);

    res.send(result).status(200);
};

export const updateClass = async (req, res) => {
    let collection = db.collection("classes");
    let newDocument = req.body;

    const keysClasses = req.body;
    console.log(keysClasses);
    const filter = { _id: keysClasses._id };

    const classesToUpdate = await collection.replaceOne(
        filter,
        keysClasses
    );

    return successResponse(res, 202, { skill: classesToUpdate });
}
