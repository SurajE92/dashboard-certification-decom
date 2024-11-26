import { APIAssessmentData } from "@/types";
import { Control } from "react-hook-form";
import { RecordSection, SectionItemSwitch } from "./primitive";

export type DevCompletionFromProps = {
  control: Control<APIAssessmentData, unknown>;
};

const DevCompletionFrom = ({ control }: DevCompletionFromProps) => {
  return (
    <RecordSection name="Development Completion">
      <SectionItemSwitch
        label="Swagger/Schema and documentation published for consumers/upstream layers."
        name="devCompletion.swaggerSchemaPublished"
        control={control}
      />
      <SectionItemSwitch
        label="App or services deployed across NPE and production environments."
        name="devCompletion.appServicesDeployed"
        control={control}
      />
      <SectionItemSwitch
        label="Postman collection available."
        name="devCompletion.postmanCollectionAvailable"
        control={control}
      />
      <SectionItemSwitch
        label="Unit tests with least 90% test coverage."
        name="devCompletion.unitTestCoverage"
        control={control}
      />
      <SectionItemSwitch
        label="Code review done."
        name="devCompletion.codeReviewDone"
        control={control}
      />
      <SectionItemSwitch
        label="Design document complete and stored in a centralized location."
        name="devCompletion.designDocDoneAndSaved"
        control={control}
      />
      <SectionItemSwitch
        label="Mock available."
        name="devCompletion.mockAvailable"
        control={control}
      />
    </RecordSection>
  );
};

export default DevCompletionFrom;
