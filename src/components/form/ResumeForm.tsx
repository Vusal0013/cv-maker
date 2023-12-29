import React from "react";
import { Form, Formik } from "formik";
import { Steps, initialValues, validationSchema } from ".";
import { IFormType } from "../../types/formDataType";
import { Stepper } from "./";

const ResumeForm: React.FC = () => {
  return (
    <Formik
      onSubmit={(val: IFormType) => console.log(val)}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({
        values,
        setFieldValue,
        getFieldMeta,
        getFieldHelpers,
        getFieldProps,
      }) => (
        <Form>
          {values.stepper && (
            <Stepper>
              <Stepper.Header
                completedStep={values.stepper.completedStep}
                steps={values.stepper.steps}
                currentStep={values.stepper.currentStep}
                setFieldValue={setFieldValue}
              />
              <Stepper.Step>
                <Steps
                  values={values}
                  setFieldValue={setFieldValue}
                  getFieldMeta={getFieldMeta}
                  getFieldProps={getFieldProps}
                  getFieldHelpers={getFieldHelpers}
                />
              </Stepper.Step>
            </Stepper>
          )}
        </Form>
      )}
    </Formik>
  );
};

export { ResumeForm };
