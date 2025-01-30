import { InputHTMLAttributes } from "react";
import { Col, ErrorMessage, Input, OptionalInput } from "./styles";
import { useFormContext } from "react-hook-form";

interface InputBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  sizeBox: number;
  inputOpt?: boolean;
}

export function InputBox({
  id,
  sizeBox,
  inputOpt = false,
  ...props
}: InputBoxProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[id];
  return (
    <>
      <Col size={sizeBox}>
        {inputOpt ? (
          <Input {...props} {...register(id)} />
        ) : (
          <OptionalInput {...props} {...register(id)} />
        )}
        {error && <ErrorMessage>{error.message?.toString()}</ErrorMessage>}
      </Col>
    </>
  );
}
