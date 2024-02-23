import { PageHeader } from "@/components/page-header";
import { User } from "lucide-react";

export default function Generate() {
    return (
        <div>
            <PageHeader path="Clientes / Vouchers /" title="Gerar" icon={<User />}/>
        </div>
    )
}