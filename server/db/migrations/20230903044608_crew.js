export function up(knex) {
  return knex.schema.createTable('crew', (table) => {
    table.integer('room_id').references('rooms.id')
    table.string('name')
    table.integer('age')
    table.string('image')
  })
}

export function down(knex) {
  return knex.schema.dropTable('crew')
}
