import { IChartOfAccountType } from "./chart-of-account-type.interface";

export interface IChartOfAccount {
  id: any;
  sequence: any;
  code: string;
  name: string;
  type: IChartOfAccountType | null | undefined;
}
