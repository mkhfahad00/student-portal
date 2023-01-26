import { Modal, Form } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormButtonGroup from "components/inputModal/FormAction";
import { schema } from "utils/inputFormSchema";
import { MODAL_TYPE } from "utils/enums";
import InputTextField from "components/inputModal/inputTextField";
import InputSelectField from "components/inputModal/inputSelect";
import { grades, subjects } from "utils/index";
import { IStudentRaw } from "state/ducks/students/types";
import { ActionType } from "typesafe-actions";
import { addStudent } from "state/ducks/students/actions";
interface IModalProps {
  visible: boolean;
  setVisible: Function;
  addStudent: (payload: IStudentRaw) => ActionType<typeof addStudent>;
}

const StudentInputModal: React.FC<IModalProps> = (props) => {
  const initState = {
    name: "",
    subject: "",
    marks: 0,
    grade: "",
  };

  const [payload, setPayload] = useState<object>(initState);
  console.log("payload", payload);
  // const modalType = props?.isEdit ? MODAL_TYPE.EDIT : MODAL_TYPE.ADD;
  const modalType = MODAL_TYPE.ADD;

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: initState,
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      console.log("Reset form!");
      // addStudent(payload);
    }
  }, [isSubmitSuccessful, reset, props.visible]);

  const onSubmit = (values: object) => {
    console.log("Values:::", values);
    props.setVisible(false);
    setPayload(values);
  };

  return (
    <>
      <Modal
        show={props.visible}
        onHide={() => {
          props.setVisible(false);
          reset();
        }}
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{modalType} Student Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <InputTextField
                  {...field}
                  fieldLabel="Name"
                  errors={errors}
                  placeholder="Enter name"
                  type="text"
                />
              )}
            />

            <Controller
              control={control}
              name="marks"
              render={({ field }) => (
                <InputTextField
                  {...field}
                  fieldLabel="Marks"
                  errors={errors}
                  placeholder="Enter marks obtained"
                  type="number"
                />
              )}
            />

            <Controller
              control={control}
              name="subject"
              render={({ field }) => (
                <InputSelectField
                  {...field}
                  fieldLabel="Subject"
                  errors={errors}
                  data={subjects}
                />
              )}
            />

            <Controller
              control={control}
              name="grade"
              render={({ field }) => (
                <InputSelectField
                  {...field}
                  fieldLabel="Grade"
                  errors={errors}
                  data={grades}
                />
              )}
            />
            <FormButtonGroup setVisible={props.setVisible} />
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default StudentInputModal;
