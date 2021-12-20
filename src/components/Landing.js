import React from 'react';
import '../App.css';
import styled from 'styled-components';

const Landing = () => {
  return (
    <div>
      <LandingPageWrapper>
        <Bgwrapper>
          <BgImg src='//i.picsum.photos/id/1072/3872/2592.jpg?hmac=I5d8vixhn6Ne9Ao1YQdtHfxS2YKNyx6_Bu8N_V1-ovk' />
        </Bgwrapper>

        <div className='center'>
          <h1>Welcome To Demo</h1>
          <h3>
            Create a login, sign up demo using antd,styled components, react and
            redux.
          </h3>

          <ButtonWrappers>
            <a href='/login'>
              <LeftButton>Login</LeftButton>
            </a>
            <a href='/register'>
              <RightButton>register</RightButton>
            </a>
          </ButtonWrappers>
        </div>
      </LandingPageWrapper>
    </div>
  );
};

export default Landing;

export const LandingPageWrapper = styled.div`
  .center {
    position: absolute;
    top: 50%;
    width: 100%;

    h1 {
      margin-bottom: 0;
      display: flex;
      font-size: 50px;
      justify-content: center;
      align-items: center;
    }
    h3 {
      display: flex;
      font-size: 20px;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const Bgwrapper = styled.div`
  width: 100%;
  opacity: 0.7;
  display: flex;
`;

export const BgImg = styled.img`
  width: 100%;
  height: 94vh;
  opacity: 0.6;
`;

export const LeftButton = styled.button`
  color: black;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1px solid black;
  border-radius: 3px;
  box-shadow: 0 10px 36px rgba(0, 0, 0, 0.5);
  background-color: var(--clr-hot);
  cursor: pointer;
  transition: 0.3s;
`;
export const ButtonWrappers = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RightButton = styled(LeftButton)``;
