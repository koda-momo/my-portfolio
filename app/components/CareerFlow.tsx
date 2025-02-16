import clsx from "clsx";
import { FC } from "react";
import { Career } from "types";

type Props = {
  career: Career;
  index: number;
};

/**
 * 経歴フローチャート.
 */
export const CareerFlow: FC<Props> = ({ career, index }) => {
  return (
    <div
      className={clsx(
        "relative [&:not(:last-child)]:pb-16",
        // 矢印線
        "[&:not(:last-child)]:before:border-l-2 [&:not(:last-child)]:before:border-secondary [&:not(:last-child)]:before:absolute [&:not(:last-child)]:before:h-full [&:not(:last-child)]:before:left-[9px] [&:not(:last-child)]:before:top-5"
      )}
    >
      <div className="flex lg:items-center text-2xl gap-3">
        <div
          className={clsx(
            "relative w-5 h-5 bg-secondary rounded-full",
            // 矢印 三角
            index !== 0 &&
              "after:border-t-secondary after:border-x-[10px] after:border-t-[12px] after:border-transparent after:absolute after:top-[-10px] after:left-0"
          )}
        />
        <div className="-mt-0.5 lg:mt-0 lg:flex lg:gap-5">
          <h3 className="text-lg lg:text-2xl">{career.name}</h3>
          <div className="text-lg lg:text-2xl">
            {career.start}〜{career.end}
          </div>
        </div>
      </div>
      <p
        className="text-sm lg:text-base ml-8 mt-8"
        dangerouslySetInnerHTML={{
          __html: career.description,
        }}
      />
    </div>
  );
};
