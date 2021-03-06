import PropTypes from 'prop-types';
import Link from 'next/link';
import ItemStyles from './styles/ItemStyles';
import TitleStyles from './styles/Title';
import PriceTagStyles from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';
import DeleteProduct from './DeleteProduct';
// import SkeletonLoader from './SkeletonLoader.js';

export default function Product({ product }) {
  return (
    <ItemStyles>
      <img
        src={product?.photo?.image?.publicUrlTransformed}
        alt={product?.name || 'product from gql does not have a name'}
      />
      <TitleStyles>
        <Link href={`/product/${product.id}`}>
          {product?.name || 'product from gql does not have a name'}
        </Link>
      </TitleStyles>
      <PriceTagStyles>{formatMoney(product?.price)}</PriceTagStyles>
      <p>{product?.description || 'no description came from gql'}</p>
      <div className="buttonList">
        <Link
          href={{
            pathname: 'update',
            query: {
              id: product.id,
            },
          }}
        >
          Edit ✏️
        </Link>
        <DeleteProduct id={product.id}>Delete</DeleteProduct>
      </div>
    </ItemStyles>
  );
}

Product.propTypes = {
  product: PropTypes.any,
};
