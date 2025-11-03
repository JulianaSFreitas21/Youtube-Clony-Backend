import { pool } from "../config/db.js";

// CREATE
export async function createComment(req, res) {
    try {
        const { 
            body, 
            comment_id, 
            video_id, 
            user_id, 
            qty_likes, 
            qty_unlikes, 
            respond 
        } = req.body;

        const [result] = await pool.query(
            "INSERT INTO comments (body, comment_id, video_id, user_id, qty_likes, qty_unlikes, respond) VALUES ( ?, ?, ?, ?, ?, ?, ?)",
            [ body, comment_id, video_id, user_id, qty_likes, qty_unlikes, respond ]
        );
        res.status(201).json({ id: result.insertId, message: "Comment created sucessfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// READ
export async function getComment(req, res){
    try {
        const [rows] = await pool.query("SELECT * FROM comments");
        res.status(200).json(rows)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// UPDATE
export async function updateComment(req, res){
    try{
        const { id } = req.params;
        const { 
            body, 
            comment_id, 
            video_id, 
            user_id, 
            qty_likes, 
            qty_unlikes, 
            respond 
        } = req.body;
        await pool.query(
            "UPDATE comments SET body = ?, comment_id = ?, video_id = ?, user_id = ?, qty_likes = ?, qty_unlikes = ?, respond = ? WHERE id_comments = id",
            [ 
                body, 
                comment_id, 
                video_id, 
                user_id, 
                qty_likes, 
                qty_unlikes, 
                respond,
                id
            ]
        );
        res.status(200).json({ message: "Comment updated sucessfully" });
    } catch(err) {
        res.status(500).json({ error: err.message});
    }
}

// DELETE
export async function deleteComment(req, res){
    try {
        const { id } = req.params;
        await pool.query("DELETE FROM comments WHERE id_comments = id", [ id ]);
        res.status(200).json({ message: "Comment deleted sucessfully"});
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}