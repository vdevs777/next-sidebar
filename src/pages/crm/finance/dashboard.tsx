import { PageHeader } from "@/components/page-header";
import { DollarSign } from "lucide-react";

export default function Dashboard() {
    return (
        <div>
            <PageHeader path="Finanças /" title="Painel" icon={<DollarSign />}/>
        </div>
    )
}