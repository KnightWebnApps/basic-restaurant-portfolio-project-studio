export default {
  name: 'seoImage',
  title: 'Image',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Asset',
      type: 'image'
    },
    {
      name: 'alt',
      title: 'Alt Text',
      description: 'This is important for SEO, it helps crawlers understand what your image is showing.  Describe what is happening in the image briefly but provide context.',
      type: 'string'
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'Displayed beneath your image, not required but useful for providing human readers with context.'
    }
  ]
}