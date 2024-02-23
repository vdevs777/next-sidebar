import { PageHeader } from "@/components/page-header";
import { User } from "lucide-react";

export default function Add() {
    return (
        <div>
            <PageHeader path="Clientes /" title="Adicionar" icon={<User />}/>
        </div>
    )
}