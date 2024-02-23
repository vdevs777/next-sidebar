import { PageHeader } from "@/components/page-header";
import { Globe } from "lucide-react";

export default function UpgradeBatches() {
    return (
        <div>
            <PageHeader path="Network / TR-069 (ACS) /" title="Atualizar lotes" color="bg-green-400" icon={<Globe />}/>
        </div>
    )
}