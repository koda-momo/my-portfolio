import { FC, memo } from "react";
import Image from "next/image";

//MUI
import { styled } from "@mui/material/styles";

/**
 * サイト画像を表示する.
 */
export const SiteImage: FC = memo(() => {
  return (
    <>
      <_Image src="" alt="サイトイメージ画像" />
    </>
  );
});

const _Image = styled(Image)(() => ({
  width: 200,
  height: 100,
  objectFit: "cover",
}));
