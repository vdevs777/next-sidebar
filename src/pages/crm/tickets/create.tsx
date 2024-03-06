import { PageHeader } from "@/components/page-header";
import { Ticket } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import {
  customersArray,
  assignedToArray,
  groupsArray,
  watchersArray,
  priorityArray,
  statusArray,
  ticketTypeArray,
} from "../../../others/create-ticket-provisory-informations";
import { Switch } from "@/components/ui/switch";
import { Combobox } from "@/components/combobox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const createTicketSchema = z.object({
  customerOrLead: z.string({ required_error: "Informe o cliente/lead"}),
  assignedTo: z.string(),
  group: z.string({ required_error: "Informe o grupo"})
});

export default function Create() {
  const form = useForm<z.infer<typeof createTicketSchema>>({
    resolver: zodResolver(createTicketSchema),
  })

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div>
      <PageHeader path="Tickets /" title="Criar" icon={<Ticket />} />
      <div className="flex flex-row gap-3">
        <div className="bg-white w-2/3 h-full rounded-md shadow-sm p-6">
          <form className="flex flex-row gap-3">
            <div className="w-[347px] flex items-end text-center flex-col gap-y-3">
              <label className="text-xs h-8 flex justify-center items-center">
                Cliente
              </label>
              <label className="text-xs h-8 flex justify-center items-center">
                Atribuído a
              </label>
              <label className="text-xs h-8 flex justify-center items-center">
                Grupo
              </label>
              <label className="text-xs h-8 flex justify-center items-center">
                Observadores
              </label>
              <label className="text-xs h-8 flex justify-center items-center">
                Destinatários CC
              </label>
              <label className="text-xs h-8 flex justify-center items-center">
                Prioridade
              </label>
              <label className="text-xs h-8 flex justify-center items-center">
                Status
              </label>
              <label className="text-xs h-8 flex justify-center items-center">
                Tipo
              </label>
              <label className="text-xs h-8 flex justify-center items-center">
                Assunto
              </label>
              <label className="text-xs h-52">Mensagem</label>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-4">
                <Combobox
                  array={customersArray}
                  width="w-[331px]"
                  popoverSize="w-[331px]"
                  placeholderText="Selecione o cliente"
                  notFoundText="Não foi encontrado nenhum cliente"
                  searchText="Pesquise um cliente"
                />
                <div className="gap-4 flex items-center">
                  <Switch id="hidden" className="h-5 w-9" />{" "}
                  <span className="text-sm">Oculto</span>
                </div>
              </div>

              <div>
                <Combobox
                  array={assignedToArray}
                  width="w-[678px]"
                  popoverSize="w-[678px]"
                  placeholderText="---"
                  notFoundText="Não foram encontrados resultados"
                  searchText=""
                />
              </div>
              <div>
                <Combobox
                  array={groupsArray}
                  width="w-[678px]"
                  popoverSize="w-[678px]"
                  placeholderText="Selecione o grupo"
                  notFoundText="Não foram encontrados resultados"
                  searchText=""
                />
              </div>
              <div>
                <Combobox
                  array={watchersArray}
                  width="w-[678px]"
                  popoverSize="w-[678px]"
                  placeholderText="Selecione a prioridade"
                  notFoundText="Não foram encontrados resultados"
                  searchText=""
                />
              </div>
              <div>
                <Input className="h-8" color="#FAFAFA"/>
              </div>
              <div>
              <Combobox
                  array={priorityArray}
                  width="w-[678px]"
                  popoverSize="w-[678px]"
                  placeholderText="Selecione a prioridade"
                  notFoundText="Não foram encontrados resultados"
                  searchText=""
                />
              </div>
              <div>
              <Combobox
                  array={statusArray}
                  width="w-[678px]"
                  popoverSize="w-[678px]"
                  placeholderText="Selecione o status"
                  notFoundText="Não foram encontrados resultados"
                  searchText=""
                />
              </div>
              <div>
              <Combobox
                  array={ticketTypeArray}
                  width="w-[678px]"
                  popoverSize="w-[678px]"
                  placeholderText="Selecione o tipo do ticket"
                  notFoundText="Não foram encontrados resultados"
                  searchText=""
                />
              </div>
              <div>
              <Input className="h-8" color="#FAFAFA"/>
              </div>
              <div>
                <Textarea className="resize-none h-52"/>
              </div>
              <div className="flex justify-end">
                <Button className="bg-blue-600 h-8">Criar</Button>
              </div>
            </div>
          </form>
        </div>
        <div className="bg-white w-1/3 h-full rounded-md shadow-sm">sasa</div>
      </div>
    </div>
  );
}
