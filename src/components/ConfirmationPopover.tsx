import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

interface IConfirmationPopover {
  trigger: JSX.Element;
  title: string;
  onConfirmClick: () => void;
}
export function ConfirmationPopover({
  trigger,
  title,
  onConfirmClick,
}: IConfirmationPopover) {
  const [open, setOpen] = useState(false);
  console.log("confirm", onConfirmClick);
  const handleCancelClick = () => {
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>

      <PopoverContent className="w-[350px] flex flex-col gap-5 p-4">
        <p className="text-red-500 font-semibold">{title}</p>

        <div className="flex gap-3">
          <Button
            title="Confirm"
            variant="destructive"
            onClick={() => {
              onConfirmClick();
              setOpen(false);
            }}
          />

          <Button
            title="Cancel"
            variant="secondary"
            onClick={handleCancelClick}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
