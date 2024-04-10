export async function seed(knex) {
  return await knex('crew').insert([
    {
      room_id: 1,
      name: 'Ed',
      age: 21,
      image: null,
    },
    {
      room_id: 1,
      name: 'Edd',
      age: 22,
      image: null,
    },
    {
      room_id: 1,
      name: 'Eddy',
      age: 23,
      image: null,
    },
    {
      room_id: 2,
      name: 'Jacob',
      age: 25,
      image: null,
    },
    {
      room_id: 2,
      name: 'Jake',
      age: 23,
      image: null,
    },
    {
      room_id: 2,
      name: 'Cob',
      age: 21,
      image: null,
    },
  ])
}
