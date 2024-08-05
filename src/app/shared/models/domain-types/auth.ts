export type ISignIn = {
    email: string;
    password: string;
  };
  
  export type IEmail = {
    email: string;
  };
  
  export type IRecover = {
    password: string;
    passwordConfirm: string;
    resetToken?: string
  };
  