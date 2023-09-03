export async function seed(knex) {
  return await knex('requirements').insert([
    {
      room_id: 1,
      requirement: 'Rent is $140 pw',
    },
    {
      room_id: 1,
      requirement: 'Wifi is $25 monthly',
    },
    {
      room_id: 1,
      requirement: 'Smoking is not allowed',
    },
    {
      room_id: 1,
      requirement: 'Suitable for one tenant only',
    },
    {
      room_id: 1,
      requirement: 'We have a dog! Pets are welcome',
    },
    {
      room_id: 1,
      requirement: 'Room is not furnished',
    },
    {
      room_id: 1,
      requirement: 'There is off-street parking',
    },

    {
      room_id: 2,
      requirement: 'Rent is $200 pw (bills incl)',
    },
    {
      room_id: 2,
      requirement: 'No pets allowed',
    },
    {
      room_id: 2,
      requirement: 'Couples are welcome',
    },
    {
      room_id: 2,
      requirement: 'Room is fully furnished',
    },
    {
      room_id: 2,
      requirement: 'On-street parking only',
    },
  ])
}
