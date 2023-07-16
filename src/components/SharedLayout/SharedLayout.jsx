import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { AuthNav, UserMenu } from 'components';
import { Container, Header, LinkNav } from './SharedLayout.styled';
import { Suspense } from 'react';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Container>
      <Header>
        <nav>
          <LinkNav to="/" end>
            Home
          </LinkNav>
          {isLoggedIn && <LinkNav to="/contacts">Contacts</LinkNav>}
        </nav>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <ToastContainer autoClose={2500} />
    </Container>
  );
};
