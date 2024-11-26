import { APIAssessmentData } from "@/types";
import clsx from "clsx";
import { ToggleSwitch } from "flowbite-react";
import { ReactNode } from "react";
import { Control, Controller, FieldPath } from "react-hook-form";

export const RecordSection = (props: {
  name: string;
  children: ReactNode;
  description?: string;
}) => (
  <section className="py-8 bg-white">
    <h4 className="text-xl font-semibold sticky -top-8 w-full bg-white py-2 z-10">
      {props.name}
    </h4>
    <p className="text-lg py-2">{props.description}</p>
    <div className="px-8 py-0 text-lg font-medium text-gray-900">
      <ol className="list-decimal">{props.children}</ol>
    </div>
  </section>
);

export const SectionItem = (props: {
  label: string;
  children: ReactNode;
  noBorder?: boolean;
}) => {
  const { label, noBorder = false, children } = props;
  return (
    <li className={clsx(!noBorder && "border-b", "py-2")}>
      <div className="flex items-center gap-4">
        <p className="flex-1">{label}</p>
        {children}
      </div>
    </li>
  );
};

export const SectionItemSwitch = (props: {
  label: string;
  name: FieldPath<APIAssessmentData>;
  noBorder?: boolean;
  control: Control<APIAssessmentData, unknown>;
}) => {
  const { label, name, noBorder, control } = props;
  return (
    <SectionItem label={label} noBorder={noBorder}>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <>
            <ToggleSwitch
              checked={Boolean(field.value)}
              onChange={field.onChange}
            />
            {field.value ? "Yes" : "No"}
          </>
        )}
      />
    </SectionItem>
  );
};
