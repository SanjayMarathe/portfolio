import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [{
    url: 'https://www.sanjaymarathe.me/',
    images: ['https://www.sanjaymarathe.me/profile.jpg'],
  }]
}
