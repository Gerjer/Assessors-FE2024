import { ISubClassification } from "../../../../interfaces";
import { ITableColumns } from "../../../../interfaces/definitions";

export const SubClassificationColumns: ITableColumns[] = [
  {
    columnDef: 'code',
    header: 'Code',
    cell: (element: ISubClassification) => element.code,
    type: 'string'
  },
  {
    columnDef: 'name',
    header: 'Name',
    cell: (element: ISubClassification) => element.name,
    type: 'string'
  },
  {
    columnDef: 'description',
    header: 'Description',
    cell: (element: ISubClassification) => element.description,
    type: 'string'
  },
  {
    columnDef: 'classification',
    header: 'Classification',
    cell: (element: ISubClassification) => element.classification.name,
    type: 'string'
  },
  {
    columnDef: 'actions',
    header: 'Action',
    cell: () => '',
    type: 'action'
  }
]
