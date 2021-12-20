import { Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import React from 'react';
import styled from 'styled-components';

import { Layout, Row, Col } from 'antd';
import { LeftBox, RightBox } from './auth/Register';

const { Header, Footer, Sider, Content } = Layout;

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <LeftWrapper>
        <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
          <Menu.Item key='1' icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key='2' icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key='3' icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
        </Menu>
      </LeftWrapper>
      <RightWrapper>
        <HeaderWrapper>
          <LeftHeaderPart>
            <p>overview</p>
          </LeftHeaderPart>
          <RightHeaderPart>
            <p>heris patel</p>
            <p>|</p>
            <p> avatar</p>
          </RightHeaderPart>
        </HeaderWrapper>

        <FourBox>
          <SmallBoxWrapper>
            <SmallBox>
              <p>unresolved</p>
              <span>60</span>
            </SmallBox>
            <SmallBox>
              <p>overdue</p>
              <span>40</span>
            </SmallBox>
            <SmallBox>
              <p>open</p>
              <span>30</span>
            </SmallBox>
            <SmallBox>
              <p>on hold</p>
              <span>50</span>
            </SmallBox>
          </SmallBoxWrapper>
        </FourBox>
        <BigBox>m</BigBox>
        <LastBoxWrapper>
          <LastLeftBox></LastLeftBox>
          <LastRightBox></LastRightBox>
        </LastBoxWrapper>
      </RightWrapper>
    </DashboardWrapper>
  );
};

export default Dashboard;

export const DashboardWrapper = styled.div`
  display: flex;
  background: red;
  width: 100%;
  height: 100%;
`;
export const LeftWrapper = styled.div`
  background: black;
  width: 18%;
`;

export const RightWrapper = styled.div`
  background: blue;
  width: 82%;
  height: 1185px;
`;

export const HeaderWrapper = styled.div`
  margin: 10px 10px 0 10px;
  display: flex;
  justify-content: space-between;
  background: green;
  height: 40px;
  padding: 8px;
`;

export const LeftHeaderPart = styled.div``;

export const RightHeaderPart = styled.div`
  display: flex;
`;

export const FourBox = styled.div`
  /* display: flex; */
  margin: 40px 10px 10px 10px;
`;
export const SmallBoxWrapper = styled.div`
  display: flex;
  padding: 20px;
  width: 100%;
  height: 160px;
  background: pink;
`;
export const SmallBox = styled.div`
  background: violet;
  position: relative;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 22.3%;
  align-items: center;
  height: 120px;
  span {
    font-size: 30px;
  }
`;
export const BigBox = styled.div`
  height: 500px;

  margin-top: 40px;
  margin-right: 10px;
  margin-left: 10px;
  background: orange;
`;

export const LastBoxWrapper = styled.div`
  background: gray;
  height: 340px;
  margin: 40px 10px 10px 10px;
  justify-content: space-between;
  align-items: center;
  display: flex;
`;

export const LastLeftBox = styled.div`
  background: pink;
  height: 300px;
  width: 49%;
  margin: 30px 0 30px 0;
`;

export const LastRightBox = styled.div`
  background: yellow;
  height: 300px;
  margin: 30px 0 30px 0;

  width: 49%;
`;
