import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <AlertWrapper key={alert.id} className='alert'>
      {alert.msg}
    </AlertWrapper>
  ));

alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);

export const AlertWrapper = styled.div`
  position: absolute;
  margin-top: 5%;
  margin-left: 5%;
  margin-right: 5%;
  width: 90%;
  background: gray;

  color: white;
  padding: 12px;
  border-radius: 5px;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 300;
  letter-spacing: 1px;
`;
