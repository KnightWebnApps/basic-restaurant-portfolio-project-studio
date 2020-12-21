export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      title: 'Default variant',
      name: 'defaultProductVariant',
      type: 'productVariant'
    },
    {
      name: 'options',
      type: 'array',
      title: 'Options',
      of: [
        {
          name: 'selectOption',
          type: 'object',
          title: 'Item Option',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Option Name'
            },
            {
              name: 'isRequired',
              type: 'boolean',
              title: 'Required?'
            },
            {
              name: 'variants',
              type: 'array',
              title: 'Variants',
              of: [
                {
                  name: 'optionVariant',
                  title: 'Option Variant',
                  type: 'object',
                  fields: [
                    {
                      name: 'title',
                      type: 'string',
                      title: 'Name'
                    },
                    {
                      name: 'price',
                      type: 'number',
                      title: 'Price',
                      description: 'Leave blank if 0'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: 'checkboxOption',
          type: 'object',
          title: 'Item Option',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Option Name'
            },
            {
              name: 'isSelected',
              type: 'boolean',
              title: 'Selected By Default?'
            }
          ]
        },
        {
          name: 'textOption',
          type: 'object',
          title: 'Item Option',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Name'
            },
            {
              name: 'isRequired',
              type: 'boolean',
              title: 'Required?'
            },
            {
              name: 'default',
              type: 'string',
              title: 'Default Value'
            },
            {
              name: 'placeholder',
              type: 'string',
              title: 'Placeholder',
              description: 'Helper text that goes inside the form field, before a user types.  *Hidden if default value is given.'
            }
          ]
        },
        {
          name: 'readOnlyOption',
          type: 'string',
          title: 'Item Option',
          description: 'Displayed under the item in the cart screen.'
        }
      ]
    },
    {
      title: 'Variants',
      name: 'variants',
      type: 'array',
      of: [
        {
          title: 'Variant',
          type: 'productVariant'
        }
      ]
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [
        {
          type: 'string'
        }
      ],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'vendor',
      title: 'Vendor',
      type: 'reference',
      to: {type: 'vendor'}
    },
    {
      name: 'blurb',
      title: 'Blurb',
      type: 'localeString'
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {type: 'category'}
        }
      ]
    },
    {
      name: 'body',
      title: 'Body',
      type: 'localeBlockContent'
    }
  ],

  preview: {
    select: {
      title: 'title',
      manufactor: 'manufactor.title',
      media: 'defaultProductVariant.images[0]'
    }
  }
}
