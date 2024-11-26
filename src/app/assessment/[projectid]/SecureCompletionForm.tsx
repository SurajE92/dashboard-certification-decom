import { APIAssessmentData } from "@/types";
import { Control } from "react-hook-form";
import { RecordSection, SectionItemSwitch } from "./primitive";

export type SecureCompletionProps = {
  control: Control<APIAssessmentData, unknown>;
};

const SecureCompletionForm = ({ control }: SecureCompletionProps) => {
  return (
    <RecordSection name="Secure">
      <SectionItemSwitch
        label="Compliance per security standards (including SAST, DAST scans, vulnerabilities)"
        name="secure.compliance"
        control={control}
      />
      <SectionItemSwitch
        label="Role based access as applicable."
        name="secure.rbacAsRequired"
        control={control}
      />
      <SectionItemSwitch
        label="Attribute based access as applicable."
        name="secure.abacAsRequired"
        control={control}
      />
      <SectionItemSwitch
        label="Sensitive data encryption/masked (including in logs)."
        name="secure.dataEncryptionDone"
        control={control}
      />
      <SectionItemSwitch
        label="POP token (or applicable security methods)."
        name="secure.popToken"
        control={control}
      />
      <SectionItemSwitch
        label="API security review must be completed by Cyber."
        name="secure.apiSecurityReviewDone"
        control={control}
      />
      <SectionItemSwitch
        label="Security testing must be completed by Cyber."
        name="secure.securityTestingCompleted"
        control={control}
      />
    </RecordSection>
  );
};

export default SecureCompletionForm;
