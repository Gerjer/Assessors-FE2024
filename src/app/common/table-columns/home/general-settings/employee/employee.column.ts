import { IEmployee } from "src/app/common/interfaces";
import { ITableColumns } from "src/app/common/interfaces/definitions";

export const EmployeeColumns: ITableColumns[] = [
  {
    columnDef: 'code',
    header: 'Code',
    cell: (element: IEmployee) => element.code,
    type: 'string'
  },
  {
    columnDef: 'name',
    header: 'Name',
    cell: (element: IEmployee) => `${element.firstname} ${element.lastname} ${element.name_extension}`,
    type: 'string'
  },
  {
    columnDef: 'date-of-birth',
    header: 'Date Of Birth',
    cell: (element: IEmployee) => element.date_of_birth,
    type: 'date'
  },
  {
    columnDef: 'gender',
    header: 'Gender',
    cell: (element: IEmployee) => element.gender,
    type: 'string'
  },
  {
    columnDef: 'actions',
    header: 'Action',
    cell: () => '',
    type: 'actions'
  }
]
