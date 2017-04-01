import React, { Component } from 'react';
import Page from '../pages/Page';
import Container from '../containers/abrechnungAmbOpsKasse';

class AbrechnungAmbOpsKasse extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle() {
    return 'Dashboard | reactGo';
  }

  pageMeta() {
    return [
      { name: 'description', content: 'A reactGo example of a dashboard page' }
    ];
  }

  pageLink() {
    return [];
  }

  render() {
    return (
      <Page {...this.getMetaData()}>
        <Container {...this.props} />
      </Page>
    );
  }
}

export default AbrechnungAmbOpsKasse;

