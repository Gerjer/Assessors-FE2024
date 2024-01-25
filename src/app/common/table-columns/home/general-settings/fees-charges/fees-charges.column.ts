import { ITableColumns } from "src/app/common/interfaces/definitions";
import { IFeesCharges } from "src/app/common/interfaces/home/general-settings/fees-charges/fees-charges.interface";

export const FeesChargesColumns: ITableColumns[] = [
  {
    columnDef: 'code',
    header: 'Code',
    cell: (element: IFeesCharges) => element.code,
    type: 'string'
  },
  {
    columnDef: 'name',
    header: 'Name',
    cell: (element: IFeesCharges) => element.name,
    type: 'string'
  },
  {
    columnDef: 'account-name',
    header: 'Account Name',
    cell: (element: IFeesCharges) => element.chart_of_account?.name || '',
    type: 'string'
  },
  {
    columnDef: 'actions',
    header: 'Action',
    cell: () => '',
    type: 'actions'
  }
]
