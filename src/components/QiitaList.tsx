import { FC, memo } from "react";
import { QiitaType } from "../types/qiitaType";
import Link from "next/link";
import { useFormatDate } from "../hooks/useFormatDate";

type Props = {
  data: QiitaType;
};

/**
 * Qiita記事リスト.
 */
export const QiitaList: FC<Props> = memo(({ data }) => {
  const { formatDate } = useFormatDate();

  return (
    <>
      <Link href={data.url}>
        <a>{data.title}</a>
      </Link>
      <div>いいね数:{data.likes_count}</div>
      <div>コメント数:{data.comments_count}</div>
      <div>作成日:{formatDate(data.created_at)}</div>
      <div>更新日:{formatDate(data.updated_at)}</div>
    </>
  );
});
