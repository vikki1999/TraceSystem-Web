import React , { Component } from 'react'
import { Layout } from 'antd'

const { Footer } = Layout

class Footers extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2019 Created by Ant UED
            </Footer>
        );
    }
}

export default Footers;