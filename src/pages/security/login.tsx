import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const signInSchema = z.object({
  login: z.string().min(1),
  password: z.string().min(1),
});

type SignInSchema = z.infer<typeof signInSchema>;

export default function Login() {
  const [credentials, setCredentials] = useState<SignInSchema | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
  });

  function handleSignIn(data: SignInSchema) {
    setCredentials(data) 
    console.log(credentials)
  }

  return (
    <div className="flex flex-1 flex-row bg-[#F7F8FC]">
      <div className="flex w-4/6 h-screen items-center justify-center flex-col">
        <Image src="/logo2.png" alt="Logo" width={370} height={92} />
        <div className="p-10 bg-white w-[500px] rounded-md flex items-center flex-col mt-10">
          <h4 className="font-semibold text-gray-800 text-lg pb-10">
            LOGIN DO ADMINISTRADOR
          </h4>
          <form className="w-full" onSubmit={handleSubmit(handleSignIn)}>
            <div>
              <Input className="h-8 mb-4 rounded-sm " placeholder="Login" {...register('login')}/>
              <Input className="h-8 rounded-sm " type="password" placeholder="Senha" {...register('password')}/>
            </div>
            <div className="flex flex-end justify-between mt-5 items-center">
              <Button className="w-[70px] h-8 font-medium bg-blue-600" type="submit">
                Logar
              </Button>
              <Button
                variant="link"
                className="text-md font-normal text-gray-500"
              >
                Esqueci minha senha
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex text-white bg-sky-950 w-2/6 h-screen items-center justify-center">
        <h3 className="font-bold text-2xl">PORTAL DO ADMINISTRADOR</h3>
      </div>
    </div>
  );
}