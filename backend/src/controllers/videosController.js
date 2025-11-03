import { pool } from "../config/db.js";

// CREATE
export async function createVideo(req, res){
    try {
        const { 
            title,
            views,
            channel_id,
            status,
            thumbnail_image,
            description,
            url,
            qty_linkes,
            qty_unlinkes,
            music_name,
            is_short
        } = req.body;
        const [result] = await pool.query(
            "INSERT INTO youtube_db.videos(title, views, channel_id, status, thumbnail_image, description, url, qty_likes, qty_unlikes, music_name, is_short)  VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [
                title,
                views,
                channel_id,
                status,
                thumbnail_image,
                description,
                url,
                qty_linkes,
                qty_unlinkes,
                music_name,
                is_short
            ]
        )
        res.status(201).json({ id: result.insertId, message: "Video created sucessfully" })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// READ
export async function getVideos(req, res){
    try {
        const [rows] = await pool.query("SELECT * FROM videos");
        res.status(200).json(rows)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// UPDATE
export async function updateVideo(req, res){
    try {
        const { id } = req.params;
        const { 
            title,
            views,
            channel_id,
            status,
            thumbnail_image,
            description,
            url,
            qty_linkes,
            qty_unlinkes,
            music_name 
        } = req.body;
        await pool.query(
            "UPDATE videos SET title = ?, views = ?, channel_id = ?, status = ?, thumbnail_image = ?, description = ?, url = ?, qty_linkes = ?, qty_unlinkes = ?, music_name WHERE id_videos = id",
            [
                title,
                views,
                channel_id,
                status,
                thumbnail_image,
                description,
                url,
                qty_linkes,
                qty_unlinkes,
                music_name,
                id
            ]
        );
        res.status(200).json({ message: "Video updated sucessfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// DELETE
export async function deleteVideo(req, res) {
    try {
        const { id } = req.params;
        await pool.query("DELETE FROM video WHERE id_videos = ?", [ id ]);
        res.status(200).json({ massage: "Video deleted sucessfully" })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}