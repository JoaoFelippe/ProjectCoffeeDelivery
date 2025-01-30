import { InputHTMLAttributes } from "react";
import { Col, LabelCheckbox, RadioInput } from "./styles";
import { useFormContext } from "react-hook-form";

interface InputLabelProps extends InputHTMLAttributes<HTMLInputElement> {
  id:string;
  idRadio: string;
  sizeBox: number;
  nameButton: string;
  iconButton: React.ReactNode;
}

export function InputRadioLabel({
  id,
  idRadio,
  sizeBox,
  iconButton,
  nameButton,
  ...props
}: InputLabelProps) {
  const {
    register,
    //formState: { errors },
  } = useFormContext();

  //const error = errors[id];

  return (
    <Col size={sizeBox}>
      <RadioInput type="radio" id={id} {...props} {...register(idRadio)}/>
      <LabelCheckbox htmlFor={id}>
        <span>
          {iconButton} {nameButton}
        </span>
      </LabelCheckbox>
    </Col>
  );
}
