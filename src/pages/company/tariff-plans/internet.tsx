import { PageHeader } from "@/components/page-header";
import { PlusCircle } from "lucide-react";

export default function Internet() {
    return (
        <div>
            <PageHeader path="Planos de tarifa /" title="Internet" color="bg-green-400" icon={<PlusCircle />}/>
        </div>
    )
}