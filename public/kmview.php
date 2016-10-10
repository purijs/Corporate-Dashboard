<div ng-repeat="i in issues | filter:{ status: 'Open' } as filtered"></div>
<h4>Currently Open Issues: {{ filtered.length }}</h4>
<hr>
<br>
<center><b>Open Issues/Month</b></center>
<br>
<canvas id="bar" class="chart chart-bar"
        chart-data="data1" chart-labels="labels1" chart-series="series1">
</canvas>
<br>
<center><b>No. of Customer Paying</b></center>
<br>
<canvas id="line" class="chart chart-line" chart-data="data"
        chart-labels="labels" chart-series="series" chart-options="options"
        chart-dataset-override="datasetOverride" chart-click="onClick" chart-hover="onHover"  style="width: 50% !important; height: 50% !important;"
</canvas>