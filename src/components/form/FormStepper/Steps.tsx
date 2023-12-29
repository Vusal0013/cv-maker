import React from "react";
import { IFormType } from "../../../types";
import {
  FieldConfig,
  FieldHelperProps,
  FieldInputProps,
  FieldMetaProps,
  FormikErrors,
} from "formik";

import { Step1, Step2, Step3 } from "..";

interface IStepsProps {
  values: IFormType;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void | FormikErrors<IFormType>>;
  getFieldMeta: <Value>(name: string) => FieldMetaProps<Value>;
  getFieldHelpers: <Value = any>(name: string) => FieldHelperProps<Value>;
  getFieldProps: <Value = any>(
    props: string | FieldConfig<Value>
  ) => FieldInputProps<Value>;
}

const Steps: React.FC<IStepsProps> = ({
  values,
  getFieldHelpers,
  getFieldMeta,
  getFieldProps,
  setFieldValue,
}) => {
  const step = () => {
    switch (values.stepper?.currentStep) {
      case 1:
        return <Step1 values={values} setFieldValue={setFieldValue} />;
      case 2:
        return (
          <Step2
            values={values}
            getFieldHelpers={getFieldHelpers}
            getFieldMeta={getFieldMeta}
            getFieldProps={getFieldProps}
          />
        );
      case 3:
        return <Step3 values={values} />;
      case 4:
        return null;

      default:
        return null;
    }
  };

  return (
    <>
      {step()}
      {values.stepper && values.stepper?.currentStep > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault(),
              setFieldValue(
                "stepper.currentStep",
                values.stepper && values.stepper?.currentStep - 1
              );
          }}
        >
          Evvelki
        </button>
      )}
      {values.stepper?.currentStep}
      {values.stepper && values.stepper.currentStep < values.stepper.steps ? (
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault(),
              setFieldValue(
                "stepper.currentStep",
                values.stepper && values.stepper?.currentStep + 1
              );
          }}
        >
          Növbəti
        </button>
      ) : (
        <button type="submit">Submit</button>
      )}
    </>
  );
};

export { Steps };
