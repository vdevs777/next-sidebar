import { PageHeader } from "@/components/page-header";
import { Mic } from "lucide-react";

export default function CDRErrors() {
    return (
        <div>
            <PageHeader path="Voz / Processamento /" title="Erros CDR" color="bg-green-400" icon={<Mic />}/>
        </div>
    )
}