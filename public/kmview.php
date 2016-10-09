<div class="col-md-12 col-centered">
    <div ng-repeat="i in issues | filter:{ status: 'Open' } as filtered"></div>
    <h4>Open Issues: {{ filtered.length }}</h4>
    <hr>
    <canvas id="line" class="chart chart-line" chart-data="data"
            chart-labels="labels" chart-series="series" chart-options="options"
            chart-dataset-override="datasetOverride" chart-click="onClick" style="width: 50% !important; height: 50% !important;"
    </canvas>
</div>