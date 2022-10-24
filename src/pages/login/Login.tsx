import { IChildrenProp } from '@/types/common';

import tw from 'twin.macro';
import styled from 'styled-components';
import { Formik } from 'formik';
import * as Yup from 'yup';

const LoginContainer = styled.div`
  ${tw`bg-yellow-100 h-[100vh]`}
  background-image: url(/background.png)
`;

const HeaderContainer = styled.div`
  ${tw`flex justify-between items-center px-10 py-4`}
`;

const Logo = styled.h2`
  ${tw`text-3xl font-bold`}
`;

const Auth = styled.div`
  ${tw``}
`;

const Button = styled.button<{ variant?: 'container' | 'outline' }>`
  ${tw`block w-full p-3 rounded-lg text-black font-bold px-6`}

  ${({ variant = 'container' }) =>
    variant === 'container' ? tw`background-color[#fdc886]` : tw``}
`;

const FormContainer = styled.div`
  ${tw`bg-white rounded-xl w-[520px] px-14 py-10 mx-auto mt-24 shadow-lg`}
`;

const Title = styled.h3`
  ${tw`font-bold text-[32px] text-center`}
`;

const Description = styled.p`
  ${tw`text-[#6d6d6d] text-center`}
`;

const InputBox = styled.div`
  ${tw`w-full my-6`}
`;
const Input = styled.input`
  ${tw`w-full border border-[#bebebe] px-2 py-3 rounded-lg`}
`;

const Form = styled.form`
  ${tw`mt-10`}
`;

const OtherLogin = styled.div`
  ${tw`flex justify-evenly`}
`;

const OtherLoginBtn = styled.button`
  ${tw`border py-3 px-4 flex justify-center items-center gap-2 rounded`}
`;

const ForgetPassword = styled.div`
  ${tw`mt-6`}
`;

interface ILogin {}

const Login: React.FC<IChildrenProp & ILogin> = () => {
  return (
    <LoginContainer>
      <HeaderContainer>
        <Logo>Summon</Logo>
        <Auth>
          <Button variant="outline">Sign up</Button>
        </Auth>
      </HeaderContainer>
      <FormContainer>
        <Title>Login</Title>
        <Description>
          Hey, Enter your details to get sign in to your account
        </Description>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={Yup.object().shape({
            email: Yup.string().email('Invalid email').required('Required'),
            password: Yup.string().required('Required')
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
            <Form onSubmit={handleSubmit}>
              <InputBox>
                <Input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder={'Enter Email *'}
                />
                {errors.email && touched.email && errors.email}
              </InputBox>
              <InputBox>
                <Input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder={'Password *'}
                />
                {errors.password && touched.password && errors.password}
              </InputBox>
              <Button type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>

        <p className="text-center mt-8 mb-4 text-[15px]">
          -- Or Sign in with --
        </p>
        <OtherLogin>
          <OtherLoginBtn>
            <i className="ri-facebook-fill"></i>
            Facebook
          </OtherLoginBtn>

          <OtherLoginBtn>
            <i className="ri-google-fill"></i>
            Google
          </OtherLoginBtn>
        </OtherLogin>
        <ForgetPassword>
          <p className="text-center">
            Don't have an account?{' '}
            <b>
              <a href="#">Request Now</a>
            </b>
          </p>
        </ForgetPassword>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
