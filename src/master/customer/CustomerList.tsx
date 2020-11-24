import * as React from 'react';
import BaseList from '../../components/BaseList';

interface ICustomer {
  id: number;
  name: string;
  age?: number;
  offer?: boolean;
}

interface IState {
  customers: ICustomer[];
}

interface IProps {}

class CustomerList extends BaseList<IProps, IState> {
  state = {
    customers: [
      { id: 1, name: 'Justine', age: 25, offer: true },
      { id: 2, name: 'Francis', age: 25 },
      { id: 3, name: 'Harriete', age: 25, offer: true },
      { id: 4, name: 'Anne', age: 25 },
      { id: 5, name: 'Marie', age: 25 },
    ],
  };

  getNameLabel = (customer: ICustomer): string => {
    return (
      customer.name +
      (customer.offer ? ' (We have a special offer just for you!)' : '')
    );
  };

  renderContent() {
    return (
      <>
        <h2>Customers</h2>
        <ul>
          {this.state.customers.map((customer) => (
            <li key={customer.id}>{this.getNameLabel(customer)}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default CustomerList;
