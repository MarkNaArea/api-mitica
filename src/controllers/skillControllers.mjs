import db from "../db/conn.mjs";
import pkg from 'jsonwebtoken';

// Get a list of 50 posts
export const getSkills = async (req, res) => {
    let collection = db.collection("skills");
    let results = await collection.find({}).toArray();

    res.send(results).status(200);
};


// Get a single post
export const getSkillById = async (req, res) => {
    let collection = db.collection("skills");
    let query = { _id: ObjectId(req.params.id) };
    let result = await collection.findOne(query);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
};


// Register a new Document
export const createSkill = async (req, res) => {
    let collection = db.collection("skills");
    let newDocument = req.body;
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
};


// Delete an entry
export const deleteSkill = async (req, res) => {
    const query = { _id: ObjectId(req.params.id) };

    const collection = db.collection("skills");
    let result = await collection.deleteOne(query);

    res.send(result).status(200);
};

export const updateSkill = async (req, res) => {
    let collection = db.collection("skills");
    let newDocument = req.body;

    const keysSkills = req.body;
    console.log(keysSkills);
    const filter = { _id: keysSkills._id };

    const skillToUpdate = await collection.replaceOne(
        filter,
        keysSkills
    );

    return successResponse(res, 202, { skill: skillToUpdate });
}
