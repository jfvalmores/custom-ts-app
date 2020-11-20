import { Component } from 'react';

abstract class Base extends Component {

  abstract renderPreHeader(): null | JSX.Element;
  abstract renderHeader(): null | JSX.Element;
  abstract renderPostHeader(): null | JSX.Element;

  abstract renderPreContent(): null | JSX.Element;
  abstract renderContent(): null | JSX.Element;
  abstract renderPostContent(): null | JSX.Element;

  abstract renderPreFooter(): null | JSX.Element;
  abstract renderFooter(): null | JSX.Element;
  abstract renderPostFooter(): null | JSX.Element;
  
}

export default Base;