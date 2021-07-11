import React from 'react'
import {
  FormButton,
  FormInput,
  FormLabel,
  Text,
  Icon,
  Container,
  Form,
  FormContent,
  FormH1,
  FormWrap
} from "./SigninElements";

const SignIn = () => {
  return(
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>dolla</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' />
              <FormButton type='submit'>Continue</FormButton>
              <Text>Forgot Password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignIn;
