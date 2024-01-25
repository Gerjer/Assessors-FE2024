import { IFieldAppraisalAssessmentSheet } from "./field-appraisal-assessment-sheet.interface";

export interface IFieldAppraisalAssessmentSheetAssessment {
  id: any;
  sequence: any;
  property_class: any;
  property_actualuse: any;
  market_value: any;
  assessment_level: any;
  assessment_value: any;
  field_appraisal_assessment_sheet: IFieldAppraisalAssessmentSheet | null | undefined;
}
