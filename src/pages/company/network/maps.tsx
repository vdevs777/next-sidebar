import { PageHeader } from "@/components/page-header";
import { Globe } from "lucide-react";

export default function Maps() {
    return (
        <div>
            <PageHeader path="Network /" title="Mapas" color="bg-green-400" icon={<Globe />}/>
        </div>
    )
}