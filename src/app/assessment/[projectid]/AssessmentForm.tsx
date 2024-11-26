"use client";
import { APIAssessmentData } from "@/types";
import { Button, TextInput } from "flowbite-react";
import { Controller, useForm } from "react-hook-form";
import TestCompletionForm from "./TestCompletionForm";
import { usePromiseState } from "@/utils";
import { showToast } from "@/appstate";
import SecureCompletionForm from "./SecureCompletionForm";
import DevCompletionFrom from "./DevCompletionForm";
import { RecordSection, SectionItemSwitch } from "./primitive";

export type AssessmentFormProps = {
  defaultFormdata: APIAssessmentData;
};

const AssessmentForm = ({ defaultFormdata }: AssessmentFormProps) => {
  const { control, reset, handleSubmit } = useForm<APIAssessmentData>({
    values: defaultFormdata,
  });
  const [isPending, saveAssessment] = usePromiseState(
    async (data: APIAssessmentData) => {
      try {
        const res = await fetch("/api/assessment", {
          method: "POST",
          body: JSON.stringify(data),
        }).then(
          (res) =>
            res.json() as unknown as { success: boolean; message?: string }
        );
        if (res.success) {
          if (!data.project.id) {
            reset();
          }
          showToast({
            type: "SUCCESS",
            message: "Successfully saved api assessment",
          });
        } else {
          showToast({
            type: "ERROR",
            message: res.message!,
          });
        }
      } catch (e) {
        console.error(e);
        showToast({
          type: "ERROR",
          message: "Unable to save",
        });
      }
    }
  );
  return (
    <form
      noValidate
      onSubmit={handleSubmit(saveAssessment)}
      className="max-w-screen-sm"
    >
      <section className="pt-8 bg-white">
        <h4 className="text-xl font-semibold sticky -top-8 w-full bg-white py-2 z-10">
          Project Name
        </h4>
        <Controller
          control={control}
          name="project.name"
          rules={{ required: "Please enter project name" }}
          render={({ field, formState: { errors } }) => (
            <TextInput
              name={field.name}
              value={field.value}
              onChange={field.onChange}
              className="font-semibold"
              helperText={errors.project?.name?.message}
            />
          )}
        />
      </section>
      <DevCompletionFrom control={control} />
      <TestCompletionForm control={control} />
      <RecordSection name="Operationally Ready">
        <SectionItemSwitch
          label="Telemetry"
          name="operationallyReady.telemetry"
          control={control}
        />
        <SectionItemSwitch
          label="Logging"
          control={control}
          name="operationallyReady.logging"
        />
        <SectionItemSwitch
          label="Recovery time objectives (RTO)"
          control={control}
          name="operationallyReady.rto"
        />
        <SectionItemSwitch
          label="Recovery point objectives (RPO)"
          control={control}
          name="operationallyReady.rpo"
        />
      </RecordSection>
      <SecureCompletionForm control={control} />
      <Button
        color="blue"
        size="lg"
        className="font-semibold active:scale-99 active:ring-0"
        type="submit"
        isProcessing={isPending}
        disabled={isPending}
      >
        Save Assessment
      </Button>
    </form>
  );
};

export default AssessmentForm;
