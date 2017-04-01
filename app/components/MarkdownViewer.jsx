import React from 'react';
import markdown from 'markdown';

var markdown = markdown.parse(this.props.markdown);

const Dashboard = () => (
  <div className={cx('container')}>
    <div dangerouslySetInnerHTML={markdown}></div>
  </div>
);

export default MarkdownViewer;