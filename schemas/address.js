export default {
  name: 'address',
  type: 'object',
  title: 'Address',
  fields: [
    {
      name: 'street1',
      type: 'string',
      title: 'Street 1'
    },
    {
      name: 'street2',
      type: 'string',
      title: 'Street 2'
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
}