import React , { Component } from 'react'
import Test from '../../../components/echart'
import EchartsArea from '../../../components/EchartsArea'
import EchartsForce from '../../../components/EchartsForce'
import EchartsPie from '../../../components/EchartsPie'
import EchartsEffectScatter from '../../../components/EchartsEffectScatter'
import {Row,Col,Card} from 'antd'

class Market extends Component {
    constructor( props ){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div>
                {/* <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box"> */}
                            <Card bordered={false}>
                                <Test data={{
                                    xdata: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                                    ydata: {
                                    ydata1:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                                    ydata2:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                                    }
                                }}/>
                            </Card>
                        {/* </div>
                    </Col>
                </Row> */}
                <Row gutter={16}>
                    <Col className="gutter-row" md={16}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <EchartsArea />
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={8}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <EchartsPie />
                            </Card>
                        </div>
                    </Col>
                </Row>
                
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <EchartsEffectScatter />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}



export default Market;