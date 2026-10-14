import { site } from './site'

export type Service = {
  slug: string
  name: string
  short: string
  blurb: string
  image?: string
  videoUrl?: string
}

export const services: Service[] = [
  {
    slug: 'interior-exterior-improvements',
    name: 'Interior & exterior improvements',
    short: 'A contemporary side of home improvement.',
    blurb:
      'Give your home a fresh perspective with thoughtful improvements inside and out. Tell us what you have in mind, and we can talk through a scope that fits your space and priorities.',
    image: '/img/facebook-basement-before-after.jpg',
  },
  {
    slug: 'bathroom-updates',
    name: 'Bathroom updates',
    short: 'A refreshed bathroom, from fixtures to finishes.',
    blurb:
      'Bring a cleaner, more considered feel to your bathroom. Updated fixtures, a fresh vanity, and carefully chosen finishes can make the room feel more polished and inviting.',
    image: '/img/facebook-bathroom.jpg',
  },
  {
    slug: 'basement-improvements',
    name: 'Basement improvements',
    short: 'A basement media-wall transformation.',
    blurb:
      'Make more of the space you already have. A refreshed basement with a media wall, recessed lighting, and updated finishes can become a more welcoming place to unwind and spend time together.',
    image: '/img/facebook-basement-before-after.jpg',
  },
  {
    slug: 'holiday-lighting',
    name: 'Custom holiday lighting',
    short: 'Seasonal light installation for South Jersey homes.',
    blurb:
      'Bring a little extra sparkle to the season with custom holiday-light installation for your South Jersey home. Reach out to discuss your display and seasonal availability.',
    videoUrl: site.facebookVideoUrl,
  },
]

export const serviceBySlug = (slug: string) => services.find((service) => service.slug === slug)