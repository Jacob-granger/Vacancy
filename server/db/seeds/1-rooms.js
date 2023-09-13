export async function seed(knex) {
  return await knex('rooms').insert([
    {
      id: 1,
      address: 'Saint Clair, Dunedin',
      rent: 140,
      avail: '1st Dec, 2023',
      until: '1st Mar, 2024',
      description:
        'Looking for a social, friendly, clean and reliable flatmate in their 20’s or 30’s. Don’t mind a few drinks every now and then. No couples sorry. You’ll have the house to yourself a fair amount as my house and social life is largely back in Auckland. Just renting this place for work purposes. Currently it’s just myself but a friend (Male, student in mental health, late 20’s) may move in in October. Must like dogs. The pug will be left in Auckland for now but will be quite a regular visitor. The tenancy begins on 2nd September.',
      image:
        'https://images.corelogic.asia/470x313/filters:stretch()/assets/nz/perm/43vg2gyziyi6xf4eipnwbyowka?signature=e9e3973540c95de326eb29b1509ec7f8df46aceb4e54dda7b3d137d8b9ac7fc6',
    },
    {
      id: 2,
      address: 'Tutukaka, Whangarei',
      rent: 145,
      avail: '1st Jan, 2024',
      until: '1st Apr, 2024',
      description:
        'Looking for a social, friendly, clean and reliable flatmate in their 20’s or 30’s. Don’t mind a few drinks every now and then. No couples sorry. You’ll have the house to yourself a fair amount as my house and social life is largely back in Auckland. Just renting this place for work purposes. Currently it’s just myself but a friend (Male, student in mental health, late 20’s) may move in in October. Must like dogs. The pug will be left in Auckland for now but will be quite a regular visitor. The tenancy begins on 2nd September.',
      image:
        'https://images.corelogic.asia/768x512/filters:stretch()/assets/nz/perm/pse23jwqfyi6pa3mmxp5o77dam?signature=5ea7abe6e8ebbb1a74c002ced63249f67ccec299776c5083b8dedc540297110c',
    },
    {
      id: 3,
      address: 'North Dunedin, Dunedin',
      rent: 200,
      avail: '1st Dec, 2023',
      until: '1st Mar, 2024',
      description:
        'Looking for a social, friendly, clean and reliable flatmate in their 20’s or 30’s. Don’t mind a few drinks every now and then. No couples sorry. You’ll have the house to yourself a fair amount as my house and social life is largely back in Auckland. Just renting this place for work purposes. Currently it’s just myself but a friend (Male, student in mental health, late 20’s) may move in in October. Must like dogs. The pug will be left in Auckland for now but will be quite a regular visitor. The tenancy begins on 2nd September.',
      image:
        'https://images.squarespace-cdn.com/content/v1/60e277d0a6b9254b7bbf2b5b/1685944779665-80WWSWACWS7UAZB26B95/Screenshot+2023-06-05+at+1.42.32+PM.png?format=2500w',
    },
    {
      id: 4,
      address: 'Mount Eden, Auckland',
      rent: 250,
      avail: '1st Dec, 2023',
      until: '1st Mar, 2024',
      description:
        'Looking for a social, friendly, clean and reliable flatmate in their 20’s or 30’s. Don’t mind a few drinks every now and then. No couples sorry. You’ll have the house to yourself a fair amount as my house and social life is largely back in Auckland. Just renting this place for work purposes. Currently it’s just myself but a friend (Male, student in mental health, late 20’s) may move in in October. Must like dogs. The pug will be left in Auckland for now but will be quite a regular visitor. The tenancy begins on 2nd September.',
      image:
        'https://a0.muscache.com/im/pictures/miso/Hosting-743662628901447047/original/5c86b93d-65ba-460b-be92-92cd26ee7132.jpeg?im_w=1200',
    },
  ])
}
