import { useCallback } from "react";
import { format } from "date-fns";

export const useFormatDate = () => {
  /**
   * 日付のフォーマットを整える.
   */
  const formatDate = useCallback((date: string) => {
    return format(new Date(date), "yyyy年M月d日HH:m:s");
  }, []);

  return { formatDate };
};
