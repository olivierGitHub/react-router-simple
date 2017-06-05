import React, { Component } from 'react';
import Title from './subComponent/title.js';
import Paragraph from './subComponent/paragraph.js';


class Home extends Component {
  render() {
    return (
      <div>
        <br />
        <Title value="This is the homepage" />
        <br />
        <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." />
        <Paragraph text="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
        <Paragraph text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore." />
      </div>
    );
  }
}

export default Home;
