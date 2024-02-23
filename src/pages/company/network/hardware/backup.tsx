import { PageHeader } from "@/components/page-header";
import { Globe } from "lucide-react";

export default function Backup() {
    return (
        <div>
            <PageHeader path="Network / Hardware /" title="Backup" color="bg-green-400" icon={<Globe />}/>
        </div>
    )
}