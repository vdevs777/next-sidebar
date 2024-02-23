import { PageHeader } from "@/components/page-header";
import { Mic } from "lucide-react";

export default function Customers() {
    return (
        <div>
            <PageHeader path="Voz / Tabelas de taxa /" title="Clientes" color="bg-green-400" icon={<Mic />}/>
        </div>
    )
}