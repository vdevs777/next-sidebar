import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import api from "../../lib/services"
import { config, title } from "process";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import Router from 'next/router'

const signInSchema = z.object({
  login: z.string().min(1, "Informe seu login"),
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
  const [filiais, setFiliais] = useState([]);

  async function handleSignIn(data: SignInSchema) {

    setLoading(true);

    await api.get(`/api/Account/login?login=${data.login}&password=${data.password}`)
      .then((response) => {

        setToken(response.data.Token);

        obterFiliais();

      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
        setLoading(false)
      });
  }


  function setToken(token: string) {
    if (localStorage.getItem("token") != null) {
      localStorage.removeItem("token");
    }
    localStorage.setItem("token", token);
  }

  async function selecionarFilial(id: any) {

    await api.post("/api/account/filiais?filialId=" + id, null, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      }
    })
      .then((response) => {
        console.log(response);
        setToken(response.data.Token);

        Router.push('/')
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro:" + err);
      });
  }

  async function obterFiliais() {

    await api.get("/api/account/filiais", {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      }
    }).then((response) => {
      setFiliais(response.data);
    })
      .catch((err) => {
        console.error("ops! ocorreu um erro:" + err);
      });
  }

  return (
    <div className="flex flex-1 flex-row bg-[#F7F8FC]">
      <div className="flex w-4/6 h-screen items-center justify-center flex-col">
        <Image src="/logoCliente.png" alt="Logo" width={288} height={120} />
        <div className="p-10 bg-white w-[500px] rounded-md flex items-center flex-col mt-10">
          <h4 className="font-semibold text-gray-800 text-lg pb-10">
            PORTAL
          </h4>
          <form className="w-full" onSubmit={handleSubmit(handleSignIn)}>

            <div>
              <Input
                className="h-8 mb-4 rounded-sm"
                placeholder="login"
                disabled={loading}
                {...register("login")}
              />
              {errors.login?.message && <span className="text-red-600 text-sm flex items-center ">{errors.login.message}</span>}
              <Input
                className="h-8 rounded-sm mt-4 mb-4"
                type="password"
                placeholder="senha"
                disabled={loading}
                {...register("password")}
              />
              {errors.password?.message && <span className="text-red-600 text-sm flex items-center ">{errors.password.message}</span>}

              <Select onValueChange={selecionarFilial}
                disabled={!loading}>
                <SelectTrigger className="h-8 mb-4 rounded-sm">
                  <SelectValue placeholder="Filiai(s)" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>

                    {
                      filiais.map((item) =>
                        // @ts-ignore
                        <SelectItem key={item.Id.toString()} value={item.Id.toString()}>{item.Nome}</SelectItem>
                      )
                    }
                  </SelectGroup>
                </SelectContent>

              </Select>

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
                disabled
                className="text-md font-normal text-gray-500"
              >
                Esqueci minha senha
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex text-white bg-sky-950 w-2/6 h-screen items-center justify-center">
        <Image src="/wgc_background.png" alt="Logo" width={700} height={592} />
        {/* <h3 className="font-bold text-2xl">PORTAL DO ADMINISTRADOR</h3> */}
      </div>
    </div>
  );
}
