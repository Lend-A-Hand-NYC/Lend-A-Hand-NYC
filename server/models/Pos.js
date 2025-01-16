const knex = require('../db/knex');

class Post {

    static async create(event_title, event_info, commitment_type, skills, address, city, state, zip, event_date, event_time, volunteers_needed) {
        const query = `INSERT INTO post (event_title, event_info, commitment_type, skills, address, city, state, zip, event_date, event_time, volunteers_needed)
        VALUES (?,?,?,?,?,?,?,?,?,?,?) RETURNING *`;
        const result = await knex.raw(query, [event_title, event_info, commitment_type, skills, address, city, state, zip, event_date, event_time, volunteers_needed]);
       return result.rows[0];
    
    }

    static async updatePost (event_title, event_info, commitment_type, skills, address, city, state, zip, event_date, event_time, volunteers_needed, id) {
        const query = `UPDATE post
        SET event_title = ?,event_info = ?, commitment_type = ?, skills = ?, address = ?, city = ?, state = ?, zip = ?, event_date = ?, event_time = ?, volunteers_needed = ?
        WHERE id = ?
        RETURNING *;`;
        const result = await knex.raw(query, [event_title, event_info, commitment_type, skills, address, city, state, zip, event_date, event_time, volunteers_needed,id]);
       return result.rows[0];
    
    }
    

    static async getAll() {
        const query = `SELECT * FROM post ORDER BY event_date DESC`; 
        const result = await knex.raw(query);
        return result.rows;
    }

    static async delete(id) {
        const query = `DELETE FROM post WHERE id = ?`
        const result = await knex.raw(query, [id]);
        return result.rows
    }
}

module.exports = Post;


// const knex = require('../db/knex');

// class Post {

//     static async create(event_title,event_info,commitment_type,skills,address, city,state, zip, event_date, event_time, volunteers_needed) {
//             // hash the plain-text password using bcrypt before storing it in the database
//         // Query used to add info to the Org table in database and ?=placeholder for info
//             const query = `INSERT INTO post (event_title,event_info,commitment_type,skills,address, city,state, zip, event_date, event_time, volunteers_needed)
//         VALUES (?,?,?,?,?,?,?,?,?,?,?) RETURNING *`;
//         // knex creates a connection to the Org table and database 
//         const result = await knex.raw(query, [event_title,event_info,commitment_type,skills,address, city,state, zip, event_date, event_time, volunteers_needed]);
//         //Shows resuts after everything is done 
//         const rawUserData = result.rows[0];
//         return rawUserData;

//     }


// }

// module.exports = Post;