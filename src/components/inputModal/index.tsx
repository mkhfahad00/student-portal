/* eslint-disable react-hooks/exhaustive-deps */
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
import {
  addStudent,
  fetchStudents,
  updateStudent,
} from "state/ducks/students/actions";
interface IModalProps {
  visible: boolean;
  setVisible: Function;
  fetchStudents: () => ActionType<typeof fetchStudents>;
  addStudent: (payload: IStudentRaw) => ActionType<typeof addStudent>;
  updateStudent: (payload: IStudentRaw) => ActionType<typeof updateStudent>;
  studentData: IStudentRaw;
  setStudentData: Function;
}

const StudentInputModal: React.FC<IModalProps> = (props) => {
  const initState = props.studentData
    ? { ...props.studentData }
    : {
        name: "",
        marks: 0,
        subject: "",
        grade: "",
      };

  const [payload, setPayload] = useState<IStudentRaw>({
    name: "",
    marks: 0,
    subject: "",
    grade: "",
  });
  const modalType = props?.studentData?._id ? MODAL_TYPE.EDIT : MODAL_TYPE.ADD;

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitSuccessful },
  } = useForm<IStudentRaw>({
    mode: "onTouched",
    reValidateMode: "onChange",
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (modalType === "Add")
      reset({
        name: "",
        marks: 0,
        subject: "",
        grade: "",
      });
  }, [modalType]);

  useEffect(() => {
    if (modalType === "Edit") {
      reset(props.studentData);
    }
  }, [props.studentData]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset(initState);
      if (modalType === "Edit") {
        props.updateStudent({ ...payload, _id: props?.studentData._id });
        props.fetchStudents();
      } else {
        props.addStudent(payload);
      }
      props.setStudentData();
    }
  }, [isSubmitSuccessful]);

  const onSubmit = (values: IStudentRaw) => {
    props.setVisible(false);
    setPayload(values);
  };

  const handleClose = () => {
    props.setVisible(false);
    props.setStudentData();
    reset();
  };

  return (
    <>
      <Modal
        show={props.visible}
        onHide={() => {
          handleClose();
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
            <FormButtonGroup mode={modalType} handleClose={handleClose} />
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default StudentInputModal;
