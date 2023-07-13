import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const RestrictedRoute = ({ restricted = false, redirectTo = '/' }) => {
  const { token } = useSelector(state => state.auth);
  const shouldRedirect = token && restricted;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Outlet />;
};
