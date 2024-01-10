// Get a list of 50 posts
export const getUsers = async (req, res) => {
    let collection = await db.collection("users");
    let results = await collection.find({}).limit(50).toArray();

    res.send(results).status(200);
};


// Fetches the latest posts
export const getLatestPosts = async (req, res) => {
    let collection = await db.collection("users");
    let results = await collection
        .aggregate([
            { $project: { author: 1, title: 1, tags: 1, date: 1 } },
            { $sort: { date: -1 } },
            { $limit: 3 }
        ])
        .toArray();
    res.send(results).status(200);
};


// Get a single post
export const getSinglePost = async (req, res) => {
    let collection = await db.collection("users");
    let query = { _id: ObjectId(req.params.id) };
    let result = await collection.findOne(query);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
};


// Add a new document to the collection
export const addDocument = async (req, res) => {
    let collection = await db.collection("users");
    let newDocument = req.body;
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
};


// Delete an entry
export const deleteDocument = async (req, res) => {
    const query = { _id: ObjectId(req.params.id) };

    const collection = db.collection("users");
    let result = await collection.deleteOne(query);

    res.send(result).status(200);
};
