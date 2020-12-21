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
      name: 'smoothie',
      title: 'Smoothies',
      type: 'document',
      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string'
        },
        {
          name: 'price',
          title: 'Price',
          type:  'number'
        },
        {
          name: 'calories',
          title: 'Calories',
          type: 'number'
        },
        {
          name: 'description',
          title: 'Description',
          type: 'string'
        },
        {
          name: 'mainAsset',
          type: 'object',
          title: 'Main Image',
          fields: [
            {
              name: 'image',
              type: 'image',
              title: 'Image'
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alternate Text',
              description: 'Alt text is from SEO and Accessibility purposes'
            }
          ]
        },
        {
          name: 'ingredients',
          title: 'Ingredients',
          type: 'array',
          of: [
            { 
              name: 'ing',
              type: 'object',
              title: 'Ingredient',
              fields: [
                {
                  name: 'name',
                  type: 'string',
                  title: 'Name'
                },
                {
                  name: 'asset',
                  type: 'image',
                  title: 'Icon',
                  description: 'Look for flat line design with appropriate colors'
                }
              ] 
            }
          ]
        }
      ]
    },
    {
      name: "business",
      title: "Business",
      type: "document",
      __experimental_actions: ['update', 'create',/* 'delete', */ 'publish'],
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
          name: 'bannerMessage',
          title: 'Banner Message',
          type: 'string',
          description: 'Use this to display an alert at the top of your site.  Useful for sudden changes in business.'
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
          validation: Rule => Rule.length(7),
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
          name: 'phoneNumber',
          type: 'string',
          title: 'Phone Number',
          description: 'No spaces or special characters'
        },
        {
          name: 'menuDescription',
          type: 'text',
          title: 'Menu Description',
          description: 'The description at the top of your menu page'
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
              title: 'Postal Code',
              validation: (Rule) =>
                Rule.custom((postal) => {
                  if (typeof postal === "undefined") {
                    return true // Allow undefined values, remove if the field is required
                  }
                  const regex = /([ABCEGHJ-NPRSTVXY]\d[A-Z])[\s\-]?(\d[A-Z]\d)/gi // Regex pattern goes here
                  if (regex.test(postal)) {
                    return true
                  } else {
                    return "Not a valid postal code" // Error message goes here
                  }
                }),
            },
            {
              name: 'link',
              type: 'url',
              title: 'Google Map Share Link'
            }
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
          name: 'socialMedia',
          type: 'array',
          title: 'Social Media Links',
          of: [
            {
              name: 'platform',
              title: 'Platform',
              type: 'object',
              fields: [
                {
                  name: 'name',
                  title: 'Platform Name',
                  type: 'string'
                },
                {
                  name: 'logo',
                  type: 'image',
                  title: 'Platform Logo'
                },
                {
                  name: 'link',
                  title: 'Link Url',
                  type: 'url'
                }
              ]
            },
          ]
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
