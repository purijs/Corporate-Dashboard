<ng-map center="[43.856259,18.413076]" style="height: 480px;" zoom="4">
    <h4 ng-repeat="p in points">
        <marker icon="{{customIcon}}" position="{{p.latitude}}, {{p.longitude}}"></marker>
        <custom-marker position="{{p.latitude}}, {{p.longitude}}"><h4>Employees: {{ p.employees }}</h4></custom-marker>
</ng-map>
