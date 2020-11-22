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
        { id: 2, name: 'Francis', age: 25 },
        { id: 3, name: 'Harriete', age: 25 },
        { id: 4, name: 'Anne', age: 25 },
        { id: 5, name: 'Marie', age: 25 },
      ]
    }
  }

  renderContent() {
    return (
      <>
        <h2>Customers</h2>
        <ul>
          {this.state.customers.map(customer => (
            <li key={customer.id}>{customer.name}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default CustomerList;