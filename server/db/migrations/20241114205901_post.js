/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable( 'post', (table)  => {

        table.increments();
        table.string ('event_title')
        table.string ('event_info')
        table.string ('commitment_type')
        table.string ('skills')
        table.string ('address')
        table.string ('city')
        table.string ('state')
        table.string ('zip')
        table.string ('event_date')
        table.string ('event_time')
        table.string ('volunteers_needed')
        })
};


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('post')

};
