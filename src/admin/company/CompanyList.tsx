import * as React from 'react';
import BaseList from '../../components/BaseList';

class CompanyList extends BaseList {
  renderContent() {
    return (
      <div>
        <h2>Top Companies</h2>
        <ol>
          <li>Acme Company</li>
          <li>Brand X</li>
          <li>Doofenshmirtz</li>
        </ol>
      </div>
    );
  }
}

export default CompanyList;
