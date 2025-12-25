import { LayerPopup } from "@/component";

import Img01 from "@/assets/img/popup/alicecamping_001.jpg";

export default function POP_ALICECAMPING() {
  return (
    <LayerPopup title="앨리스 캠핑" id="pop_alicecamping">
      제작기간 : 3개월
      <br />
      콘텐츠 구성 기획 참여
      <br />
      UI/UX 디자인, 퍼블리싱 단독 수행
      <br />
      <em>최종 채택 메인 시안</em>
      <img src={Img01} alt="최종 채택 메인 시안" />
    </LayerPopup>
  );
}
