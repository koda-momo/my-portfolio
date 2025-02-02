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
        "[&:not(:last-child)]:before:border-l-2 [&:not(:last-child)]:before:border-secondary [&:not(:last-child)]:before:absolute [&:not(:last-child)]:before:h-full [&:not(:last-child)]:before:left-[9px] [&:not(:last-child)]:before:top-5"
      )}
    >
      <div className="flex items-center text-2xl gap-3">
        <div
          className={clsx(
            "relative w-5 h-5 bg-secondary rounded-full",
            index !== 0 &&
              "after:border-t-secondary after:border-x-[10px] after:border-t-[12px] after:border-transparent after:absolute after:top-[-10px] after:left-0"
          )}
        />
        <h3>{career.name}</h3>
        <div>
          {career.start}〜{career.end}
        </div>
      </div>
      <p
        className="ml-8 mt-8"
        dangerouslySetInnerHTML={{
          __html: career.description,
        }}
      />
    </div>
  );
};
