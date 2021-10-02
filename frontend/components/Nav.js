import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <Link href="/products">Products</Link>
      &nbsp;
      <Link href="/sell">Sell</Link>
      &nbsp;
      <Link href="/orders">Orders</Link>
      &nbsp;
      <Link href="/account">Account</Link>
      &nbsp;
    </nav>
  );
}
