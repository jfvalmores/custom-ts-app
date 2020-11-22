import React, { Component } from 'react';

class BaseList<P = {}, S = {}, SS = any> extends Component<P, S, SS> {
  renderHeader() {
    return null;
  }

  renderContent() {
    return (
      <div>
        Hey, this is the default render from <b>`BaseList::renderContent`</b>.
        <br />
        Reuse this function on your derived class and create your own JSX content.
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