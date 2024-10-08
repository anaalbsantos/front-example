import styled from 'styled-components';

export const ProductContainer = styled.div`
  width: 300px; /* Increased the width from 250px to 300px */
  background-color: #fff;
  border: 1px solid #d1d1d1;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  }
`;

export const ImageField = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TextField = styled.div`
  padding: 15px;
  background-color: #fafafa;
  border-top: 1px solid #eaeaea;

  h2 {
    font-size: 1.2rem;
    margin-bottom: 8px;
    color: #333;
  }

  p {
    font-size: 1rem;
    margin-bottom: 5px;
    color: #777;
  }

  p.price {
    font-weight: bold;
    font-size: 1.1rem;
    color: #1e90ff;
  }
`;
