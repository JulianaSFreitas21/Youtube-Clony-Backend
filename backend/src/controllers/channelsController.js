import { pool } from "../config/db.js"

// CREATE
export async function createChannel(req, res) {
    try{
        const { name, followers, image } = req.body;
        const [result] = await pool.query(
            "INSERT INTO channels (name, followers, image) VALEUS ( ?, ?, ?)",
            [ name, followers, image ]
        );
        res.status(201).json({ id: result.insertId, message: "Channel created sucessfully"})
    }catch (err){
        res.status(500).json({ error: err.message });
    }
}

// READ
export async function getChannels(req, res){
    try {
        const [rows] = await pool.query("SELECT * FROM channels")
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ error: err.message });
    }
}

// UPDATE
export async function updateChannel(req, res) {
    try {
        const { id } = req.params;
        await pool.query("DELETE FROM channels WHERE id_channels = ?", [ id ]);
        res.status(200).json({ message: "Channel updated sucessfully" })
    } catch (error) {
        res.status(500).json({ error: err.message });
    }
}

// DELETE
export async function deleteChannel(req, res) {
    try {
        const { id } = req.params;
        await pool.query("DELETE FROM channels WHERE id_channels = ?", [ id ]);
        res.status(200).json({ message: "Channel deleted sucessfully" })
    } catch (error) {
        
    }
}
