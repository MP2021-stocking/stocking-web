import React from 'react';
import StyledStockChart from "./StockChart.styles";
import ReactHighcharts from 'react-highcharts/ReactHighstock.src'
import moment from 'moment'
import sample_data from "./sample_chart_data.json"

export const StockChart = () => {
    const options = {style: 'currency', currency: 'KRW'};
    const numberFormat = new Intl.NumberFormat('ko-KR', options);

    const configPrice = {
        yAxis: [{
            offset: 20,
            labels: {
                formatter: function () {
                    return numberFormat.format(this.value)
                },
                x: -15,
                style: {
                    "color": "#000", "position": "absolute"
                },
                align: 'left'
            },
        }],
        tooltip: {
            shared: true,
            formatter: function () {
                return numberFormat.format(this.y, 0) + '</b><br/>' + moment(this.x).format('YYYY-MM-DD ')
            }
        },
        chart: {
            height: 400,
            width:700
        },
        credits: {
            enabled: false
        },
        xAxis: {
            type: 'date',
        },
        series: [{
            name: 'Price',
            type: 'spline',
            data: sample_data,
            tooltip: {
                valueDecimals: 2
            }
        }]
    };

    return (<StyledStockChart>
        <ReactHighcharts config={configPrice}/>
    </StyledStockChart>);
};

StockChart.propTypes = {};

StockChart.defaultProps = {};
