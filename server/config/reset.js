import { pool } from './database.js'
import './dotenv.js';
import listData from '../data/lists.js'

async function createModelsTable () {
    const createTableQuery = `
        DROP TABLE IF EXISTS "ai-models";

        CREATE TABLE IF NOT EXISTS "ai-models" (
            id SERIAL PRIMARY KEY,
            modelName VARCHAR(255) NOT NULL,
            developer VARCHAR(20) NOT NULL,
            primaryUseCase VARCHAR(255) NOT NULL,
            releaseYear INTEGER NOT NULL
        )
    `;

    try{
        const results = await pool.query(createTableQuery)
        console.log("Models table created successfully!")
    }
    catch(err){
        console.error("Error: ", err)
    }

}

async function seedModelsTable() {
    await createModelsTable();
    listData.forEach((model) => {
        const insertQuery = {
            text: 'INSERT INTO "ai-models" (modelName, developer, primaryUseCase, releaseYear) VALUES ($1, $2, $3, $4)',
        }

        const values = [
            model.modelName,
            model.developer,
            model.primaryUseCase,
            model.releaseYear
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err){
                console.error("Error inserting model: ", err)
                return
            }
            console.log(`${model.modelName} added successfully!`)
        })
    })
}

seedModelsTable()

