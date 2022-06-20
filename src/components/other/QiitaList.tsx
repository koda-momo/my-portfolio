import { FC, memo } from "react";
import Link from "next/link";

//components
import { useFormatDate } from "../../hooks/useFormatDate";
import { GetQiitaType } from "../../types/qiitaType";

//MUI
import { styled } from "@mui/material/styles";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

type Props = {
  data: GetQiitaType;
};

/**
 * Qiita記事リスト.
 */
export const QiitaList: FC<Props> = memo(({ data }) => {
  const { formatDate } = useFormatDate();

  return (
    <>
      <_Qiita>
        <Link href={data.url}>
          <a>
            {data.title}

            {/* タグ */}
            <_TagList>
              {data.tags.map((tagItem) => (
                <_Tag key={tagItem}>{tagItem}</_Tag>
              ))}
            </_TagList>

            <_Flex>
              {/* いいね */}
              <_Icon>
                <_IconColor>
                  <ThumbUpIcon />
                </_IconColor>
                {data.likes_count}
              </_Icon>

              {/* コメント */}
              <_Icon>
                <_IconColor>
                  <ChatBubbleIcon />
                </_IconColor>

                {data.comments_count}
              </_Icon>

              {/* 閲覧数 */}
              <_Icon>
                <_IconColor>
                  <RemoveRedEyeIcon />
                </_IconColor>

                {data.page_views_count}
              </_Icon>

              <div>作成日:{formatDate(data.created_at)}</div>
              <div>更新日:{formatDate(data.updated_at)}</div>
            </_Flex>
          </a>
        </Link>
      </_Qiita>
    </>
  );
});

const _Qiita = styled("div")(() => ({
  backgroundColor: "white",
  border: "dashed 2px #C7D36F",
  marginBottom: 30,
  padding: 20,
}));

const _Icon = styled("div")(() => ({
  display: "flex",
  gap: 3,
}));

const _IconColor = styled("div")(() => ({
  color: "#9EB23B",
}));

const _Flex = styled("div")(() => ({
  display: "flex",
  gap: 20,
}));

const _Tag = styled("div")(() => ({
  backgroundColor: "#C7D36F",
  borderRadius: "5%",
  padding: 5,
  color: "white",
  fontSize: 15,
}));

const _TagList = styled("div")(() => ({
  display: "flex",
  gap: 5,
  marginTop: 10,
  marginBottom: 10,
}));
