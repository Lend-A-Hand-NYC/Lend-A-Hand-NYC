/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('organization', (table) => {
        table.increments();
        table.string('username')
        table.string('password')
        table.string('org_name')
        table.string('about_org')
        table.string('adress')
        table.string('zip')
        table.string('cause')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('organization');
};
