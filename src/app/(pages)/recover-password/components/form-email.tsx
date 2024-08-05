import { ISignIn } from "@/app/shared/models/domain-types/auth";
import { useState } from "react";
import { Form, Button, Container, Row } from "react-bootstrap";
import { SubmitHandler, useFormContext } from "react-hook-form";


type Props = {};

const EmailForm: React.FC<Props> = () => {
  const { register, formState, handleSubmit } = useFormContext<ISignIn>();


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
        
        </Form.Group>

        <div className="w-100 h-5 flex items-center justify-start mb-2">
          <span className="text-cyan-600 text-sm transition-all filter hover:opacity-90 cursor-pointer">
          Foi enviado para seu e-mail o link para geração de uma nova senha de acesso.
          </span>
        </div>

        <button
          type="button"
          disabled={!formState.isValid}
          className={`w-100 h-10 rounded-xl mt-4 bg-colorPrimary text-white transition-all filter ${
            !formState.isValid
              ? "opacity-70 bg-orange-700 cursor-not-allowed"
              : "hover:opacity-90"
          }`}
        >
          Enviar
        </button>
      </Form>
    </div>
  );
};

export default EmailForm;
