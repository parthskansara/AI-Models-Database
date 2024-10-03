import { pool } from '../config/database.js'

const getModels = async (req, res) => {
    try{
        const results = await pool.query('SELECT * FROM "ai-models"')
        console.log(results)
        res.status(200).json(results)
    }
    catch{
        res.status(409).json({ error: error.message })
    }
}

export default {getModels};