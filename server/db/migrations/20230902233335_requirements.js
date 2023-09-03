export function up(knex) {
  return knex.schema.createTable('requirements', (table) => {
    table.integer('room_id').references('rooms.id')
    table.string('requirement')
  })
}

export function down(knex) {
  return knex.schema.dropTable('requirements')
}
