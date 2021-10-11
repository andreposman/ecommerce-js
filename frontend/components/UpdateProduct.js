import { useMutation, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Router from 'next/router';
import PropTypes from 'prop-types';
import useForm from '../lib/useForm';
import DisplayError from './ErrorMessage';
import SkeletonLoader from './SkeletonLoader';
import FormStyles from './styles/Form';

const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      id
      name
      description
      price
    }
  }
`;

const UPDATE_PRODUCT_MUTATION = gql`
  mutation UPDATE_PRODUCT_MUTATION(
    $id: ID!
    $name: String
    $description: String
    $price: Int
  ) {
    updateProduct(
      id: $id
      data: { name: $name, description: $description, price: $price }
    ) {
      id
      name
      description
      price
    }
  }
`;

export default function UpdateProduct({ id }) {
  // 1. get the exiting product
  const { data, error, loading } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: {
      id,
    },
  });

  // 2. mutation to update
  const [
    updateProduct,
    { data: updateData, error: updateError, loading: updateLoading }, // rename as we deconstruct the var
  ] = useMutation(UPDATE_PRODUCT_MUTATION);

  // 2.5 form state input
  const { inputs, handleChange, resetForm, clearForm } = useForm(data?.Product);
  if (loading) return <SkeletonLoader />;

  // 3. form to handle update

  return (
    <FormStyles
      onSubmit={async (event) => {
        event.preventDefault();
        const res = await updateProduct({
          variables: {
            id,
            name: inputs.name,
            description: inputs.description,
            price: inputs.price,
          },
        });
        console.log(res);
        Router.push({
          pathname: `/product/${id}`,
        });
      }}
    >
      <DisplayError error={error || updateError} />
      <fieldset disabled={updateLoading} aria-busy={updateLoading}>
        <label htmlFor="name">
          Name
          <input
            required
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="price">
          Price
          <input
            required
            type="number"
            id="price"
            name="price"
            placeholder="Price"
            value={inputs.price}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="description">
          Description
          <textarea
            id="description"
            name="description"
            placeholder="Description"
            value={inputs.description}
            onChange={handleChange}
          />
        </label>

        <button type="submit"> Update Product</button>
      </fieldset>
    </FormStyles>
  );
}

UpdateProduct.propTypes = {
  id: PropTypes.any,
};
