import styled from 'styled-components';

export const ListProductsContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px 70px;
`;

export const Title = styled.div`
  width: 100%;
  height: 100px;
  /* padding: 20%; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AllProducts = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;
