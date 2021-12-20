import React, { useState } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import '../../App.css';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';

const Register = ({ setAlert, register }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  });

  const { username, email, password, password2 } = formData;

  const onFinish = ({ username, email, password, password2 }) => {
    if (password !== password2) {
      setAlert('psw do not match');
    } else {
      const user = {
        username,
        email,
        password,
      };

      register(user);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <FormWrapper>
      <Bgwrapper>
        <BgImage src='//i.picsum.photos/id/1072/3872/2592.jpg?hmac=I5d8vixhn6Ne9Ao1YQdtHfxS2YKNyx6_Bu8N_V1-ovk' />
      </Bgwrapper>

      <FormBox>
        <h1>Register</h1>
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
          <Row gutter={[8, 16]}>
            <Col span={12}>
              <Form.Item
                label='Username'
                name='username'
                onChange={(e) => onChange(e)}
                value={username}
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label='Email'
                onChange={(e) => onChange(e)}
                value={email}
                name='email'
                rules={[
                  {
                    required: true,
                    message: 'Please input your email!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label='Password'
                name='password'
                value={password}
                onChange={(e) => onChange(e)}
                rules={[
                  {
                    required: true,
                    message: 'Please type your password!',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                label='password2'
                name='password2'
                value={password2}
                onChange={(e) => onChange(e)}
                rules={[
                  {
                    required: true,
                    message: 'Please re-Type your password!',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
            <a href='/login'>
              <p>
                Already have an account?
                <strong> Log In </strong>
              </p>
            </a>
          </Form.Item>
        </Form>
      </FormBox>
    </FormWrapper>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
};

export default connect(null, { setAlert, register })(Register);

export const FormWrapper = styled.div`
  font-family: 'Cabin', sans-serif;
  display: flex;
  width: 100%;
`;
export const Bgwrapper = styled.div`
  width: 100%;
  opacity: 0.7;
  display: flex;
`;

export const BgImage = styled.img`
  width: 100%;
  height: 94vh;
  opacity: 0.6;
`;

export const FormBox = styled.div`
  top: 44%;
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  h1 {
    color: black;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .ant-form-item {
    display: flex;
    /* justify-content: flex-start; */
    flex-direction: column;
  }

  .ant-input-affix-wrapper {
    width: 400px;
    border: 1px solid black;
  }
  input {
    width: 400px;
    border: 1px solid black;
  }
  .ant-row {
    margin: 0;
  }
  .ant-btn {
    color: black;
    width: 40%;
    background: var(--clr-hot);
    margin-left: 20px;
    margin-top: 20px;
    border: 1px solid black;
  }
  a {
    color: black;
  }
  p {
    margin-left: 28px;
    font-size: 15px;
  }
  strong {
    color: var(--clr-title);
  }
  .ant-form-horizontal .ant-form-item-label {
    display: flex;
  }
`;
