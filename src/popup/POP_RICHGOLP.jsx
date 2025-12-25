import { LayerPopup } from "@/component";

import Img01 from "@/assets/img/popup/golp_001.jpg";

export default function POP_RICHGOLP() {
  return (
    <LayerPopup title="리치골프 아카데미" id="pop_richgolp">
      제작기간 : 1개월
      <br />
      콘텐츠 구성 기획 참여
      <br />
      UI/UX 디자인, 퍼블리싱 단독 수행
      <br />
      <img src={Img01} alt="최종 채택 메인 시안" />
    </LayerPopup>
  );
}
