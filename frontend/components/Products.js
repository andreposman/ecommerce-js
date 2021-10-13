import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import { perPage } from '../config.js';
import Product from './Product.js';
import SkeletonLoader from './SkeletonLoader.js';
import ProductsList from './styles/ProductListStyles.js';

export const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int) {
    allProducts(first: $first, skip: $skip) {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function Products({ page }) {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  });
  console.log(data, error, loading);

  if (loading) return <SkeletonLoader />;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <ProductsList>
        {data.allProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ProductsList>
    </div>
  );
}

Products.propTypes = {
  page: PropTypes.any,
};
