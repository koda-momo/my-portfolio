import { FC, memo } from "react";
import Link from "next/link";

//components
import { useFormatDate } from "../../hooks/useFormatDate";
import { QiitaType } from "../../types/qiitaType";

//MUI
import { styled } from "@mui/material/styles";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

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
      <_Qiita>
        <Link href={data.url}>
          <_A>
            {data.title}

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

              <div>作成日:{formatDate(data.created_at)}</div>
              <div>更新日:{formatDate(data.updated_at)}</div>
            </_Flex>
          </_A>
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

const _A = styled("a")(() => ({
  ":hover": {
    opacity: "40%",
  },
}));
