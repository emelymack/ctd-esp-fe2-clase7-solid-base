import { FaBars, FaTimes } from 'react-icons/fa';
import useDisclosure from 'features/modal/use-disclosure';
import { SearchBar } from 'features/search';
import { FC, useContext } from 'react';
import { LanguageContext } from 'features/language';
import { NavLink } from 'react-router-dom';

const NavMobile: FC = () => {
  const { isOpen, toggle } = useDisclosure();
  const { translate } = useContext(LanguageContext);

  return (
    <div className={`container mobile-nav`}>
      <div className={'container'}>
        <NavLink to="/" className={'nav-link'}>
          <img className={'logo'} src={'/images/logo-dh.png'} alt={'Digital House'} />
        </NavLink>
        <button className={'icon-button'} aria-label="menu-button" onClick={toggle}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isOpen && (
        <div className={'container'} style={{ flexDirection: 'column' }}>
          <div className={'container'} style={{ width: 400, flexDirection: 'column' }}>
            <NavLink to="/" className={'nav-link'}>
              <h3>{translate('navigation.home')}</h3>
            </NavLink>
            <NavLink to="/following" className={'nav-link'}>
              <h3>{translate('navigation.following')}</h3>
            </NavLink>
          </div>
          <SearchBar />
        </div>
      )}
    </div>
  );
};
export default NavMobile;
