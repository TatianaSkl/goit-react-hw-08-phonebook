import { register } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { ButtonForm, Form, InputForm, LabelForm } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <LabelForm htmlFor="name">Username</LabelForm>
      <InputForm
        type="text"
        name="name"
        pattern="^[a-zA-Z0-9_-]{3,16}$"
        title="Username must be 3-16 characters long and can contain letters, numbers, underscores, and dashes"
        required
      />
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

      <ButtonForm type="submit">Register</ButtonForm>
    </Form>
  );
};
