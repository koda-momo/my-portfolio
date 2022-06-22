import { useCallback } from "react";
import { useRouter } from "next/router";

export const useMakeTitle = () => {
  const router = useRouter();

  /**
   * パスからページタイトルを作成.
   * @returns 作成したタイトル
   */
  const makeTitle = useCallback(() => {
    //パスからタイトルを取得 → 頭の/を削除
    const url = router.pathname;

    let title = "";

    //PathがindexならばHomeを代入
    if (url === "/") {
      title = "Home";
    } else {
      //それ以外は頭の文字だけ大文字にして代入
      const urlLength = url.length;
      const titleName = url.slice(6, urlLength + 1);
      const initial = titleName[0].toUpperCase();
      const behind = titleName.slice(1, titleName.length + 1);
      title = initial + behind;
    }

    return title;
  }, [router.pathname]);

  return { makeTitle };
};
