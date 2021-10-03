import Link from 'next/link';
import NavStyles from './styles/NavStyles';

export default function Nav() {
  return (
    <NavStyles>
      <Link href="/products">Products</Link>
      &nbsp;
      <Link href="/sell">Sell</Link>
      &nbsp;
      <Link href="/orders">Orders</Link>
      &nbsp;
      <Link href="/account">Account</Link>
      &nbsp;
    </NavStyles>
  );
}
