import {Component} from '@angular/core';

import {DataService} from './data-service';
import {FinancialData} from './domain/financial-data';
import {formatBigDecimalCurrency} from './cell-formatters';
import {rightAlignStyle} from './cell-styles';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private service: DataService) {
    this.service.getData().subscribe((data) => this.rowData = data);
  }


  columnDefs = [
    {
      headerName: 'Category',
      field: 'category',
      resizable: true,
      sortable: true,
      autoHeight: true,
      enableRowGroup: true,
      editable: true
    },
    {
      headerName: 'Classification',
      field: 'classification',
      resizable: true,
      sortable: true,
      autoHeight: true,
      enableRowGroup: true,
      editable: true
    },
    {
      headerName: 'Grouping',
      field: 'grouping',
      resizable: true,
      sortable: true,
      autoHeight: true,
      enableRowGroup: true,
      editable: true
    },
    {
      headerName: 'Description',
      field: 'line_item_description',
      resizable: true,
      sortable: true,
      autoHeight: true,
      enableRowGroup: true,
      editable: true
    },
    {
      headerName: 'Amount',
      field: 'amount',
      resizable: true,
      sortable: true,
      autoHeight: true,
      enableRowGroup: true,
      editable: true,
      cellStyle: rightAlignStyle,
      valueFormatter: formatBigDecimalCurrency
    },
    {
      headerName: 'Date',
      field: 'date',
      resizable: true,
      sortable: true,
      autoHeight: true,
      enableRowGroup: true,
      editable: true
    },
  ];

  rowData: FinancialData[];

}
