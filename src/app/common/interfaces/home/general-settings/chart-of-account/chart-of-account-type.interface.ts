import { ChartOfAccountCategory } from "src/app/common/types";

export interface IChartOfAccountType {
  id: any;
  sequence: any;
  code: string;
  name: string;
  description: string;
  balance: string;
  category: ChartOfAccountCategory | null | undefined;
}
