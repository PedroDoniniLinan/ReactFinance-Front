import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

function createBarChart(id, data, options, unit="R$") {
    let chart = am4core.create(id, am4charts.XYChart);
    chart.paddingRight = 20;
    chart.data = data;

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.labels.template.fill = "#ccc"
    dateAxis.renderer.grid.template.stroke = "#999"


    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;
    valueAxis.min = options.minValue;
    valueAxis.renderer.labels.template.fill = "#ccc"
    valueAxis.renderer.grid.template.stroke = "#999"

    options.colSeries.map(series => {
        let s = chart.series.push(new am4charts.ColumnSeries());
        s.dataFields.dateX = "date";
        s.dataFields.valueY = series.name;
        s.tooltipText = unit + series.format;
        s.columns.template.stroke = "#131722"
        if(series.color.length === 1) {
            s.columns.template.fill = am4core.color(series.color[0]);
        } else {
            s.columns.template.adapter.add("fill", function(fill, target) {
                if(target.dataItem.valueY < 0)
                    return am4core.color(series.color[1]);
                return am4core.color(series.color[0]);
                // return fill;
            })
        }
        return s;
    })

    options.lineSeries.map(series => {
        let s = chart.series.push(new am4charts.LineSeries());
        s.dataFields.dateX = "date";
        s.dataFields.valueY = series.name;
        s.tooltipText = unit + series.format;
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

    return chart;
}

export { createBarChart };