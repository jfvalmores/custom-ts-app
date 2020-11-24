import * as React from 'react';
import { Renderer } from '../utils/Types';
import Base from './Base';

class BaseDetail extends Base {
  renderHeader(): Renderer {}

  renderContent(): Renderer {}

  renderFooter(): Renderer {}

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
