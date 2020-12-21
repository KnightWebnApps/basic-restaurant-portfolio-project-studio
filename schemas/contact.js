export default {
  name: 'contact',
  title: 'Contact Info',
  type: 'object',
  fields: [
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
      validation: Rule => Rule.length(10)
    },
    {
      name: 'email',
      title: 'Contact Email',
      type: 'string',
      validation: (Rule) => {
        return Rule.regex(
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
          {
            name: "email", // Error message is "Does not match email-pattern"
            invert: false, // Boolean to allow any value that does NOT match pattern
          }
        )
      }
    },
    
  ]
}