import { Html, Head, Main, NextScript } from "next/document";
//MUI
import { styled } from "@mui/material/styles";

const Document = () => {
  return (
    <Html lang="ja">
      <Head />
      <_Body>
        <Main />
        <NextScript />
      </_Body>
    </Html>
  );
};

//90度 0-10%まで色あり、そこから先は白
const _Body = styled("body")(() => ({
  background:
    "linear-gradient(90deg, #e0deca 0%, #e0deca 10%, white 10%, white 100%)",
}));

export default Document;
