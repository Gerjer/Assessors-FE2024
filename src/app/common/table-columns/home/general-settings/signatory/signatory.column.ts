import { ISignatory } from "src/app/common/interfaces";
import { ITableColumns } from "src/app/common/interfaces/definitions";

export const SignatoryColumns: ITableColumns[] = [
  {
    columnDef: 'code',
    header: 'Code',
    cell: (element: ISignatory) => element.code,
    type: 'string'
  },
  {
    columnDef: 'name',
    header: 'Name',
    cell: (element: ISignatory) => element.employee ? `${element.employee.firstname} ${element.employee.lastname}` : element.name,
    type: 'string'
  },
  {
    columnDef: 'signatory',
    header: 'Signatory',
    cell: (element: ISignatory) => element.signatory,
    type: 'string'
  },
  {
    columnDef: 'actions',
    header: 'Action',
    cell: () => '',
    type: 'actions'
  }
]
