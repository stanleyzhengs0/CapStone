import { ChevronDown } from "lucide-react";
import { useState } from "react";

/**
 * 
 * @param {string} title 
 * @param {string | ReactNode} children
 * @param {boolean} defaultOpen 
 */
export default function AccordionCard({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className={`rounded-2xl border-1 transition-all duration-300
        ${open ? "border-pink-500 bg-pink-800/10" : "border-gray-300 bg-black/5"}
      `}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-5 text-left"
      >
        <span className="text-lg font-medium">{title}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && <div className="px-5 pb-5 text-gray-300">{children}</div>}
    </div>
  );
}
