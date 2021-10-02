import PropTypes from 'prop-types';
import Header from './Header';
import Nav from './Nav';

export default function Page({ children, cool }) {
  return (
    <div>
      <Header />
      <h2>Page component</h2>
      <h2>{cool}</h2>
      {children}
    </div>
  );
}

Page.propTypes = {
  cool: PropTypes.string,
  children: PropTypes.any,
};
