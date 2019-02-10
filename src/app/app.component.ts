import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  columnDefs = [
    {
      headerName: 'First Name',
      field: 'firstName',
      resizable: true,
      sortable: true,
      autoHeight: true,
      enableRowGroup: true,
      editable: true
    },
    {
      headerName: 'Last Name',
      field: 'lastName',
      resizable: true,
      sortable: true,
      autoHeight: true,
      enableRowGroup: true,
      editable: true
    }
  ];

  rowData = [
    {firstName: 'Fred', lastName: 'Flintstone'},
    {firstName: 'Wilma', lastName: 'Flintstone'},
    {firstName: 'Pebbles', lastName: 'Flintstone'},
    {firstName: 'Barney', lastName: 'Rubble'},
    {firstName: 'Betty', lastName: 'Rubble'},
    {firstName: 'Bamm-Bamm', lastName: 'Rubble'},
    {firstName: 'Bugs', lastName: 'Bunny'},
    {firstName: 'Mickey', lastName: 'Mouse'},
    {firstName: 'Scooby', lastName: 'Doo'},
    {firstName: 'Homer', lastName: 'Simpson'},
    {firstName: 'Lisa', lastName: 'Simpson'},
    {firstName: 'Bart', lastName: 'Simpson'},
    {firstName: 'Marge', lastName: 'Simpson'},
    {firstName: 'Donald', lastName: 'Duck'},
    {firstName: 'SpongeBob', lastName: 'SquarePants'},
    {firstName: 'Daffy', lastName: 'Duck'},
    {firstName: 'Winnie', lastName: 'the Pooh'},
    {firstName: 'Wilie E.', lastName: 'Coyote'},
    {firstName: 'Tom', lastName: 'Cat'},
    {firstName: 'Jerry', lastName: 'Mouse'},
    {firstName: 'Foghorn', lastName: 'Leghorn'},
    {firstName: 'Pepe', lastName: 'Le Pew'},
    {firstName: 'Yosemite', lastName: 'Sam'},
    {firstName: 'Yogi', lastName: 'Bear'},
    {firstName: 'Charlie', lastName: 'Brown'},
    {firstName: 'Woody', lastName: 'Woodpecker'},
    {firstName: 'Porky', lastName: 'Pig'},
    {firstName: 'Elmer', lastName: 'Fudd'},
    {firstName: 'Tweety', lastName: 'Bird'},
    {firstName: 'Road', lastName: 'Runner'},
    {firstName: 'Bullwinkle J.', lastName: 'Moose'},
    {firstName: 'Rocky', lastName: 'Squirrel'},
    {}
  ];
}
