import React from "react";
import { twMerge } from "tailwind-merge";

export const ToolBoxItems = ({
  items,
  className,
  itemsWrapperClassName,
}: {
  items: {
    title: string; // ✅ use lowercase string
    icon: React.ElementType; // ✅ match with usage
  }[];
  className?: string;
  itemsWrapperClassName?: string;
}) => {
  return (
    <>
      <div
        className={twMerge(
          "flex [mask-image:lienar-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
          className
        )}
      >
        <div
          className={twMerge(
            "flex flex-none py-0.5 gap-6 pr-6",
            itemsWrapperClassName
          )}
        >
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="inline-flex items-center gap-4 py-2 px-4 outline outline-2 outline-white/10 rounded-lg"
              >
                <span className="">
                  <Icon />
                </span>
                <span className="font-semibold">{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
