import * as React from 'react';
import BaseList from '../../components/BaseList';

interface IProduct {
  id: number;
  name: string;
  description?: string;
}

interface IState {
  products: IProduct[];
}

interface IProps {}

class ProductList extends BaseList<IProps, IState> {
  state = {
    products: [
      { id: 1, name: 'Coke', description: 'This a coke' },
      { id: 2, name: 'Pepsi', description: 'This a pepsi' },
      { id: 3, name: 'Burger', description: 'This a burger' },
      { id: 4, name: 'Pizza', description: 'This a pizza' },
      { id: 5, name: 'Ice cream' },
    ],
  };

  renderContent() {
    return (
      <>
        <h2>Top Products</h2>
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
