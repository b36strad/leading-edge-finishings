/** Verified business details gathered from the public Facebook page. */
export const site = {
  name: 'Leading Edge Finishings, LLC',
  shortName: 'Leading Edge Finishings',
  tagline: 'A contemporary side of home improvement.',
  founded: 2019,
  license: 'Licensed & insured',
  phone: '(856) 515-3511',
  phoneHref: 'tel:+18565153511',
  email: 'Info@leadingedgefinishings.com',
  address: 'Woodbury, NJ',
  serviceArea: ['Woodbury, NJ', 'South Jersey'],
  facebookUrl: 'https://www.facebook.com/LeadingEdgeFinishings/',
  facebookVideoUrl: 'https://www.facebook.com/reel/1570219934878779/',
  reviewsUrl: 'https://www.facebook.com/LeadingEdgeFinishings/reviews',
  stats: [
    { value: '2019', label: 'Established' },
    { value: '1.1K+', label: 'Facebook followers' },
    { value: '100%', label: 'Recommend (13 reviews)' },
  ],
} as const

export const nav = [
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
] as const

export const faqs = [
  {
    q: 'Where is Leading Edge Finishings based?',
    a: 'The company is based in Woodbury, New Jersey.',
  },
  {
    q: 'What kind of work does the company do?',
    a: 'The company describes its work as interior and exterior home improvements. Its public posts also feature custom holiday-light installation.',
  },
  {
    q: 'How can I reach the company?',
    a: 'Call or text (856) 515-3511, or email Info@leadingedgefinishings.com.',
  },
] as const