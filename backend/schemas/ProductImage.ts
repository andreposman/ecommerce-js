import { list } from '@keystone-next/keystone/schema';
import { cloudinaryImage } from '@keystone-next/cloudinary';
import { text, relationship } from '@keystone-next/fields';

const cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET,
  folder: 'sickfits',
};

export const ProductImage = list({
  // access:
  fields: {
    image: cloudinaryImage({
      cloudinary,
      label: 'Source Image',
    }),
    altText: text(),
    product: relationship({
      ref: 'Product.photo',
    }),
  },
  ui: {
    listView: {
      initialColumns: ['product', 'altText', 'image'],
    },
  },
});
