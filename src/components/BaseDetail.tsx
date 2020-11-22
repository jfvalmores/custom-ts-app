import React from 'react';
import Base from './Base';

class BaseDetail extends Base {
  renderHeader() {
    return null;
  }

  renderContent() {
    return (
      <div>
        Hey this is from BaseDetail
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

export default BaseDetail;