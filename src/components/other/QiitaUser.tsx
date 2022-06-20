import { FC, memo } from "react";
import Image from "next/image";

//components
import { QiitaUserType } from "../../types/qiitaType";

//MUI
import { styled } from "@mui/material/styles";
import Link from "next/link";

type Props = {
  data: QiitaUserType;
};

/**
 * Qiitaプロフィール部分.
 */
export const QiitaUser: FC<Props> = memo(({ data }) => {
  return (
    <>
      <_Flex>
        <_Image
          alt="プロフィール画像"
          src={data.profileImageUrl}
          width={100}
          height={100}
        />
        <Link href={`https://qiita.com/${data.id}`}>
          <_A>
            <div>{data.id}</div>
            <div>{data.description}</div>
          </_A>
        </Link>
      </_Flex>
    </>
  );
});

const _Flex = styled("div")(() => ({
  display: "flex",
  gap: 20,
}));

const _Image = styled(Image)(() => ({
  borderRadius: "100%",
}));

const _A = styled("a")(() => ({
  ":hover": {
    opacity: "40%",
  },
}));
