import { list } from '@keystone-next/keystone/schema';
import { text, relationship, select, integer } from '@keystone-next/fields';

export const Product = list({
  // access:
  fields: {
    name: text({ isRequired: true }),
    description: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    status: select({
      options: [
        { label: 'Draft', value: 'DRAFT' },
        { label: 'Available', value: 'AVAILABLE' },
        { label: 'Unavailable', value: 'UNAVAILABLE' },
      ],
      defaultValue: 'DRAFT',
      ui: {
        displayMode: 'segmented-control',
        // createView: { fieldMode: 'hidden'}, hides button in the product creation
      },
    }),
    price: integer(), // price in cents
    photo: relationship({
      label: 'Product Image',
      ref: 'ProductImage.product',
      ui: {
        displayMode: 'cards',
        cardFields: ['image', 'altText'],
        inlineCreate: { fields: ['image', 'altText'] },
        inlineEdit: { fields: ['image', 'altText'] },
      },
    }),
  },
  ui: {
    listView: {
      initialColumns: ['name', 'status', 'price', 'photo'],
    },
  },
});
