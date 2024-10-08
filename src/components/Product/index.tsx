import Image from 'next/image';
import { ProductContainer, TextField, ImageField } from './style'; // Adicionei ImageWrapper para estilizar a imagem
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['600', '700'],
  subsets: ['latin']
});

export interface ProductProps {
  name: string;
  value: number;
  description: string;
  imageUrl: string; // Novo campo para a URL da imagem
}

const Product = ({ name, value, description, imageUrl }: ProductProps) => {
  return (
    <ProductContainer className={montserrat.className}>
      <ImageField>
        <Image src={imageUrl} alt={name} width={200} />
      </ImageField>
      <TextField>
        <h2>{name}</h2>
        <p>{description}</p>
        <span>${value.toFixed(2)}</span>
      </TextField>
    </ProductContainer>
  );
};

export default Product;
