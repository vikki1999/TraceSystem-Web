import React from 'react';
import ReactEcharts from 'echarts-for-react';

const option = {
    title: {
        text: '产品类型销量',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#777'
        }
    },

    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series : [
        {
            name:'产品类型',
            type:'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {value:335, name:'衬衫'},
                {value:310, name:'卫衣'},
                {value:274, name:'定制西服'},
                {value:235, name:'西服'},
                {value:400, name:'西裤'}
            ].sort(function (a, b) { return a.value - b.value}),
            roseType: 'angle',
            label: {
                normal: {
                    textStyle: {
                        color: '#777'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: '#777'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: '#777'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};

const EchartsPie = () => (
    <ReactEcharts
        option={option}
        style={{height: '300px', width: '100%'}}
        className={'react_for_echarts'}
    />
);

export default EchartsPie;