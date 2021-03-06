import { Heading } from '@chakra-ui/react';
import * as React from 'react';
import BaseList from '../../../components/base/BaseList';

interface Product {
  id: number;
  name: string;
  description?: string;
}

interface State {
  products: Product[];
}

interface Props {}

class ProductList extends BaseList<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      products: [
        { id: 1, name: 'Coke', description: 'This a coke' },
        { id: 2, name: 'Pepsi', description: 'This a pepsi' },
        { id: 3, name: 'Burger', description: 'This a burger' },
        { id: 4, name: 'Pizza', description: 'This a pizza' },
        { id: 5, name: 'Ice cream' },
      ],
    };
  }

  componentDidMount() {
    // mock http GET request
  }

  renderContent() {
    return (
      <>
        <Heading as="h2" size="xl" m=".3em 0">
          Top Products
        </Heading>
        <ol>
          {this.state.products.map((product) => (
            <li key={product.id}>
              <span>{product.name}</span>
            </li>
          ))}
        </ol>
      </>
    );
  }
}

export default ProductList;
