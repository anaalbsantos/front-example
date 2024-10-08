'use client';
import { Product } from 'components';
import { AllProducts, ListProductsContainer, Title } from './style';
import { Montserrat } from 'next/font/google';
import React, { useEffect, useState } from 'react';
import api from 'services/api';

const montserrat = Montserrat({
  weight: ['600', '700'],
  subsets: ['latin']
});

export interface Product {
  id: string;
  name: string;
  value: number;
  image: string;
}

const ListProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  //buscar produtos da api
  useEffect(() => {
    const getProducts = async () => {
      try {
        const list_products = await api.get(`/product`);
        console.log(list_products.data.data);
        setProducts(list_products.data.data);
      } catch (error) {
        console.error('Erro ao buscar os produtos:', error);
      }
    };
    getProducts();
  }, []);
  return (
    <ListProductsContainer className={montserrat.className}>
      <Title>
        <h1>✦ todos os produtos ✦</h1>
      </Title>
      <AllProducts>
        {products.map((product) => (
          <Product
            key={product.id}
            image={product.image}
            name={product.name}
            value={product.value}
          ></Product>
        ))}
      </AllProducts>
    </ListProductsContainer>
  );
};

export default ListProducts;
