import Echarts from 'echarts'

const chartDom = document.getElementById('chart')
const chart = Echarts.init(chartDom)
chart.setOption({
    title:{
        text: '快速入门Echarts开发'
    },
    xAxis:{
        data:['服装','电子产品',"食物"]
    },
    yAxis:{
        
    },
    series:{
        type:'bar',
        data:[100,70,15]

    }
})