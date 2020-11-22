import React from 'react';
import Base from './Base';

class BaseFilter<P = {}, S = {}> extends Base<P, S> {
  renderHeader() {
    return null;
  }

  renderContent() {
    return (
      <div>
        Hey this is from BaseFilter
      </div>
    );
  }

  renderFooter() {
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

export default BaseFilter;