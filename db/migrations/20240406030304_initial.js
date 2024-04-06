/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
  .createTable('roommate', function (table) {
    table.increments('id').primary();
    table.string('name');
    table.string('gender');
    table.string('city');
    table.string('bio');
    table.string('important');

    table.timestamps(true, true);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
  .dropTable('roommate')
};
