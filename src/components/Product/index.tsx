import Image from 'next/image';
import { ImageField, ProductContainer, TextField } from './style';
// import { Logo } from 'assets';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['600', '700'],
  subsets: ['latin']
});

export interface ProductProps {
  image: string;
  name: string;
  value: number;
}

const Product = ({ image, name, value }: ProductProps) => {
  return (
    <ProductContainer className={montserrat.className}>
      <ImageField>
        <Image src={image} alt="image" width={200} height={100} />
      </ImageField>
      <TextField>
        <h2>{name}</h2>
        <p>R$ {value}</p>
      </TextField>
    </ProductContainer>
  );
};
export default Product;
