import * as React from 'react';
import { Renderer } from '../../utils/Types';
import Base from './Base';

class BaseList<P = {}, S = {}> extends Base<P, S> {
  renderHeader(): Renderer {}

  renderContent(): Renderer {}

  renderFooter(): Renderer {}

  getFilter(): Renderer {}

  getDetail(): Renderer {}

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
