import { Component } from 'react';

abstract class Base extends Component {

  abstract renderHeader(): null | JSX.Element;

  abstract renderContent(): null | JSX.Element;

  abstract renderFooter(): null | JSX.Element;
  
}

export default Base;