import { ITableColumns } from "src/app/common/interfaces/definitions";
import { IChartOfAccount } from "src/app/common/interfaces/home/general-settings/chart-of-account/chart-of-account.interface";

export const ChartOfAccountColumns: ITableColumns[] = [
  {
    columnDef: 'code',
    header: 'Code',
    cell: (element: IChartOfAccount) => element.code,
    type: 'string'
  },
  {
    columnDef: 'name',
    header: 'Name',
    cell: (element: IChartOfAccount) => element.name,
    type: 'string'
  },
  {
    columnDef: 'type',
    header: 'Type',
    cell: (element: IChartOfAccount) => element.type ? `${element.type.name}` : '',
    type: 'string'
  },
  {
    columnDef: 'category',
    header: 'Category',
    cell: (element: IChartOfAccount) => element.type ? element.type.category : '',
    type: 'string'
  },
  {
    columnDef: 'balance',
    header: 'Normal Balance',
    cell: (element: IChartOfAccount) => element.type ? element.type.balance : '',
    type: 'string'
  },
  {
    columnDef: 'actions',
    header: 'Action',
    cell: () => '',
    type: 'actions'
  },
]
