import { clsx } from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";
import { Slot } from '@radix-ui/react-slot';

export const TextInputRoot = (props: TextInputInputProps) => {
  return (
    <div className="flex items-center gap-2 px-4 py-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300">
      {props.children}
    </div>
  );
};

export interface TextInputIconProps {
  children: ReactNode;
}
const TextInputIcon = (props: TextInputIconProps) => {
  return (
    <Slot className="w-6 h-6 text-gray-400">
      {props.children}
    </Slot>
  )
};

TextInputIcon.displayName = 'TextInputIcon'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}
interface TextInputRootProps {
  children: ReactNode;
}
const TextInputInput = (props: TextInputInputProps) => {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 text-xs outline-none placeholder:text-gray-400"
      {...props}
    />
  );
};

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
