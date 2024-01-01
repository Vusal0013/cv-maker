import React from "react";
import { Form, Formik } from "formik";
import { Steps, initialValues, validationSchema } from ".";
import { Stepper } from "./";
import { useAppDispatch } from "../../store/hooks";
import { actions } from "../../reducers/formSlice";

const ResumeForm: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <Formik
      onSubmit={(val) => {
        dispatch(actions.setUserData(val));
      }}
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
