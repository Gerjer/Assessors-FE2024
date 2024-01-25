import { IFieldAppraisalAssessmentSheet } from "../field-appraisal-assessment-sheet/field-appraisal-assessment-sheet.interface";

export interface ITaxDeclaration {
  id: any;
  sequence: any;
  code: string;
  arp_no: string;
  pin_no: string;
  owner: string;
  kind_class: string;
  lot_block_no: string;
  location_property: string;
  area_size: string;
  market_value: number;
  assessed_value: number;
  field_appraisal_assessment_sheet: IFieldAppraisalAssessmentSheet | null | undefined;
}
