import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";
import { generateSeries } from './tools';

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_dataviz);

function createBarChart(id, data, options, unit="R$") {
    let chart = am4core.create(id, am4charts.XYChart);
    chart.paddingRight = 20;

    data = data.map(row => {
        return {...row, Total: 0.0}
    })

    chart.data = data;

    
    if(options.colSeries.length > 1 || options.lineSeries.length === 0) {
        let autoSeries = generateSeries(data);
        options = {...options, colSeries: options.colSeries.filter(c => {
            return autoSeries.includes(c.name);
        })};
    }

    if(options.colSeries.length > 1 || options.lineSeries.length > 1) {
        chart.legend = new am4charts.Legend();
        chart.legend.labels.template.fill = am4core.color("#fff")
        chart.legend.markers.template.width = 10;
        chart.legend.markers.template.height = 10;
        chart.legend.labels.template.truncate = true;
        chart.legend.labels.template.maxWidth = 0.1;
        chart.legend.scrollable = true;
        chart.legend.maxHeight = 68;
    }

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.labels.template.fill = "#ccc"
    dateAxis.renderer.grid.template.stroke = "#999"
    dateAxis.renderer.grid.template.location = 0.5;
    dateAxis.renderer.cellStartLocation = 0.1
    dateAxis.renderer.cellEndLocation = 0.9
    dateAxis.renderer.labels.template.location = 0.5;
    dateAxis.renderer.minGridDistance = 50;
    dateAxis.tooltip.zIndex = -10;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;
    valueAxis.min = options.minValue;
    valueAxis.renderer.labels.template.fill = "#ccc"
    valueAxis.renderer.grid.template.stroke = "#999"
    valueAxis.calculateTotals = true;  
    valueAxis.extraMax = 0.25;   
    if(options.distribution) {
        valueAxis.max = 100;
        valueAxis.strictMinMax = true;
        valueAxis.calculateTotals = true;
        valueAxis.renderer.minWidth = 50;
        valueAxis.renderer.inside = true;
        valueAxis.renderer.labels.template.disabled = true;
        valueAxis.min = 0;
    }


    var test;
    var bool = false;
    options.colSeries.map(series => {
        let s = chart.series.push(new am4charts.ColumnSeries());
        s.stacked = options.stacked;
        s.name = series.name.charAt(0).toUpperCase() + series.name.slice(1);
        s.dataFields.dateX = "date";
        s.dataFields.valueY = series.name;
        if(series.name === 'Total'){
            test = s;
            bool = true;
            s.hiddenInLegend = true;
            s.tooltip.disabled = true;
        }
        if(options.distribution)
            s.dataFields.valueYShow = "totalPercent";
        if(options.colSeries.length > 1) {
            s.tooltipText = series.name.charAt(0).toUpperCase() + series.name.slice(1) + ": " + unit + options.format;
            s.tooltip.pointerOrientation = "down";
        }
        else 
            s.tooltipText = unit + options.format;
        s.columns.template.stroke = "#131722";
        s.columns.template.width = am4core.percent(100);
        if(series.color && series.color.length === 1) {
            s.columns.template.fill = am4core.color(series.color[0]);
        } else if(series.color) {
            s.columns.template.adapter.add("fill", function(fill, target) {
                if(target.dataItem.valueY < 0)
                    return am4core.color(series.color[1]);
                return am4core.color(series.color[0]);
            })
        }
        return s;
    })

    if(bool) {
        let totalBullet = test.bullets.push(new am4charts.LabelBullet());
        totalBullet.dy = -10;
        totalBullet.label.text = "{valueY.sum.formatNumber('#.00a')}";
        totalBullet.label.scale = 2;
        totalBullet.label.hideOversized = false;
        totalBullet.label.fontSize = 6;
        totalBullet.label.fill = '#fff'
        totalBullet.label.padding(5, 10, 5, 10);

    }

    options.lineSeries.map(series => {
        let s = chart.series.push(new am4charts.LineSeries());
        s.dataFields.dateX = "date";
        s.dataFields.valueY = series.name;
        s.tooltipText = unit + options.format;
        s.strokeWidth = 2;
        s.minBulletDistance = 10;
        s.tooltip.pointerOrientation = "vertical";
        s.tooltip.background.cornerRadius = 20;
        s.tooltip.background.fillOpacity = 0.5;
        s.tooltip.label.padding(12,12,12,12)
        s.fill = am4core.color(series.color);
        s.stroke = am4core.color(series.color);
        s.fillOpacity = series.fill;

        var bullet = s.bullets.push(new am4charts.CircleBullet());
        bullet.circle.strokeWidth = 2;
        bullet.circle.radius = 4;
        bullet.circle.fill = am4core.color("#fff");
        
        var bullethover = bullet.states.create("hover");
        bullethover.properties.scale = 1.3;

        return s;
    })

    chart.cursor = new am4charts.XYCursor();
    valueAxis.sortBySeries = chart.series;

    return chart;
}

export { createBarChart };