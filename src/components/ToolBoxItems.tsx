import React, { Fragment } from "react";
import { twMerge } from "tailwind-merge";
import { TechIcon } from "./TechIcon";

export const ToolBoxItems = ({
  items,
  className,
  itemsWrapperClassName,
}: {
  items: {
    title: string;
    icon: React.ElementType;
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
          {new Array(2).fill(0).map((_, idx) => (
            <Fragment key={idx}>
              {items.map((item) => {
                return (
                  <div
                    key={item.title}
                    className="inline-flex items-center gap-4 py-2 px-4 outline outline-2 outline-white/10 rounded-lg"
                  >
                    <span className="">
                      <TechIcon component={item.icon}></TechIcon>
                    </span>
                    <span className="font-semibold">{item.title}</span>
                  </div>
                );
              })}
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
};
