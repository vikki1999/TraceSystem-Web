// excel.js
import React, { Component } from 'react';
import $ from 'jquery';
import { Button, Icon, message } from 'antd';
import * as XLSX from 'xlsx';
import styles from './index.less';
import {SpreadSheets, Worksheet, Column} from '@grapecity/spread-sheets-react';
import '@grapecity/spread-sheets/styles/gc.spread.sheets.excel2016colorful.css';
import ClothCheckTable from '../../components/clothchecktable'

class Excel extends Component {
  constructor(props){
    super(props);
    this.hostStyle =
         {
            //  left: "20px",
            //  right: "20px",
            //  position: "absolute",
             textAlign: "left"
         };
    var self = this;
    this.workbookInitialized = function(workbook){
      self.spread = workbook;
      console.log(workbook.getSheetCount());
    }
  }
  onImportExcel = file => {
    // 获取上传的文件对象
    const { files } = file.target;
    // 通过FileReader对象读取文件
    const fileReader = new FileReader();
    fileReader.onload = event => {
      try {
        const { result } = event.target;
        // 以二进制流方式读取得到整份excel表格对象
        const workbook = XLSX.read(result, { type: 'binary' });
         // 存储获取到的数据
        let data = [];
        // 遍历每张工作表进行读取（这里默认只读取第一张表）
        for (const sheet in workbook.Sheets) {
          // esline-disable-next-line
          if (workbook.Sheets.hasOwnProperty(sheet)) {
            // 利用 sheet_to_json 方法将 excel 转成 json 数据
            data = data.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));
            // break; // 如果只取第一张表，就取消注释这行
          }
        }
        // 最终获取到并且格式化后的 json 数据
        message.success('上传成功！')
        console.log(data);
      } catch (e) {
        // 这里可以抛出文件类型错误不正确的相关提示
        message.error('文件类型不正确！');
      }
    };
    // 以二进制方式打开文件
    fileReader.readAsBinaryString(files[0]);
  }
exportExcel=(headers, data, fileName = '请假记录表.xlsx')=> {
    const _headers = headers
      .map((item, i) => Object.assign({}, { key: item.key, title: item.title, position: String.fromCharCode(65 + i) + 1 }))
      .reduce((prev, next) => Object.assign({}, prev, { [next.position]: { key: next.key, v: next.title } }), {});
  
    const _data = data
      .map((item, i) => headers.map((key, j) => Object.assign({}, { content: item[key.key], position: String.fromCharCode(65 + j) + (i + 2) })))
      // 对刚才的结果进行降维处理（二维数组变成一维数组）
      .reduce((prev, next) => prev.concat(next))
      // 转换成 worksheet 需要的结构
      .reduce((prev, next) => Object.assign({}, prev, { [next.position]: { v: next.content } }), {});
  
    // 合并 headers 和 data
    const output = Object.assign({}, _headers, _data);
    // 获取所有单元格的位置
    const outputPos = Object.keys(output);
    // 计算出范围 ,["A1",..., "H2"]
    const ref = `${outputPos[0]}:${outputPos[outputPos.length - 1]}`;
  
    // 构建 workbook 对象
    const wb = {
      SheetNames: ['mySheet'],
      Sheets: {
        mySheet: Object.assign(
          {},
          output,
          {
            '!ref': ref,
            '!cols': [{ wpx: 45 }, { wpx: 100 }, { wpx: 200 }, { wpx: 80 }, { wpx: 150 }, { wpx: 100 }, { wpx: 300 }, { wpx: 300 }],
          },
        ),
      },
    };
  
    // 导出 Excel
    XLSX.writeFile(wb, fileName);
  }
  render() {
    const initColumn = [{
        title: '工号',
        dataIndex: 'employeeNo',
        key: 'employeeNo',
        className: 'text-monospace',
      }, {
        title: '姓名',
        dataIndex: 'employeeName',
        key: 'employeeName',
      }, {
        title: '部门',
        dataIndex: 'org',
        key: 'org',
        width: 300,
        computed: record => record.org.substring(6),
      }, {
        title: 'Code',
        dataIndex: 'processShortCode',
        key: 'processShortCode',
        className: 'text-monospace',
      }, {
        title: '假期类型',
        dataIndex: 'leaveTypeLabel',
        key: 'leaveTypeLabel',
      }];
    const attendanceInfoList =[
        {employeeNo:'12345',employeeName:'test',org:'test',processShortCode:'20493',
        leaveTypeLabel:'jahd',
        },{
            employeeNo:'2222',employeeName:'test2',org:'test2',processShortCode:'3434',
        leaveTypeLabel:'jahd2',
        }
    ]
    return (
      <div style={{ marginTop: 100 }}>
        <Button className={styles['upload-wrap']}>
          <Icon type='upload' />
          <input className={styles['file-uploader']} type='file' accept='.xlsx, .xls' onChange={this.onImportExcel} />
          <span className={styles['upload-text']}>上传文件</span>
        </Button>
        <p className={styles['upload-tip']}>支持 .xlsx、.xls 格式的文件</p>
        <Button
            type="primary"
            onClick={() => this.exportExcel(initColumn, attendanceInfoList)}>
            导出
        </Button>
        
        {/* <div style={this.hostStyle}>
          <SpreadSheets workbookInitialized={this.workbookInitialized}></SpreadSheets>
        </div> */}
        <ClothCheckTable result="" />
      </div >
    );
  }
}

export default Excel;