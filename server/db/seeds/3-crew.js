export async function seed(knex) {
  return await knex('crew').insert([
    {
      room_id: 1,
      name: 'Ed',
      age: 21,
      image:
        'https://cn.i.cdn.ti-platform.com/cnemea/content/377/showpage/ed-edd-n-eddy/uk/ededdneddy_icon.png',
    },
    {
      room_id: 1,
      name: 'Edd',
      age: 22,
      image:
        'https://www.nicepng.com/png/detail/220-2205181_edd-ed-edd-n-eddy.png',
    },
    {
      room_id: 1,
      name: 'Eddy',
      age: 23,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo0kjCGrM2KoqlGHuCr4jW6xTUOtTPEZM8lA&usqp=CAU',
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
