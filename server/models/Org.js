const knex = require('../db/knex');

class Organization {

    static async create(username, password,org_name,about_org,adress,zip,cause) {
            // hash the plain-text password using bcrypt before storing it in the database
        // Query used to add info to the Org table in database and ?=placeholder for info
            const query = `INSERT INTO organization (username, password, org_name, about_org, adress, zip, cause)
        VALUES (?,?,?,?,?,?,?) RETURNING *`;
        // knex creates a connection to the Org table and database 
        const result = await knex.raw(query, [username, password,org_name,about_org,adress,zip,cause]);
        //Shows resuts after everything is done 
        const rawUserData = result.rows[0];
        return rawUserData;

    }


}

module.exports = Organization;
