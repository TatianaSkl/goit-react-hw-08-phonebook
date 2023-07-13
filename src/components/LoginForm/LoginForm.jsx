import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { ButtonForm, Form, InputForm, LabelForm } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <LabelForm htmlFor="name">Email</LabelForm>
      <InputForm
        type="email"
        name="email"
        // pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
        title="Please enter a valid email address"
        required
      />
      <LabelForm htmlFor="number">Password</LabelForm>
      <InputForm
        type="password"
        name="password"
        // pattern="^.{8,}$"
        title="Password must be at least 8 characters long"
        required
      />

      <ButtonForm type="submit">Log In</ButtonForm>
    </Form>
  );
};
