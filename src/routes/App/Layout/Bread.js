import React, { Component } from 'react'
import { Breadcrumb } from 'antd'
import { menu } from '../../../utils'
import styles from './Bread.less'

class Breads extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        const pathname = (window.location.pathname);
        const keys = pathname.substr(1,pathname.length-1).split('-');
        const getName = (Arr,key) => {
            for(var i = 0 ; i<Arr.length;i++){
                if(Arr[i].children){
                    if(getName(Arr[i].children,key)){
                        return getName(Arr[i].children,key);
                    };
                }
                if(Arr[i].key === key){
                    return Arr[i].name;
                }
            }
        }
        const names = keys.map(key => {
            return getName(menu,key);
        })
        const getBread = () => {
            return names.map((name,index) => {
                return(<Breadcrumb.Item key={index}>{name}</Breadcrumb.Item>);            
            });
        }
        return (
            <div className={styles.bread}>
                <Breadcrumb>
                    {getBread()}
                </Breadcrumb>
            </div>
        );
    }
}

export default Breads