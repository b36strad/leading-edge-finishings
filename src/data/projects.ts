export type Project = {
  slug: string
  title: string
  serviceSlug: string
  beforeImage: string
  afterImage: string
  summary: string
}

export const projects: Project[] = [
  {
    slug: 'living-room',
    title: 'Living room',
    serviceSlug: 'interior-exterior-improvements',
    beforeImage: '/img/project-living-room-before.jpg',
    afterImage: '/img/project-living-room-after.jpg',
    summary: 'Before-and-after living room photos from the company portfolio.',
  },
  {
    slug: 'bedroom',
    title: 'Bedroom',
    serviceSlug: 'interior-exterior-improvements',
    beforeImage: '/img/project-bedroom-before.jpg',
    afterImage: '/img/project-bedroom-after.jpg',
    summary: 'Before-and-after bedroom photos from the company portfolio.',
  },
  {
    slug: 'landscape',
    title: 'Landscape',
    serviceSlug: 'interior-exterior-improvements',
    beforeImage: '/img/project-landscape-before.jpg',
    afterImage: '/img/project-landscape-after.jpg',
    summary: 'Before-and-after landscape photos from the company portfolio.',
  },
  {
    slug: 'kitchen',
    title: 'Kitchen',
    serviceSlug: 'interior-exterior-improvements',
    beforeImage: '/img/project-kitchen-before.jpg',
    afterImage: '/img/project-kitchen-after.jpg',
    summary: 'Before-and-after kitchen photos from the company portfolio.',
  },
  {
    slug: 'deck',
    title: 'Deck',
    serviceSlug: 'interior-exterior-improvements',
    beforeImage: '/img/project-deck-before.jpg',
    afterImage: '/img/project-deck-after.jpg',
    summary: 'Before-and-after deck photos from the company portfolio.',
  },
  {
    slug: 'bathroom',
    title: 'Bathroom',
    serviceSlug: 'bathroom-updates',
    beforeImage: '/img/project-bathroom-before.jpg',
    afterImage: '/img/project-bathroom-after.jpg',
    summary: 'Before-and-after bathroom photos from the company portfolio.',
  },
  {
    slug: 'family-room',
    title: 'Family room',
    serviceSlug: 'interior-exterior-improvements',
    beforeImage: '/img/project-family-room-before.jpg',
    afterImage: '/img/project-family-room-after.jpg',
    summary: 'Before-and-after family room photos from the company portfolio.',
  },
  {
    slug: 'outdoor-fire-pit',
    title: 'Outdoor fire pit',
    serviceSlug: 'interior-exterior-improvements',
    beforeImage: '/img/project-fire-pit-before.jpg',
    afterImage: '/img/project-fire-pit-after.jpg',
    summary: 'Before-and-after outdoor fire pit photos from the company portfolio.',
  },
  {
    slug: 'dining-room',
    title: 'Dining room',
    serviceSlug: 'interior-exterior-improvements',
    beforeImage: '/img/project-dining-room-before.jpg',
    afterImage: '/img/project-dining-room-after.jpg',
    summary: 'Before-and-after dining room photos from the company portfolio.',
  },
  {
    slug: 'guest-room',
    title: 'Guest room',
    serviceSlug: 'interior-exterior-improvements',
    beforeImage: '/img/project-guest-room-before.jpg',
    afterImage: '/img/project-guest-room-after.jpg',
    summary: 'Before-and-after guest room photos from the company portfolio.',
  },
]

export const projectBySlug = (slug: string) => projects.find((project) => project.slug === slug)