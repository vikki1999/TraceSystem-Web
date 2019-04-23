// power = { 1: "查看菜单", 2: "查看详情", 3: "新增", 4: "修改", 5: "删除", 6: "审核", 7: "上传" }
// options = { MENU: "查看菜单", DETAIL: "查看详情", ADD: "新增", UPDATE: "修改", DELETE: "删除", CHECK: "审核", UPLOAD: "上传" }
import _ from 'lodash'

const menu = [
    
    // account
    {
        // id: _.uniqueId(),
        key: 'account',
        name: '用户管理',
        icon: 'user',
        clickable: false,
        power: [1],
        children: [
            {
                // id: _.uniqueId(),
                key: 'admin',
                name: '管理员',
                power: [1, 2, 3, 4, 5],
                path:'/account-admin'
            },
            {
                // id: _.uniqueId(),
                key: 'role',
                name: '管理员角色',
                power: [1, 2, 3, 4, 5],
                path:'/account-role'
            },
            {
                // id: _.uniqueId(),
                key: 'user',
                name: '用户',
                power: [1, 2, 3, 4, 5],
                path:'/account-user'
            },
        ],
    },
    // enterprise
    {
        // id: _.uniqueId(),
        key: 'enterprise',
        name: '企业管理',
        icon: 'bank',
        clickable: false,
        power: [1],
        children: [
            {
                // id: _.uniqueId(),
                key: 'company',
                name: '企业信息管理',
                power: [1, 2, 3, 4, 5],
                path:'/enterprise-company'
            },{
                // id: _.uniqueId(),
                key: 'supplier',
                name: '供应商管理',
                power: [1, 2, 3, 4, 5],
                path:'/enterprise-supplier'
            },{
                // id: _.uniqueId(),
                key: 'introduce',
                name: '企业介绍',
                power: [1, 2, 3, 4, 5],
                path:'/enterprise-introduce'
            }, {
                // id: _.uniqueId(),
                key: 'brand',
                name: '品牌管理',
                power: [1, 2, 3, 4, 5],
                path:'/enterprise-brand'
            }, {
                // id: _.uniqueId(),
                key: 'designer',
                name: '设计师管理',
                power: [1, 2, 3, 4, 5],
                path:'/enterprise-designer'
            }, {
                // id: _.uniqueId(),
                key: 'technology',
                name: '工艺管理',
                power: [1, 2, 3, 4, 5],
                path:'/enterprise-technology'
            }, {
                // id: _.uniqueId(),
                key: 'workhouse',
                name: '仓库管理',
                power: [1, 2, 3, 4, 5],
                path:'/enterprise-workhouse'
            }, {
                // id: _.uniqueId(),
                key: 'factory',
                name: '工厂管理',
                power: [1, 2, 3, 4, 5],
                path:'/enterprise-factory'
            },{
                // id: _.uniqueId(),
                key: 'distribute',
                name: '分销商管理',
                power: [1, 2, 3, 4, 5],
                path:'/enterprise-distribute'
            },
        ],
    },
    //process
    {
        // id: _.uniqueId(),
        key: 'process',
        name: '生产过程流通',
        icon: 'chrome',
        clickable: false,
        power: [1],
        children: [
            {
                // id: _.uniqueId(),
                key: 'idea',
                name: '设计生产流程',
                power: [1, 2, 3, 4, 5],
                path:'/process-idea'
            },
            {
                // id:_.uniqueId(),
                key:'material',
                name:'原料流通',
                power: [1, 2, 3, 4, 5],
                path:'/process-material'
            },{
                // id: _.uniqueId(),
                key: 'manufacture',
                name: '生产流程',
                power: [1, 2, 3, 4, 5],
                path:'/process-manufacture'
            },{
                // id: _.uniqueId(),
                key: 'quality',
                name: '质检',
                power: [1, 2, 3, 4, 5],
                path:'/process-quality'
            },{
                // id: _.uniqueId(),
                key: 'order',
                name: '订单需求',
                power: [1, 2, 3, 4, 5],
                path:'/process-order'
            }
        ]
    },
    //product
    {
        // id:_.uniqueId(),
        key:'product',
        name:'商品管理',
        icon:'shopping',
        clickable:false,
        power:[1],
        children:[
            {
                // id:_.uniqueId(),
                key:'entering',
                name:'商品录入',
                power:[1,2,3,4,5],
                path:'/product-entering'
            },{
                // id:_.uniqueId(),
                key:'cochain',
                name:'商品上链',
                power:[1,2,3,4,5],
                path:'/product-cochain'
            },{
                // id:_.uniqueId(),
                key:'circulation',
                name:'商品流通',
                icon:'gold',
                clickable:false,
                power:[1,2,3,4,5],
                children:[
                    {
                        // id:_.uniqueId(),
                        key:'stockin',
                        name:'商品出库',
                        power:[1,2,3,4,5],
                        path:'/product-circulation-stockin',
                    },{
                        // id:_.uniqueId(),
                        key:'transit',
                        name:'商品流通',
                        power:[1,2,3,4,5],
                        path:'/product-circulation-transit',
                    },{
                        // id:_.uniqueId(),
                        key:'stockout',
                        name:'商品入库',
                        power:[1,2,3,4,5],
                        path:'/product-circulation-stockout',
                    },
                ]
            },{
                // id:_.uniqueId(),
                key:'special',
                name:'特殊处理',
                icon:'disconnect',
                clickable:false,
                power:[1,2,3,4,5],
                children:[
                    {
                        // id:_.uniqueId(),
                        key:'sellout',
                        name:'商品售罄处理',
                        power:[1,2,3,4,5],
                        path:'/product-special-sellout',
                    },{
                        // id:_.uniqueId(),
                        key:'inventory',
                        name:'商品清仓处理',
                        power:[1,2,3,4,5],
                        path:'/product-special-inventory',
                    }
                ]
            }
        ]

    },{
        // id:_.uniqueId(),
        key:'statistic',
        name:'管理统计',
        icon:'laptop',
        clickable:false,
        power:[1],
        children:[
            {
                // id:_.uniqueId(),
                key:'market',
                name:'销售统计',
                power:[1,2,3,4,5],
                path:'/statistic-market',
            },{
                // id:_.uniqueId(),
                key:'trace',
                name:'溯源统计',
                power:[1,2,3,4,5],
                path:'/statistic-trace',
            }
        ]
    }


]



export default menu