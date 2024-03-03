import { Check, ChevronsUpDown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "./ui/command";
import { cn } from "@/lib/utils";
import { ReactNode, useState } from "react";

type ComboboxProps = {
  width: string;
  array: {
    value: string;
    label: string
  }[];
  placeholderText: string;
  notFoundText: string;
  searchText: string;
  popoverSize: string
}

export function Combobox({width, array, placeholderText, notFoundText, searchText, popoverSize}: ComboboxProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={`${width} max-w-[678px] justify-between h-8`}
        >
          {value
            ? array.find((item) => item.value === value)?.label
            : `${placeholderText}`}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={`p-0 ${popoverSize}`}>
        <Command>
          <CommandInput placeholder={`${searchText}`} />
          <CommandEmpty>{notFoundText}</CommandEmpty>
          <CommandGroup>
            {array.map((item) => (
              <CommandItem
                key={item.value}
                value={item.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === item.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
