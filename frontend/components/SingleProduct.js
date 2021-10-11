import { useQuery } from '@apollo/client';
import Head from 'next/head';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import DisplayError from './ErrorMessage';
import SkeletonLoader from './SkeletonLoader';
import SingleProductStyles from './styles/SingleProductStyles';

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      id
      name
      price
      description
      photo {
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function SingleProduct({ id }) {
  const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
    variables: { id },
  });
  console.log({ data, loading, error });

  if (loading) return <SkeletonLoader />;
  if (error) return <DisplayError error={error} />;
  const { Product } = data;
  console.log(Product);
  return (
    <SingleProductStyles>
      <Head>SICK FITS | {Product.name}</Head>
      <div className="details">
        <img
          src={Product.photo.image.publicUrlTransformed}
          alt={Product.photo.altText}
        />
        <h2>{Product.id}</h2>
        <h2>{Product.name}</h2>
        <h2>{Product.description}</h2>
      </div>
    </SingleProductStyles>
  );
}

SingleProduct.propTypes = {
  id: PropTypes.any,
};
