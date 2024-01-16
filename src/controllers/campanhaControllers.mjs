import db from "../db/conn.mjs";
import pkg from 'jsonwebtoken';

// Get a list of 50 posts
export const getCampanhas = async (req, res) => {
    let collection = db.collection("campanhas");
    let results = await collection.find({}).toArray();

    res.send(results).status(200);
};


// Get a single post
export const getCampanhaById = async (req, res) => {
    let collection = db.collection("campanhas");
    let query = { _id: ObjectId(req.params.id) };
    let result = await collection.findOne(query);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
};


// Register a new Document
export const createCampanha = async (req, res) => {
    let collection = await db.collection("campanhas");
    let newDocument = req.body;
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
};


// Delete an entry
export const deleteCampanha = async (req, res) => {
    const query = { _id: ObjectId(req.params.id) };

    const collection = db.collection("campanhas");
    let result = await collection.deleteOne(query);

    res.send(result).status(200);
};

export const updateCampanha = async (req, res) => {
    let collection = await db.collection("campanhas");
    let newDocument = req.body;

    const keysCampanha = req.body;
    console.log(keysCampanha);
    const filter = { _id: keysCampanha._id };

    const campanhaToUpdate = await collection.replaceOne(
        filter,
        keysCampanha
    );

    return successResponse(res, 202, { campanha: campanhaToUpdate });
}
