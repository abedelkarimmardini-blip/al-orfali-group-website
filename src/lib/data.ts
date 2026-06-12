export const UNITS = [
  {
    id: 1, name: 'Unit A-03', type: '1br', beds: 1, baths: 1, area: 78,
    floor: 3, price: '$145,000', priceNum: 145000, status: 'available' as const,
    img: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80',
    intImg: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80',
    view: 'City view', payment: '40/60 plan',
    desc: 'Bright 1-bedroom on floor 3 with open city views. Modern open-plan layout with floor-to-ceiling windows and premium Italian fittings throughout.',
  },
  {
    id: 2, name: 'Unit B-07', type: '2br', beds: 2, baths: 2, area: 122,
    floor: 7, price: '$235,000', priceNum: 235000, status: 'available' as const,
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80',
    intImg: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
    view: 'East & north view', payment: '40/60 plan',
    desc: 'Corner 2-bedroom unit with wrap-around balcony. Double-aspect views facing east and north, with a master suite that captures the morning sun.',
  },
  {
    id: 3, name: 'Unit C-11', type: '2br', beds: 2, baths: 2, area: 135,
    floor: 11, price: '$265,000', priceNum: 265000, status: 'reserved' as const,
    img: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=80',
    intImg: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
    view: 'Panoramic city', payment: '40/60 plan',
    desc: 'Premium 2-bedroom on floor 11. Spacious master suite with en-suite bathroom, walk-in wardrobe, and a chef-level kitchen with island seating.',
  },
  {
    id: 4, name: 'Unit D-16', type: '3br', beds: 3, baths: 2, area: 178,
    floor: 16, price: '$345,000', priceNum: 345000, status: 'available' as const,
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
    intImg: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    view: 'Beirut skyline', payment: '40/60 plan',
    desc: 'Spacious 3-bedroom with panoramic Beirut skyline views. A chef\'s kitchen opens to a generous dining terrace — perfect for entertaining.',
  },
  {
    id: 5, name: 'Unit E-05', type: '1br', beds: 1, baths: 1, area: 82,
    floor: 5, price: '$158,000', priceNum: 158000, status: 'sold' as const,
    img: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600&q=80',
    intImg: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    view: 'City view', payment: 'Sold',
    desc: 'Compact luxury 1-bedroom on floor 5. Ideal for investment or a young professional lifestyle. Already sold — similar units available on floor 3.',
  },
  {
    id: 6, name: 'Penthouse I', type: 'ph', beds: 4, baths: 3, area: 268,
    floor: 24, price: '$720,000', priceNum: 720000, status: 'available' as const,
    img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80',
    intImg: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
    view: '360° Beirut & sea', payment: '30/70 plan',
    desc: 'The crown jewel of Al Orfali Tower. A 268m² duplex penthouse with a private rooftop terrace, plunge pool, and unobstructed 360° views over Beirut and the Mediterranean.',
  },
]

export const GALLERY = [
  { id: 1, cat: 'exterior', src: '/images/al-orfali-hero.png', caption: 'Tower exterior — north facade' },
  { id: 2, cat: 'interior', src: '/images/penthouse-interior.png', caption: 'Living room — 2BR unit render' },
  { id: 3, cat: 'amenities', src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80', caption: 'Lobby & reception' },
  { id: 4, cat: 'interior', src: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80', caption: 'Master bedroom — penthouse' },
  { id: 5, cat: 'interior', src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80', caption: 'Kitchen — 3BR unit' },
  { id: 6, cat: 'amenities', src: '/images/rooftop-pool.png', caption: 'Rooftop pool deck' },
  { id: 7, cat: 'exterior', src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80', caption: 'Tower — south-east elevation' },
  { id: 8, cat: 'interior', src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80', caption: 'Bathroom — premium finishes' },
]

export const LOCATION_TAGS = [
  { icon: 'Shopping', name: 'ABC Mall', dist: '5 min drive' },
  { icon: 'Education', name: 'International College', dist: '3 min walk' },
  { icon: 'Medical', name: 'Clemenceau Medical Center', dist: '7 min drive' },
  { icon: 'Airport', name: 'Rafic Hariri Airport', dist: '20 min drive' },
  { icon: 'Waterfront', name: 'Corniche Beirut', dist: '10 min drive' },
  { icon: 'Dining', name: 'Hamra dining district', dist: '8 min drive' },
]

export const AMENITIES = [
  { icon: 'pool', label: 'Infinity rooftop pool' },
  { icon: 'gym', label: 'Fully equipped gym' },
  { icon: 'concierge', label: '24/7 concierge' },
  { icon: 'parking', label: 'Private parking' },
  { icon: 'elevator', label: 'High-speed elevators' },
  { icon: 'security', label: 'Smart security system' },
  { icon: 'garden', label: 'Landscaped gardens' },
  { icon: 'generator', label: 'Full power generator' },
]

export const TRUST_STATS = [
  { num: 25, suffix: '+', label: 'Years experience' },
  { num: 14, suffix: '', label: 'Projects delivered' },
  { num: 850, suffix: '+', label: 'Families housed' },
  { num: 100, suffix: '%', label: 'On-time delivery' },
]

export const TEAM = [
  { name: 'Ahmad Al Orfali', role: 'Founder & Chairman', initials: 'AA' },
  { name: 'Rami Al Orfali', role: 'CEO & Director', initials: 'RA' },
  { name: 'Lara Khoury', role: 'Head of Sales', initials: 'LK' },
  { name: 'Karim Nasser', role: 'Chief Architect', initials: 'KN' },
]

export const FLOOR_PLAN_DATA = Array.from({ length: 24 }, (_, i) => {
  const floor = 24 - i
  const unitCount = floor === 24 ? 2 : floor >= 20 ? 3 : 4
  const seed = floor * 7
  return {
    floor,
    units: Array.from({ length: unitCount }, (_, j) => {
      const r = ((seed + j * 13) % 100) / 100
      return r < 0.38 ? 'available' : r < 0.58 ? 'reserved' : 'sold'
    }),
  }
})



