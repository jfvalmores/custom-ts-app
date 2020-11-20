import React, { Component } from 'react';

class BaseFilter extends Component {
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