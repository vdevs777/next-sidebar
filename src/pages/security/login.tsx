import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import api from "../../lib/axios"
import axios from "axios";
import { title } from "process";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

const signInSchema = z.object({
  email: z.string().min(1, "Informe seu login"),
  password: z.string().min(1, "Informe sua senha"),
});

type SignInSchema = z.infer<typeof signInSchema>;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
  });

  const [loading, setLoading] = useState(false);
  const [grupos, setGrupos] = useState([]);

  async function handleSignIn(data: SignInSchema) {

    setLoading(true);

    await api.post("/api/Account/login", data)
      .then((response) => {

        if (localStorage.getItem("token") != null) {
          localStorage.removeItem("token");
        }
        localStorage.setItem("token", response.data);

        GetGrupos();
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err.response.data.title);
        console.error(err.response.data.errors);
        setLoading(false)
      });

  }

  async function selecionarEmpresa(data: any) {
    alert(data)
  }

  async function GetGrupos() {

    await api.get("/api/groups", {
      headers: {
        'authorization': 'Bearer ' + localStorage.getItem("token")
      }
    }).then((response) => {
      setGrupos(response.data);

      console.log(grupos);

    })
      .catch((err) => {
        const title = err.response.data.title;
        console.error("ops! ocorreu um erro" + title);
      });
  }

  return (
    <div className="flex flex-1 flex-row bg-[#F7F8FC]">
      <div className="flex w-4/6 h-screen items-center justify-center flex-col">
        <Image src="/logo2.png" alt="Logo" width={370} height={92} />
        <div className="p-10 bg-white w-[500px] rounded-md flex items-center flex-col mt-10">
          <h4 className="font-semibold text-gray-800 text-lg pb-10">
            PORTAL
          </h4>
          <form className="w-full" onSubmit={handleSubmit(handleSignIn)}>

            <div>
              <Input
                className="h-8 mb-4 rounded-sm"
                placeholder="E-mail"
                disabled={loading}
                {...register("email")}
              />
              {errors.email?.message && <span className="text-red-600 text-sm flex items-center ">{errors.email.message}</span>}
              <Input
                className="h-8 rounded-sm mt-4 mb-4"
                type="password"
                placeholder="Senha"
                disabled={loading}
                {...register("password")}
              />
              {errors.password?.message && <span className="text-red-600 text-sm flex items-center ">{errors.password.message}</span>}

              <Select onValueChange={selecionarEmpresa}
                disabled={!loading}>
                <SelectTrigger className="h-8 mb-4 rounded-sm">
                  <SelectValue placeholder="Empresa" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Empresas</SelectLabel>
                    {/* {
                      grupos.map((item) => {
                        // @ts-ignore
                        <SelectItem key={item.key.toString()} value={item.key.toString()}>{item.title}</SelectItem>
                      })
                    } */}
                    <SelectItem value="1">BTT</SelectItem>
                    <SelectItem value="2">Blink</SelectItem>
                    
                  </SelectGroup>
                </SelectContent>
              </Select>


              {errors.password?.message && <span className="text-red-600 text-sm flex items-center ">{errors.password.message}</span>}

            </div>


            <div className="flex flex-end justify-between mt-5 items-center">
              <Button
                className="w-[70px] h-8 font-medium bg-blue-600 hover:bg-blue-700"
                type="submit"
                disabled={isSubmitting}
              >
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
