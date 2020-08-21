import React from 'react';
import styled from 'styled-components';

const CardDataStyles = styled.div`
  p {
    margin-top: 0;
  }

  .lable {
    margin-bottom: 0;
  }
`;

const CardData = ({ children }) => <CardDataStyles>{children}</CardDataStyles>;

export default CardData;
