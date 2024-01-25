import { IFieldAppraisalAssessmentSheet } from "./field-appraisal-assessment-sheet.interface";

export interface IFieldAppraisalAssessmentSheetAppraisal {
  id: any;
  sequence: any;
  area_size: any;
  unit_value: any;
  market_value: any;
  property_sub_class: any;
  property_class: any;
  field_appraisal_assessment_sheet: IFieldAppraisalAssessmentSheet | null | undefined;
}
