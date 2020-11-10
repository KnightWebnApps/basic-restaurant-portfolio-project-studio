// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import category from './category'
import product from './product'
import vendor from './vendor'
import productVariant from './productVariant'

import localeString from './locale/String'
import localeText from './locale/Text'
import localeBlockContent from './locale/BlockContent'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    product,
    vendor,
    category,
    {
      name: "business",
      title: "Business",
      type: "document",
      __experimental_actions: ['update', /*'create', 'delete', */ 'publish'],
      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string',    
        },
        {
          name: 'tagline',
          title: 'Tagline',
          type: 'text',
        },
        {
          name: 'headerImage',
          title: 'Header Image',
          type: 'image',
          options: {
            hotspot: false
          }
        },
        {
          name: 'cuisine',
          type: 'string',
          title: 'Cuisine Type'
        },
        {
          name: 'hours',
          type: 'array',
          title: 'Operation Hours',
          of: [
            {
              name: "time",
              title: "Time",
              type: "object",
              fields: [
                {
                  name: 'day',
                  title: 'Day',
                  type: 'string'
                },
                {
                  name: "startTime",
                  title: "Start Time",
                  type: "string"
                },
                {
                  name: "endTime",
                  title: "End Time",
                  type: 'string'
                }
              ]
            }
          ]
        },
        {
          name: 'address',
          type: 'object',
          title: 'Address',
          fields: [
            {
              name: 'street',
              type: 'string',
              title: 'Street'
            },
            {
              name: 'city',
              type: 'string',
              title: 'City'
            },
            {
              name: 'state',
              type: 'string',
              title: 'State',
            },
            {
              name: 'postalCode',
              type: 'string',
              title: 'Postal Code'
            },
          ]
        },
        {
          name: 'keywords',
          type: 'array',
          title: 'Keywords',
          description: 'Add SEO keywords that describes your business.',
          of: [{type: 'string'}],
          options: {
            layout: 'tags'
          }
        },
        {
          name: 'images',
          title: 'Images',
          type: 'array',
          of: [
            {
              type: 'image',
              options: {
                hotspot: true
              }
            }
          ]
        },
      ],
      initialValue: {
        name: 'Business',
        tagline: 'we are fresh to death'
      }
    },
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    localeText,
    localeBlockContent,
    localeString,
    productVariant
  ])
})
