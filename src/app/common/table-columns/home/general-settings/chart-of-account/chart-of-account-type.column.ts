import { ITableColumns } from "src/app/common/interfaces/definitions";
import { IChartOfAccountType } from "src/app/common/interfaces/home/general-settings/chart-of-account/chart-of-account-type.interface";

export const ChartOfAccountTypeColumns: ITableColumns[] = [
  {
    columnDef: 'code',
    header: 'Code',
    cell: (element: IChartOfAccountType) => element.code,
    type: 'string'
  },
  {
    columnDef: 'name',
    header: 'Name',
    cell: (element: IChartOfAccountType) => element.name,
    type: 'string'
  },
  {
    columnDef: 'balance',
    header: 'Normal Balance',
    cell: (element: IChartOfAccountType) => element.balance,
    type: 'string'
  },
  {
    columnDef: 'category',
    header: 'Category',
    cell: (element: IChartOfAccountType) => element.category,
    type: 'string'
  },
  {
    columnDef: 'actions',
    header: 'Action',
    cell: () => '',
    type: 'actions'
  }
]
