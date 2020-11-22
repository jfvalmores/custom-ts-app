import * as React from 'react';
import BaseList from '../components/BaseList';

interface ICustomer {
  id: number,
  name: string,
  age: number
}

interface IState {
  customers: ICustomer[]
}

interface IProps {}

class CustomerList extends BaseList<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      customers: [
        { id: 1, name: 'Justine', age: 25 },
        { id: 1, name: 'Justine', age: 25 },
        { id: 1, name: 'Justine', age: 25 },
      ]
    }
  }

  render() {
    return (
      <>
        <h2>Customers</h2>
        <ul>
          <li>Justine</li>
          <li>Francis</li>
          <li>Harriete</li>
        </ul>
      </>
    );
  }
}

export default CustomerList;