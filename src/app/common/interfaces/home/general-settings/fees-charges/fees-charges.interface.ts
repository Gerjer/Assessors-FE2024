import { IChartOfAccount } from "../chart-of-account/chart-of-account.interface";

export interface IFeesCharges {
  id: any;
  sequence: any;
  code: string;
  name: string;
  chart_of_account: IChartOfAccount | null | undefined;
}
