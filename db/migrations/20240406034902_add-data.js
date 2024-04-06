/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.table('roommate', function(table) {
    table.integer('age');
    table.boolean('isSmoker');
    table.boolean('hasPets');
    table.integer('maxBudget');
    table.string('image')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.table('roommate', function(table) {
    table.dropColumn('age');
    table.dropColumn('isSmoker');
    table.dropColumn('hasPets');
    table.dropColumn('maxBudget');
    table.dropColumn('image');
  })
};
