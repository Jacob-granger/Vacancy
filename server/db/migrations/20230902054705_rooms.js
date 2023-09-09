export function up(knex) {
  return knex.schema.createTable('rooms', (table) => {
    table.increments('id').primary()
    table.string('address')
    table.integer('rent')
    table.date('avail')
    table.date('until')
    table.string('description')
    table.string('image')
  })
}

export function down(knex) {
  return knex.schema.dropTable('rooms')
}
