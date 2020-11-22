import React, { Component } from 'react';
import Helpers from '../utils/Helpers';

class Base<P = {}, S = {}, SS = any> extends Component<P, S, SS> {
  fn: any;

  constructor(props: any) {
    super(props);

    this.fn = new Helpers();
  }

  renderHeader(): null | JSX.Element {
    return this.getGenericRender('renderHeader');
  }

  renderContent(): null | JSX.Element {
    return this.getGenericRender('renderContent');
  }

  renderFooter(): null | JSX.Element {
    return this.getGenericRender('renderFooter');
  }

  getGenericRender(fnSource = ''): JSX.Element {
    return (
      <div>
        Hey, this is the default render from <b>`BaseList::{fnSource}`</b>.
        <br />
        Reuse this function on your derived class and create your own JSX content.
      </div>
    );
  }
}

export default Base;