import * as React from 'react';
import Helpers from '../utils/Helpers';
import { Renderer } from '../utils/Types';

class Base<P = {}, S = {}, SS = any> extends React.Component<P, S, SS> {
  fn: any;

  constructor(props: any) {
    super(props);

    this.fn = new Helpers();
  }

  renderHeader(): Renderer {
    return this.getGenericRender('renderHeader');
  }

  renderContent(): Renderer {
    return this.getGenericRender('renderContent');
  }

  renderFooter(): Renderer {
    return this.getGenericRender('renderFooter');
  }

  getGenericRender(fnSource = ''): JSX.Element {
    return (
      <div>
        Hey, this is the default render from <b>`BaseList::{fnSource}`</b>.
        <br />
        Reuse this function on your derived class and create your own JSX
        content.
      </div>
    );
  }
}

export default Base;
