import { PageHeader } from "@/components/page-header";
import { Globe } from "lucide-react";

export default function List() {
    return (
        <div>
            <PageHeader path="Network / Redes IPv4 /" title="Lista" color="bg-green-400" icon={<Globe />}/>
        </div>
    )
}