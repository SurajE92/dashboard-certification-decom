import { APIAssessmentData } from "@/types";
import { Control, Controller } from "react-hook-form";
import { RecordSection, SectionItem, SectionItemSwitch } from "./primitive";
import { TextInput } from "flowbite-react";

export type Props = {
  control: Control<APIAssessmentData, unknown>;
};

const TestCompletionForm = ({ control }: Props) => {
  return (
    <RecordSection
      name="Test Completion"
      description="Given feature/capability is considered test completed based on below
        criteria:"
    >
      <SectionItemSwitch
        label="Functional testing."
        name="testCompletion.functionalTesting"
        control={control}
      />
      <SectionItemSwitch
        label="Automated testing."
        name="testCompletion.automatedTesting"
        control={control}
      />
      <li className="border-b py-2">
        <div className="flex flex-col gap-4">
          <p className="flex-1">Performance testing.</p>
          <div className="text-lg font-medium text-gray-900">
            <ol className="list-disc">
              <SectionItemSwitch
                label="Internal performance testing done with mocks backends."
                name="testCompletion.interPerfTestWithMock"
                control={control}
                noBorder
              />
              <SectionItemSwitch
                label="Integrated performance test done in PLAB by T-Mobile performance team (Performance testing inclusive of all layers in the flow i.e.. Unified Services/Proxies/D1/C1/RTB etc."
                name="testCompletion.integratedPerfPLAB"
                control={control}
                noBorder
              />
              <SectionItem
                label="Testing representative of current production volume for the given API (scaled to PLAB capacity - 50% of production)."
                noBorder
              >
                <Controller
                  control={control}
                  name="testCompletion.testingRepresentativeCurProdVol"
                  render={({ field }) => (
                    <TextInput
                      name={field.name}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
              </SectionItem>
              <SectionItemSwitch
                label="SLO (Service Level Objective) published, expressed as a P90."
                name="testCompletion.sloPublished"
                control={control}
                noBorder
              />
              <SectionItemSwitch
                label="Tuned to meet SLO."
                name="testCompletion.tunedForSLO"
                control={control}
                noBorder
              />
            </ol>
          </div>
        </div>
      </li>
    </RecordSection>
  );
};

export default TestCompletionForm;
