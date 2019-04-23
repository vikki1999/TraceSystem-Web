import $ from 'jquery';
import React from 'react';

import { Button } from 'antd';

class testJquery extends React.Component {

  constructor(props) {

    super(props);

    this.selectElement = this.selectElement.bind(this);

  }

  render() {

    return(

      <p>

        <Button onClick={this.selectElement}>点击一下</Button>

        <h4 className="text">这是：12</h4>

      </p>

    );

  }

  selectElement() {

    console.log('text对象：',$('.text'));

    console.log('text中的值：',$('.text')[0].textContent);

  }

}

export default testJquery;