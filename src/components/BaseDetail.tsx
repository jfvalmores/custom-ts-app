import React from 'react';
import Base from './Base';

class BaseDetail extends Base {
  renderPreHeader = () => null;

  renderHeader = () => null;

  renderPostHeader = () => null;

  renderPreContent = () => null;

  renderContent() {
    return (
      <div>
        Hey this is from BaseDetail
      </div>
    );
  }

  renderPostContent = () => null;

  renderPreFooter = () => null;

  renderFooter = () => null;

  renderPostFooter = () => null;

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