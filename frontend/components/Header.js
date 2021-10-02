import Link from 'next/link';
import Nav from './Nav';
import Logo from './styles/Logo';
import HeaderStyle from './styles/Header';

export default function Header() {
  return (
    <HeaderStyle>
      <div className="bar">
        <Logo>
          <Link href="/">Sick Fits</Link>
        </Logo>
        &nbsp;
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <Nav />
    </HeaderStyle>
  );
}
