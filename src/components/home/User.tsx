import { FC, memo } from "react";
import Image from "next/image";

//MUI
import { styled } from "@mui/material/styles";

/**
 * Home画面プロフィール部分.
 */
export const User: FC = memo(() => {
  return (
    <>
      <_Align>
        <Image
          src="/usakus.jpg"
          alt="プロフィール画像"
          width={100}
          height={100}
        />

        <div>2021年10月~フロントエンドエンジニアになりました</div>
        <div>ただ自分の成果物をまとめるために作成したサイトです</div>
      </_Align>
    </>
  );
});

const _Align = styled("div")(() => ({
  textAlign: "center",
}));
