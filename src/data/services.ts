export type Service = {
  slug: string
  name: string
  short: string
  blurb: string
  image?: string
}

export const services: Service[] = [
  {
    slug: 'interior-exterior-improvements',
    name: 'Interior & exterior improvements',
    short: 'A contemporary side of home improvement.',
    blurb:
      'Leading Edge Finishings describes its work as interior and exterior home improvements. Share the details of your project to discuss the right scope.',
    image: '/img/facebook-basement-before-after.jpg',
  },
  {
    slug: 'bathroom-updates',
    name: 'Bathroom updates',
    short: 'A refreshed bathroom, from fixtures to finishes.',
    blurb:
      'A bathroom update appears in the company photo gallery, including a white vanity, black fixtures, a framed mirror, and muted blue walls.',
    image: '/img/facebook-bathroom.jpg',
  },
  {
    slug: 'basement-improvements',
    name: 'Basement improvements',
    short: 'A basement media-wall transformation.',
    blurb:
      'The company gallery shows a basement before and after, with a completed media wall, recessed ceiling lights, and refreshed finishes.',
    image: '/img/facebook-basement-before-after.jpg',
  },
  {
    slug: 'holiday-lighting',
    name: 'Custom holiday lighting',
    short: 'Seasonal light installation for South Jersey homes.',
    blurb:
      'Leading Edge Finishings advertises custom Christmas light installation for South Jersey homes. Contact the team about seasonal availability.',
  },
]

export const serviceBySlug = (slug: string) => services.find((service) => service.slug === slug)