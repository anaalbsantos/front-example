'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Product from 'components/Product'; // Certifique-se de que o caminho está correto
import { AllProducts, ListProductsContainer, Title } from './style';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['600', '700'],
  subsets: ['latin'],
});

const ListProducts = () => {
  interface ProductType {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
  }

  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    // Função para buscar os produtos
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/products');
        setProducts(response.data);
        console.log('Produtos:', response.data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    // Chama a função para buscar os produtos
    fetchProducts();
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
            name={product.name}
            description={product.description}
            value={product.price}
            imageUrl={product.imageUrl} // Agora passamos a URL da imagem
          />
          
        ))}
      </AllProducts>
    </ListProductsContainer>
  );
};

export default ListProducts;