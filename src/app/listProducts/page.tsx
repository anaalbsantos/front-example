'use client';
import { Product } from 'components';
import { AllProducts, ListProductsContainer, Title } from './style';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['600', '700'],
  subsets: ['latin']
});

export interface ListProductsProps {}

const ListProducts = ({}: ListProductsProps) => {
  return (
    <ListProductsContainer className={montserrat.className}>
      <Title>
        <h1>✦ todos os produtos ✦</h1>
      </Title>
      <AllProducts>
        <Product
          image="https://drive.google.com/uc?export=view&id=1UW2t1pxvohY8OtNKan2AiiaZ-JNi0hss"
          name="blusinha"
          value={100}
        ></Product>
      </AllProducts>
    </ListProductsContainer>
  );
};

export default ListProducts;
