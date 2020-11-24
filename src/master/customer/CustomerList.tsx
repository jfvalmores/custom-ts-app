import * as React from 'react';
import BaseList from '../../components/BaseList';

interface Customer {
  id: number;
  name: string;
  age?: number;
  offer?: boolean;
}

interface State {
  customers: Customer[];
}

interface Props {}

class CustomerList extends BaseList<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      customers: [
        { id: 1, name: 'Justine', age: 25, offer: true },
        { id: 2, name: 'Francis', age: 25 },
        { id: 3, name: 'Harriete', age: 25, offer: true },
        { id: 4, name: 'Anne', age: 25 },
        { id: 5, name: 'Marie', age: 25 },
      ],
    };
  }

  getNameLabel = (customer: Customer): string => {
    return (
      customer.name +
      (customer.offer ? ' (We have a special offer just for you!)' : '')
    );
  };

  render() {
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
