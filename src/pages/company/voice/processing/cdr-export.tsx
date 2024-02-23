import { PageHeader } from "@/components/page-header";
import { Mic } from "lucide-react";

export default function CDRExport() {
    return (
        <div>
            <PageHeader path="Voz / Processamento /" title="Exportar CDR" color="bg-green-400" icon={<Mic />}/>
        </div>
    )
}