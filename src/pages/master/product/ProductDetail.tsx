import * as React from 'react';
import BaseDetail from '../../components/BaseDetail';

class ProductDetail extends BaseDetail {
  renderContent() {
    return (
      <div className='detail-container'>
        <form className='form'>
          <div className='form-control'>
            <label>Product ID</label>
            <input name='productId' />
          </div>
          <div className='form-control'>
            <label>Product Name</label>
            <input name='productName' />
          </div>
          <div className='form-control'>
            <label>Is Active</label>
            <input name='isActive' />
          </div>
        </form>
      </div>
    );
  }
}

export default ProductDetail;
