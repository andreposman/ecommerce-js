import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Product from './Product.js';
import SkeletonLoader from './SkeletonLoader.js';
import ProductsList from './styles/ProductListStyles.js';

export const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY {
    allProducts {
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

export default function Products() {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);
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
