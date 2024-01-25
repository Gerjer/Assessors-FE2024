import { IClassification } from "../classifications/classification.interface";

export interface ISubClassification {
  id: any;
  sequence: any;
  code: any;
  name: string;
  description: string;
  classification: IClassification;
}
