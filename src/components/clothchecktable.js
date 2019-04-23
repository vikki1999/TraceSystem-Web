import React from 'react';
import $ from 'jquery';
import {Button} from 'antd';

const table={
    marginTop: 10,
    textAlign: 'center',
}
const input={
    border:0,
    outline:'none',
}
class ClothCheckTable extends React.Component {
    constructor(props) {

            super(props);
        
        //     this.selectElement = this.selectElement.bind(this);
        
          }
    componentDidMount() {
        // const body = document.getElementById('main');
        // const script1 = document.createElement('script');
        // script1.src = 'https://code.jquery.com/jquery-3.1.1.min.js';
        // const script2 = document.createElement('script');
        // script2.src = '/src/components/FileSaver.js';
        // const script3 = document.createElement('script');
        // script3.src = '/src/components/jquery.wordexport.js';
        // body.appendChild(script1);
        // body.appendChild(script2);
        // body.appendChild(script3);
        $("#export").click(function(){
            // for(var i=0;i<$('#table input').length;i++){
                // $('#table input')[i].parentNode.innerHtml=$('#table input')[i].value;
                // console.log($('input')[i].parent());
                console.log($('#table input')[4].value);
            // }
            console.log($('input:radio:checked').val());
            // window.wordExport($("#table"),$("#checkdate").val()+$("#productid").val()+"服装质量查检表");
        });
    }

render() {
    
    return (
        <div id="main" style={{ width: '100%' }}>
            
            <div id="table">
                <h3 align="center">服装质量查检表</h3>
                <table border="1" align="center" cellSpacing="0px" style={table}>
                    <tbody>
                        <tr>
                            <td colSpan="2">检测人员</td>
                            <td colSpan="2"><input type="text" style={input}/></td>
                            <td colSpan="2">检测时间</td>
                            <td colSpan="2"><input id="checkdate" type="date" style={input}/></td>
                        </tr>
                        <tr>
                            <td colSpan="2">产品编码</td>
                            <td colSpan="2"><input id="productid" type="text" style={input}/></td>
                            <td colSpan="2">检测地点</td>
                            <td colSpan="2"><input type="text" style={input}/></td>
                        </tr>
                        <tr>
                            <td rowSpan="2">项目</td>
                            <td rowSpan="2">序</td>
                            <td colSpan="2" rowSpan="2">检查项目</td>
                            <td colSpan="2">允许偏差或允许值</td>
                            <td colSpan="2" rowSpan="2">评定（合格打勾✔，有具体数值的备注）</td>
                        </tr>
                        <tr>
                            <td>单位</td>
                            <td>数值</td>
                        </tr>
                        <tr>
                            <td rowSpan="3">外观检验</td>
                            <td>1</td>
                            <td colSpan="2">有无走纱、破损</td>
                            <td colSpan="2"></td>
                            <td colSpan="2"><input type="checkbox"/><input type="text" style={input}/></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td colSpan="2">有无污渍</td>
                            <td colSpan="2"></td>
                            <td colSpan="2"><input type="checkbox"/><input type="text" style={input}/></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan="2">领圈夹圈要平服、圆顺</td>
                            <td colSpan="2"></td>
                            <td colSpan="2"><input type="checkbox"/><input type="text" style={input}/></td>
                        </tr>
                        <tr>
                            <td rowSpan="2">布质检验</td>
                            <td>1</td>
                            <td colSpan="2">缩水率</td>
                            <td colSpan="2"></td>
                            <td colSpan="2"><input type="checkbox"/><input type="text" style={input}/></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td colSpan="2">色牢度</td>
                            <td colSpan="2"></td>
                            <td colSpan="2"><input type="checkbox"/><input type="text" style={input}/></td>
                        </tr>
                        <tr>
                            <td rowSpan="5">尺寸检验</td>
                            <td>1</td>
                            <td colSpan="2">衣长（肩顶度）</td>
                            <td>cm</td>
                            <td>+-1.5</td>
                            <td colSpan="2"><input type="checkbox"/><input type="text" style={input}/></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td colSpan="2">胸宽（夹下1cm度）</td>
                            <td>cm</td>
                            <td>+-1</td>
                            <td colSpan="2"><input type="checkbox"/><input type="text" style={input}/></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan="2">腰宽</td>
                            <td>cm</td>
                            <td>+-1</td>
                            <td colSpan="2"><input type="checkbox"/><input type="text" style={input}/></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td colSpan="2">肩宽</td>
                            <td>cm</td>
                            <td>+-1</td>
                            <td colSpan="2"><input type="checkbox"/><input type="text" style={input}/></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td colSpan="2">袖长</td>
                            <td>cm</td>
                            <td>+-1.5</td>
                            <td colSpan="2"><input type="checkbox"/><input type="text" style={input}/></td>
                        </tr>
                        <tr>
                            <td rowSpan="4">对称检验</td>
                            <td>1</td>
                            <td colSpan="2">领尖大小，领骨是否相对</td>
                            <td colSpan="2"></td>
                            <td colSpan="2"><input type="checkbox"/><input type="text" style={input}/></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td colSpan="2">两肩、两夹圈的阔度</td>
                            <td colSpan="2"></td>
                            <td colSpan="2"><input type="checkbox"/><input type="text" style={input}/></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan="2">两袖长短、袖口宽窄</td>
                            <td colSpan="2"></td>
                            <td colSpan="2"><input type="checkbox"/><input type="text" style={input}/></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td colSpan="2">左右插袋高低、袋口大小</td>
                            <td colSpan="2"></td>
                            <td colSpan="2"><input type="checkbox"/><input type="text" style={input}/></td>
                        </tr>
                        <tr>
                            <td rowSpan="4">做工检验</td>
                            <td>1</td>
                            <td colSpan="2">各部位线路顺直、整齐牢固</td>
                            <td colSpan="2"></td>
                            <td colSpan="2"><input type="checkbox"/><input type="text" style={input}/></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td colSpan="2">无领筒歪斜、底筒外露</td>
                            <td colSpan="2"></td>
                            <td colSpan="2"><input type="checkbox"/><input type="text" style={input}/></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan="2">夹顶顺直不起角</td>
                            <td colSpan="2"></td>
                            <td colSpan="2"><input type="checkbox"/><input type="text" style={input}/></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td colSpan="2">底面线松紧适宜，不起皱</td>
                            <td colSpan="2"></td>
                            <td colSpan="2"><input type="checkbox"/><input type="text" style={input}/></td>
                        </tr>
                        <tr>
                            <td rowSpan="2">整烫检验</td>
                            <td>1</td>
                            <td colSpan="2">无烫黄、极光、水渍、脏污</td>
                            <td colSpan="2"></td>
                            <td colSpan="2"><input type="checkbox"/><input type="text" style={input}/></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td colSpan="2">线头彻底清剪</td>
                            <td colSpan="2"></td>
                            <td colSpan="2"><input type="checkbox"/><input type="text" style={input}/></td>
                        </tr>
                        <tr>
                            <td rowSpan="2">物料检验</td>
                            <td>1</td>
                            <td colSpan="2">唛头位置及车缝效果正确</td>
                            <td colSpan="2"></td>
                            <td colSpan="2"><input type="checkbox"/><input type="text" style={input}/></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td colSpan="2">全部按照工艺流程指示</td>
                            <td colSpan="2"></td>
                            <td colSpan="2"><input type="checkbox"/><input type="text" style={input}/></td>
                        </tr>
                        <tr>
                            <td rowSpan="2">结果及评定</td>
                            <td colSpan="7">共发现不符合：重点项&nbsp;&nbsp;<input type="number" border="0" style={{width:30,border:0,outline:'none',}} />项；
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一般项&nbsp;&nbsp;<input type="number" border="0" style={{width:30,border:0,outline:'none',}} />项。</td>
                        </tr>
                        <tr>
                            <td colSpan="7">
                                评定：<input name="result" value="ok" type="radio" />合格&nbsp;&nbsp;&nbsp;&nbsp;
                                <input name="result" value="okbut"  type="radio" />合格待完善&nbsp;&nbsp;&nbsp;&nbsp;
                                <input name="result" value="notok" type="radio" />不合格
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div align="right" style={{marginTop:10,marginRight:'21%'}}>
                <Button type="primary" style={{width:100}} id="export">导出</Button>
            </div>
            
        </div>
    );
    

}
    
}

export default ClothCheckTable;