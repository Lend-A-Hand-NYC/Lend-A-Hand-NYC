const knex = require('../db/knex');

class Volunteer {

    static async create(first_name,last_name,username,password,zip,skills,heard_about,interest,availability) {
            // hash the plain-text password using bcrypt before storing it in the database
        // Query used to add info to the Org table in database and ?=placeholder for info
            const query = `INSERT INTO volunteer (first_name,last_name,username,password,zip,skills,heard_about,interest,availability)
        VALUES (?,?,?,?,?,?,?,?,?) RETURNING *`;
        // knex creates a connection to the Org table and database 
        const result = await knex.raw(query, [first_name,last_name,username,password,zip,skills,heard_about,interest,availability]);
        //Shows resuts after everything is done 
        const rawUserData = result.rows[0];
        return rawUserData;

    }


}

module.exports = Volunteer;