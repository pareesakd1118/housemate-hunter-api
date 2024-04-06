/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.alterTable('roommate', function(table) {
    table.text('bio').alter();
    table.text('important').alter();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('roommate', function(table) {
    table.string('bio').alter();
    table.string('important').alter();
  })
};
