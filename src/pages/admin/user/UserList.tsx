import * as React from 'react';
import BaseList from '../../../components/BaseList';

class UserList extends BaseList {
  renderContent() {
    return (
      <div>
        <ul>
          <li>Hello</li>
          <li>User</li>
          <li>List</li>
        </ul>
      </div>
    );
  }
}

export default UserList;
