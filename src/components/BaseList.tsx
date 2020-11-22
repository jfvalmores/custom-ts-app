import React, { Component } from 'react';

class BaseList<P = {}, S = {}, SS = any> extends Component<P, S, SS> {
  renderHeader() {
    return null;
  }

  renderContent() {
    return (
      <div>
        Hey this is from BaseList
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

export default BaseList;