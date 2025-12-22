import { LayerPopup } from "@/component";

import Img01 from "@/assets/img/popup/xcone_001.jpg";

export default function POP_XCONE() {
  return (
    <LayerPopup title="XCONE" id="pop_xcone">
      제작기간 : 2개월
      <br />
      콘텐츠 구성 기획 참여
      <br />
      UI/UX 디자인, 퍼블리싱 단독 수행
      <br />
      <img src={Img01} alt="최종 채택 메인 시안" />
    </LayerPopup>
  );
}
