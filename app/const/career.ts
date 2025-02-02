import { CareerList } from "types";

// 職歴
export const careerList: CareerList = [
  {
    name: "大学",
    start: "2015年4月1日",
    end: "2019年3月31日",
    description:
      "マーケティングについて学んでいました。</br>3年次には学科1位、4年間を通しては3位の成績で卒業しました。",
  },
  {
    name: "営業",
    start: "2019年4月1日",
    end: "2019年12月31日",
    description:
      "メーカー 法人営業</br>約200社を担当しており、納品までのスケジュール管理や電話やメールの対応, 事務作業も行なっていました。",
  },
  {
    name: "事務",
    start: "2020年1月1日",
    end: "2021年9月30日",
    description:
      "契約社員として請求書発行を担当しました。</br>業務後は次の転職先を決めるため、デザインやエンジニアの勉強に挑戦しました。",
  },
  {
    name: "IT",
    start: "2021年10月1日",
    end: "現在",
    description:
      "勉強の結果エンジニアの仕事が向いていそう、ということでフロントエンドエンジニアとして入社しました。</br>無事にぴったりハマったので、エンジニアとして今後はキャリアを築くことに決めました。",
  },
] as const;

// エンジニア歴
export const itCareerList: CareerList = [
  {
    name: "BtoC：サイトの新規構築",
    start: "2022年8月1日",
    end: "2023年4月30日",
    description:
      "立ち上げからリリースまで携わりました。</br>・使用技術：Next.js, TailwindCSS, Chart.js, AWS等</br>・チーム：フロント2名, ディレクター1名</br>・レスポンシブ対応, パフォーマンス向上, SEO対策",
  },
  {
    name: "BtoC：記事ページのリプレイス",
    start: "2023年5月1日",
    end: "2024年7月31日",
    description:
      "利用サービスが終了してしまうということで、リプレイスを行いました。</br>・使用技術：Next.js, TailwindCSS, microCMS, AWS等</br>・チーム：フロント2名, ディレクター1名</br>・レスポンシブ対応, パフォーマンス向上, SEO対策",
  },
  {
    name: "BtoB：車の販売店にて利用するサービス",
    start: "2024年8月1日",
    end: "現在",
    description:
      "これまでのプロジェクトに比べ、大規模なチームでの開発に携わりました。</br>・使用技術：Next.js, SCSS, AWS等</br>・チーム：フロント約10名, バックエンド:約10名",
  },
  {
    name: "デザインシステムプロジェクト",
    start: "2024年10月1日",
    end: "現在",
    description:
      "デザインシステムを全プロジェクトで利用するため、GitHub Packagesを利用して共通ライブラリを作成しました。</br>・使用技術：React, vanilla-extract, GitHub Packages, Vite等</br>・チーム：フロント約4名",
  },
] as const;
