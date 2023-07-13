import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { UserBtn, UserSpan, UserText, UserWrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <UserWrapper>
      <UserText>
        Welcome, <UserSpan> {user.name}!</UserSpan>
      </UserText>
      <UserBtn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </UserBtn>
    </UserWrapper>
  );
};
