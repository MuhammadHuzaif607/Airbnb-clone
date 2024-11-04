export const steps = [
  // {
  //   id: 'Step 1',
  //   name: 'Personal Information',
  //   substeps: [
  //     {
  //       name: 'What is Your Location',
  //       fields: ['location'],
  //     },
  //     {
  //       name: 'Is the pin in the right Spot',
  //       fields: [
  //         'country',
  //         'street_address',
  //         'apartment_suite',
  //         'city',
  //         'state',
  //         'zip_code',
  //       ],
  //     },
  //     { name: 'What are your Listings', fields: ['listing'] },
  //     { name: 'Listings SubCategory', fields: ['listing_subcategory'] },
  //     {
  //       name: 'Share Some basics about your place',
  //       fields: ['space_type_desc', 'yard_width', 'yard_length'],
  //     },
  //     {
  //       name: 'Tell guests what your place has to offer',
  //       fields: [
  //         'bedrooms',
  //         'bathrooms',
  //         'popular_amenities',
  //         'bathroom_amenities',
  //         'kitchen_amenities',
  //         'laundry',
  //         'standout_amenities',
  //         'parking_space',
  //       ],
  //     },
  //     {
  //       name: 'Limitation',
  //       fields: ['limitations', 'kids', 'pets', 'own_rules'],
  //     },
  //   ],
  // },
  {
    id: 'Step 2',
    name: 'Address',
    substeps: [
      { name: 'What is Your Location', fields: ['guests'] },
      {
        name: 'Is the pin in the right Spot',
        fields: ['lease_property'],
      },
      { name: 'What are your Listings' },
      { name: 'Listings SubCategory' },
      { name: 'Share Some basics about your place' },
      { name: 'Tell guests what your place has to offer' },
      { name: 'Limitation' },
    ],
  },
  {
    id: 'Step 3',
    name: 'Complete',
    substeps: [
      { name: 'What is Your Location', fields: ['location'] },
      {
        name: 'Is the pin in the right Spot',
        fields: [],
      },
      { name: 'What are your Listings' },
      { name: 'Listings SubCategory' },
      { name: 'Share Some basics about your place' },
      { name: 'Tell guests what your place has to offer' },
      { name: 'Limitation' },
    ],
  },
];
