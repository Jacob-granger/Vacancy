export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('requirements').del()
  await knex('crew').del()
  await knex('rooms').del()
}
