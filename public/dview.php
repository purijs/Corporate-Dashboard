<div class="filter-dv">
    <table>
        <tr>
            <td>
                <select ng-focus="updS()" ng-change="filter()" aria-label="Filter" name="filter" class="form-control" ng-model="form.filter">
                    <option value="">--Filter By--</option>
                    <option ng-repeat="f in filters" value="{{ f }}">{{ f }}</option>
                </select>
            </td>
            <td style="position:relative;left: 10px;">
                <select ng-focus="updF()" ng-change="sort()" aria-label="Sort" name="sort" class="form-control" ng-model="form.sort">
                    <option value="">--Sort By--</option>
                    <option ng-repeat="s in sorts" value="{{ s }}">{{ s }}</option>
                </select>
            </td>
        </tr>
    </table>
</div>
<table border="0" class="data-view table" cellpadding="5" cellspacing="5">
    <tr>
        <th>Customer</th>
        <th>Employee</th>
        <th>Status</th>
        <th>Submitted</th>
        <th>Closed</th>
        <th>E-mail</th>
        <th>Description</th>
    </tr>
    <tr ng-show="filterTypeSa" ng-repeat="record in issues">
        <td>{{ record.name }}</td>
        <td>{{ record.emp }}</td>
        <td>{{ record.status }}</td>
        <td>{{ record.open }}</td>
        <td>{{ record.closed }}</td>
        <td>{{ record.mail }}</td>
        <td>{{ record.desc }}</td>
    </tr>
    <tr ng-show="filterTypeDa" ng-repeat="record in issues | orderBy: 'open' ">
        <td>{{ record.name }}</td>
        <td>{{ record.emp }}</td>
        <td>{{ record.status }}</td>
        <td>{{ record.open }}</td>
        <td>{{ record.closed }}</td>
        <td>{{ record.mail }}</td>
        <td>{{ record.desc }}</td>
    </tr>
    <tr ng-show="filterTypeEp" ng-repeat="record in issues | filter:{ emp: 'M. Panda' }">
        <td>{{ record.name }}</td>
        <td>{{ record.emp }}</td>
        <td>{{ record.status }}</td>
        <td>{{ record.open }}</td>
        <td>{{ record.closed }}</td>
        <td>{{ record.mail }}</td>
        <td>{{ record.desc }}</td>
    </tr>
    <tr ng-show="filterTypeEj" ng-repeat="record in issues | filter:{ emp: 'Jackie Rob' }">
        <td>{{ record.name }}</td>
        <td>{{ record.emp }}</td>
        <td>{{ record.status }}</td>
        <td>{{ record.open }}</td>
        <td>{{ record.closed }}</td>
        <td>{{ record.mail }}</td>
        <td>{{ record.desc }}</td>
    </tr>
    <tr ng-show="filterTypeEg" ng-repeat="record in issues | filter:{ emp: 'George' }">
        <td>{{ record.name }}</td>
        <td>{{ record.emp }}</td>
        <td>{{ record.status }}</td>
        <td>{{ record.open }}</td>
        <td>{{ record.closed }}</td>
        <td>{{ record.mail }}</td>
        <td>{{ record.desc }}</td>
    </tr>
    <tr ng-show="filterTypeAo" ng-repeat="record in issues | filter:{ status: 'Open' }">
        <td>{{ record.name }}</td>
        <td>{{ record.emp }}</td>
        <td>{{ record.status }}</td>
        <td>{{ record.open }}</td>
        <td>{{ record.closed }}</td>
        <td>{{ record.mail }}</td>
        <td>{{ record.desc }}</td>
    </tr>
    <tr ng-show="filterTypeAc" ng-repeat="record in issues | filter:{ status: 'Closed' }">
        <td>{{ record.name }}</td>
        <td>{{ record.emp }}</td>
        <td>{{ record.status }}</td>
        <td>{{ record.open }}</td>
        <td>{{ record.closed }}</td>
        <td>{{ record.mail }}</td>
        <td>{{ record.desc }}</td>
    </tr>
</table>