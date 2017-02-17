/*
    [00]
*/

function procesarResultados() {

    var resultadosInObject = {};

    $.each(registroVotos, function(index, value) {
        if (!resultadosInObject[value.binomio]) {
            resultadosInObject[value.binomio] = 0;
        }
        resultadosInObject[value.binomio] += 1;
    });
    
    var resultadosInArray = [];
    
    $.each(resultadosInObject, function(key, value) {
        resultadosInArray.push([key, value]);
    });
    
    /*
        AnyChart.js
        
        http://docs.anychart.com/7.12.0/Quick_Start/Quick_Start
        http://docs.anychart.com/7.12.0/Working_with_Data/Supported_Data_Formats
        http://docs.anychart.com/7.12.0/Common_Settings/Text_Formatters
        http://docs.anychart.com/7.12.0/Common_Settings/Legend
    */
    
    chart = anychart.pie(resultadosInArray);

    chart.container('chart-container');

    chart.title('Binomio Presidencial');
    chart.labels().position('outside');
    chart.labels().position('outside');
    chart.innerRadius('40%');
    
    var legend = chart.legend();
    legend.fontSize(10);
    
    var tooltip = chart.tooltip();
    tooltip.textFormatter("Votos: {%Value}");

    chart.draw();
}