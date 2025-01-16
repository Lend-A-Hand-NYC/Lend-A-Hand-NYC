/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) { 
  return knex.schema.createTable( 'volunteer', (table)  => {

  table.increments();
  table.string ('first_name')
  table.string ('last_name')
  table.string ('username')
  table.string ('password')
  table.string ('zip')
  table.string ('skills')
  table.string ('heard_about')
  table.string ('interest')
  table.string ('availability')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('volunteer')
};
