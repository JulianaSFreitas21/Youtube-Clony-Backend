import { pool } from "../config/db.js"

// CREATE
export async function createUser(req, res){
    try {
        const { name, email, password, channel_id } = req.body; 
        const [result] = await pool.query(
            "INSERT INTO users ( name, email, password, channel_id) VALUES ( ?, ?, ?, ?)",
            [ name, email, password, channel_id]
        );
        res.status(201).json({ id: result.insertId, message: "User creted sucessfully" });

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// READ
export async function getUsers(req, res){
    try{
        const [rows] = await pool.query("SELECT * FROM users");
        res.status(200).json(rows);
    }catch (err){
        res.status(500).json({ error: err.message });
    }
}

// UPDATE
export async function updateUser(req, res){
    try {
        const { id } = req.params;
        const { name, email, password } = req.body;
        await pool.query(
            "UPDATE users SET name = ?, email = ?, password = ? WHERE id_users = ?",
            [ name, email, password, id ]
        );
        res.json({ message: "User updated sucessfully" })
    } catch (error) {
        
    }
}

// DELETE

export async function deleteUser(req, res){
    try {
        const { id } = req.params;
        await pool.query("DELETE FROM users WHERE id_users = ?", [ id ])
        res.json({ message: "User deleted sucessfully" })
    } catch (error) {
        res.json({ message: "User updated sucessfully" })
    }
}