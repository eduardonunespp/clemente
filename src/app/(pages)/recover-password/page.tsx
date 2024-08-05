"use client";

import React from "react";
import Icon from "../../shared/assets/logo";
import { FormProvider, useForm } from "react-hook-form";
import { ISignIn } from "../../shared/models/domain-types/auth";
import EmailForm from "./components/form-email";

const RecoverPassword: React.FC = () => {
  const form = useForm<ISignIn>({
    mode: "onChange",
  });

  return (
    <main className="w-full h-dvh bg-bgPrimary flex items-center justify-center flex-col max-sm:px-10">
      <Icon width="500" height="500" />

      <div className="w-1/3 bg-slate-50 rounded-md border-gray-950 mt-16 p-6 max-md:w-2/3 max-sm:w-full">
        <h3 className="text-colorPrimary font-bold mb-2">Login</h3>

        <div>
          <FormProvider {...form}>
            <EmailForm />
          </FormProvider>
        </div>
      </div>
    </main>
  );
};

export default RecoverPassword;
