import { LayerPopup } from "@/component";

import Img01 from "@/assets/img/popup/speedfloor_001.jpg";
import Img02 from "@/assets/img/popup/speedfloor_002.jpg";
import Img03 from "@/assets/img/popup/speedfloor_003.jpg";

export default function POP_SPEEDFLOOR() {
  return (
    <LayerPopup title="스피드 플로어" id="pop_speedfloor">
      제작기간 : 1.5개월
      <br />
      콘텐츠 구성 기획 참여
      <br />
      UI/UX 디자인, 퍼블리싱 단독 수행
      <br />
      <em>최종 채택 메인 시안</em>
      <img src={Img01} alt="최종 채택 메인 시안" />
      <br />
      <em>서브 페이지 시안</em>
      <img src={Img02} alt="서브 페이지 시안" />
      <br />
      <em>컨셉 제안 시안</em>
      <img src={Img03} alt="컨셉 제안 시안" />
    </LayerPopup>
  );
}
