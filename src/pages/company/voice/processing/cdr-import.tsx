import { PageHeader } from "@/components/page-header";
import { Mic } from "lucide-react";

export default function CDRImport() {
    return (
        <div>
            <PageHeader path="Voz / Processamento /" title="Importar CDR" color="bg-green-400" icon={<Mic />}/>
        </div>
    )
}