import {
  Bell,
  ChevronDown,
  ChevronLeft,
  LogOut,
  MessageCircleQuestion,
  NotepadText,
  Plus,
  Search,
  UserRound,
} from "lucide-react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { NotificationModal } from "./notification-modal";

export function Header() {
  return (
    <header className="w-full bg-white flex flex-row justify-between">
      <div className="flex flex-row items-center">
        <Button
          variant="ghost"
          className="hover:bg-slate-300 hover:text-blue-400"
        >
          <ChevronLeft width={24} strokeWidth="1.5px" />
        </Button>
        <img src="../../public/demo-logo.png" className="max-w-44 max-h-44" />
      </div>
      <div className="flex items-center mr-5 flex-row-reverse gap-4">
        <Popover>
          <PopoverTrigger asChild className="hover: cursor-pointer gap-2">
            <div className="flex flex-row items-center hover:text-blue-400 gap-2">
              <Avatar className="w-6 h-6">
                <AvatarImage src="https://ibaseminario.com.br/novo/wp-content/uploads/2013/09/default-avatar.png" />
              </Avatar>
              <span className="flex flex-row align-center text-slate-600">
                Main Admin <ChevronDown strokeWidth="1.5px" width={17} />
              </span>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-[210px] h-[132px]">
            <div className="flex flex-row max-h-[60px] justify-center gap-2 pt-1">
              <Avatar>
                <AvatarImage src="https://ibaseminario.com.br/novo/wp-content/uploads/2013/09/default-avatar.png" />
              </Avatar>
              <div className="flex flex-col">
                <p className="text-sm font-bold">admin</p>
                <p className="text-sm text-gray-500">Super Administrator</p>
              </div>
            </div>
            <div className="flex flex-col start pt-1.5">
              <Button
                variant="ghost"
                className="w-auto justify-start items-center rounded-none hover:bg-blue-100 gap-2"
              >
                <UserRound strokeWidth="1.5px" width={20} /> Perfil
              </Button>
              <Button
                variant="ghost"
                className="w-auto justify-start items-center rounded-none hover:bg-blue-100 gap-2"
              >
                <LogOut strokeWidth="1.5px" width={20} /> Sair
              </Button>
            </div>
          </PopoverContent>
        </Popover>
        <div className="flex items-center flex-row-reverse gap-4">
          <NotificationModal>
            <Button
              variant="ghost"
              className="hover:bg-white hover:text-blue-500 p-0 text-slate-600"
            >
              <Bell strokeWidth="1.5px" width={20} />
            </Button>
          </NotificationModal>
          <Button
            variant="ghost"
            className="hover:bg-white hover:text-blue-500 p-0 text-slate-600"
          >
            <NotepadText strokeWidth="1.5px" width={20} />
          </Button>
          <Button
            variant="ghost"
            className="hover:bg-white hover:text-blue-500 p-0 text-slate-600"
          >
            <MessageCircleQuestion strokeWidth="1.5px" width={20} />
          </Button>
          <Button
            variant="ghost"
            className="hover:bg-white hover:text-blue-500 p-0 text-slate-600"
          >
            <Search strokeWidth="1.5px" width={20} />
          </Button>
          <Button
            variant="ghost"
            className="hover:bg-white hover:text-blue-500 p-0 text-slate-600"
          >
            <Plus strokeWidth="1.5px" width={20} />
          </Button>
        </div>
      </div>
    </header>
  );
}
