import { Modal, Button, Form } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  subject: yup.string().required("Subject is required"),
  marks: yup.number().positive().integer().min(0).required("Marks are required"),
  grades: yup.string().required("Grades are required"),
});

interface ModalProps {
  visible: boolean;
  setVisible: Function;
  isEdit: boolean;
}

// function InputModal() {
const InputModal: React.FC<ModalProps> = (props) => {
  const initState = {
    name: "",
    subject: "",
    marks: "",
    grades: "",
  };
  const [initialValues, setInitialValues] = useState(initState);
  const {
    register,
    handleSubmit,
    reset,
    // formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: initialValues,
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      console.log("Reset form!");
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = (values: object) => {
    console.log("Values:::", values);
    props.setVisible(false);
    setInitialValues(initState);
  };

  const onError = (error: object) => {
    console.log("ERROR:::", error);
  };

  return (
    <>
      <Modal
        show={props.visible}
        onHide={() => props.setVisible(false)}
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {props.isEdit ? "Edit" : "Add"} Student Data
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit, onError)}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                {...register("name")}
              />
              {errors.name && (
                <Form.Text className="text-danger">
                  {errors.name.message?.toString()}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="marks">
              <Form.Label>Marks</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter marks obtained"
                {...register("marks")}
              />
              {errors.marks && (
                <Form.Text className="text-danger">
                  {errors?.marks?.message?.includes(
                    "marks must be a `number` type"
                  )
                    ? "Must enter marks"
                    : errors?.marks?.message?.toString()}{" "}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="subject">
              <Form.Label>Subject</Form.Label>
              <Form.Select aria-label="Select Subject" {...register("subject")}>
                <option value="English">English</option>
                <option value="Math">Math</option>
                <option value="Science">Science</option>
              </Form.Select>
              {errors.subject && (
                <Form.Text className="text-danger">
                  Must choose a Subject
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="grades">
              <Form.Label>Grades</Form.Label>
              <Form.Select aria-label="Select grade" {...register("grades")}>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="F">F</option>
              </Form.Select>
              {errors.grades && (
                <Form.Text className="text-danger">
                  Must choose a Grade
                </Form.Text>
              )}
            </Form.Group>
            <div className="inputForm-btnGroup">
              <Button
                style={{
                  paddingLeft: "60px",
                  paddingRight: "60px",
                  backgroundColor: "white",
                  color: "black",
                }}
                onClick={() => props.setVisible(false)}
              >
                Close
              </Button>
              <Button
                style={{
                  paddingLeft: "60px",
                  paddingRight: "60px",
                  backgroundColor: "#4aaa9a",
                }}
                type="submit"
              >
                Add
              </Button>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default InputModal;
