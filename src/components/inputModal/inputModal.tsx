import { Modal, Form } from "react-bootstrap";
import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormButtonGroup from "components/inputModal/FormButton";
import { schema } from "utils/inputFormSchema";
import { ModalType } from "utils/enums";
// import InputFormSelect from "components/inputModal/inputSelect";
import InputTextField from "components/inputModal/inputTextField";
import InputSelectField from "./inputSelect";

interface IModalProps {
  visible: boolean;
  setVisible: Function;
  isEdit: boolean;
}

const StudentInputModal: React.FC<IModalProps> = (props) => {
  const initState = {
    name: "",
    subject: "",
    marks: "",
    grades: "",
  };

  const grades = ["A", "B", "C", "D", "F"];
  const subjects = ["English", "Math", "Science", "History"];
  const modalType = props.isEdit ? ModalType.EDIT : ModalType.ADD;

  const {
    register,
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
    }
  }, [isSubmitSuccessful, reset, props.visible]);

  const onSubmit = (values: object) => {
    console.log("Values:::", values);
    props.setVisible(false);
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
              name="grades"
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
