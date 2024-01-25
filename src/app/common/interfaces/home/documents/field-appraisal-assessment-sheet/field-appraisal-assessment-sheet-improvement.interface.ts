import { IFieldAppraisalAssessmentSheet } from "./field-appraisal-assessment-sheet.interface";

export interface IFieldAppraisalAssessmentSheetImprovement {
  id: any;
  sequence: any;
  kind: any;
  area_size: any;
  total_no: any;
  unit_value: any;
  market_value: any;
  field_appraisal_assessment_sheet: IFieldAppraisalAssessmentSheet | null | undefined;
}
