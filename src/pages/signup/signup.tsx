import { IChildrenProp } from '@/types/common';

import tw from 'twin.macro';
import styled from 'styled-components';
import { Formik } from 'formik';
import * as Yup from 'yup';

const SignupContainer = styled.div`
  ${tw``}
`;

const HeaderContainer = styled.div`
  ${tw``}
`;

const Logo = styled.h2`
  ${tw``}
`;

const Auth = styled.div`
  ${tw``}
`;

const Button = styled.button`
  ${tw``}
`;

const FormContainer = styled.button`
  ${tw``}
`;

const Title = styled.button`
  ${tw``}
`;

const Description = styled.button`
  ${tw``}
`;

interface ISignup {}

const Signup: React.FC<IChildrenProp & ISignup> = () => {
  return (
    <SignupContainer>
      <HeaderContainer>
        <Logo>Summon</Logo>
        <Auth>
          <Button>Sign up</Button>
        </Auth>
      </HeaderContainer>
      <FormContainer>
        <Title>Đăng nhập</Title>
        <Description>
          Hey, Enter your details to get sign in to your account
        </Description>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={Yup.object().shape({
            email: Yup.string().email('Invalid email').required('Required'),
            password:
              Yup.string()
              .required('Required')
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </FormContainer>
    </SignupContainer>
  );
};

export default Signup;
