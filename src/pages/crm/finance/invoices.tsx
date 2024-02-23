import { PageHeader } from "@/components/page-header";
import { DollarSign } from "lucide-react";

export default function Invoices() {
    return (
        <div>
            <PageHeader path="Finanças /" title="Faturas" icon={<DollarSign />}/>
        </div>
    )
}