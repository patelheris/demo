import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import '../../App.css';
import { FormWrapper, Bgwrapper, FormBox, BgImage } from './Register';
import styled from 'styled-components';
import { login } from '../../actions/auth';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
const Login = ({ login }) => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const onFinish = async ({ email, password }) => {
    const user = {
      email,
      password,
    };
    login(user, history);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...setFormData, [e.target.name]: e.target.values });

  return (
    <LoginWrapper>
      <FormWrapper>
        <Bgwrapper>
          <BgImage src='//i.picsum.photos/id/1072/3872/2592.jpg?hmac=I5d8vixhn6Ne9Ao1YQdtHfxS2YKNyx6_Bu8N_V1-ovk' />
        </Bgwrapper>
        <FormBox>
          <h1>Login</h1>

          <Form
            name='basic'
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
          >
            <Form.Item
              label='Email'
              name='email'
              onChange={(e) => onChange(e)}
              value={email}
              rules={[
                {
                  required: true,
                  message: 'Please input your email!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label='Password'
              onChange={(e) => onChange(e)}
              value={password}
              name='password'
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type='primary' htmlType='submit'>
                Submit
              </Button>
              <p>
                Don’t have an account?
                <strong>Sign Up</strong>
              </p>
            </Form.Item>
          </Form>
        </FormBox>
      </FormWrapper>
    </LoginWrapper>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  username: state.username,
  email: state.email,
});

export default connect(mapStateToProps, { login })(Login);

export const LoginWrapper = styled.div`
  .ant-btn {
    width: 60%;
    right: 30px;
  }
  p {
    margin-left: -19px;
  }
`;
