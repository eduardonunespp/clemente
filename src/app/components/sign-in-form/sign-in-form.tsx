import { ISignIn } from "@/app/shared/models/domain-types/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Form, Button, Container, Row } from "react-bootstrap";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

type Props = {};

const SignInForm: React.FC<Props> = () => {
  const { register, formState, handleSubmit } = useFormContext<ISignIn>();

  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPasswordClick = () => {
    router.push("/recover-password");
  };

  const handleForgotHomeClick = () => {
    router.push("/home");
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="formPassword">
          <Row className="mb-3">
            <Form.Label className="text-slate-500">Email:</Form.Label>
            <div>
              <Form.Control
                type="email"
                placeholder="Entre com seu email"
                {...register("email")}
                isInvalid={!!formState.errors.email}
                className="h-12 text-sm bg-slate-100 w-100"
              />
              <Form.Control.Feedback type="invalid" className="text-xs">
                {formState.errors.email?.message}
              </Form.Control.Feedback>
            </div>
          </Row>
          <Row className="mb-4">
            <Form.Label className="text-slate-500">Senha:</Form.Label>
            <div className="position-relative">
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Entre com sua senha"
                {...register("password")}
                isInvalid={!!formState.errors.password}
                className="h-12 text-sm bg-slate-100 w-100"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="position-absolute end-10 top-0 mt-3 me-2 border-0 bg-transparent text-colorPrimary text-lg"
                style={{ cursor: "pointer" }}
              >
                {showPassword ? <IoEyeOff /> : <IoEye />}
              </button>
              <Form.Control.Feedback type="invalid" className="text-xs">
                {formState.errors.password?.message}
              </Form.Control.Feedback>
            </div>
          </Row>
        </Form.Group>

        <div className="w-100 h-5 flex items-center justify-start mb-2">
          <span
            onClick={() => handleForgotPasswordClick()}
            className="text-cyan-600 text-sm transition-all filter hover:opacity-90 cursor-pointer"
          >
            Esqueci minha senha:
          </span>
        </div>

        <button
          type="button"
          onClick={() => handleForgotHomeClick()}
          disabled={!formState.isValid}
          className={`w-100 h-10 rounded-xl bg-colorPrimary text-white transition-all filter ${
            !formState.isValid
              ? "opacity-70 bg-orange-700 cursor-not-allowed"
              : "hover:opacity-90"
          }`}
        >
          Entrar
        </button>
      </Form>
    </div>
  );
};

export default SignInForm;
