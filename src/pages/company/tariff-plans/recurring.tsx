import { PageHeader } from "@/components/page-header";
import { PlusCircle } from "lucide-react";

export default function Recurring() {
    return (
        <div>
            <PageHeader path="Planos de tarifa /" title="Recorrer" color="bg-green-400" icon={<PlusCircle />}/>
        </div>
    )
}