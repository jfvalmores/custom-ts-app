import React from 'react';
import Base from './Base';

class BaseList<P = {}, S = {}> extends Base<P, S> {

  renderHeader(): null | JSX.Element {
    return null;
  }

  renderContent(): null | JSX.Element {
    return null;
  }

  renderFooter(): null | JSX.Element {
    return null;
  }

  render() {
    return (
      <>
        {this.renderHeader()}
        {this.renderContent()}
        {this.renderFooter()}
      </>
    );
  }
}

export default BaseList;