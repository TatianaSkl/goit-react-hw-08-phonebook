import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { Loader, SharedLayout } from 'components';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { Contacts, Home, Login, Register } from 'pages';
import { selectIsRefreshing } from 'redux/auth/selectors';

// const RegisterPage = lazy(() => import('../../pages/Register'));
// const LoginPage = lazy(() => import('../../pages/Login'));
// const ContactsPage = lazy(() => import('../../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route element={<PrivateRoute redirectTo="/login" />}>
          <Route path="contacts" element={<Contacts />} />
        </Route>
        <Route element={<RestrictedRoute redirectTo="/" restricted />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
