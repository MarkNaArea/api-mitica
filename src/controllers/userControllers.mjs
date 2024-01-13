// Get a list of 50 posts
import db from "../db/conn.mjs";

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

export const loginUser = async (req, res) => {
    let collection = db.collection("users");
    let results = await collection.find({}).toArray();

    // console.log(req.body) << Pra pegar o body da req
    const username = req.body.username
    const password = req.body.password
    let isLogged = false

    results.forEach(user => {
        if(user.username === username && user.password === password){
            isLogged = true
        }
    });
    
    if (isLogged) {
        res.status(200).json({ message: 'Logged in successfully' });
    } else {
        // Invalid username or password, return an error response
        res.status(401).json({ message: 'Invalid username or password' });
    }
}


// Register a new user in the system
export const registerUser = async (req, res) => {
    let collection = db.collection("users");
    let {username, password} = req.body;

    let existentUsers = await collection.find({}).toArray();
    let userExists = false

    //check if theres already an user with that username
    existentUsers.forEach(user => {
        if (user.username === username) {
            userExists = true
        }
    })
    
    if (!userExists) {
        let result = await collection.insertOne(req.body);
        res.send(result).status(204);
    } else {
        res.status(409).json({message: "Username already exists"})
    }
};


// Delete an entry
export const deleteDocument = async (req, res) => {
    const query = { _id: ObjectId(req.params.id) };

    const collection = db.collection("users");
    let result = await collection.deleteOne(query);

    res.send(result).status(200);
};
