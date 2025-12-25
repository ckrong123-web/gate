import { LayerPopup } from "@/component";

import Img01 from "@/assets/img/popup/alicecar_001.jpg";
import Img02 from "@/assets/img/popup/alicecar_002.png";
import Img03 from "@/assets/img/popup/alicecar_003.jpg";
import Img04 from "@/assets/img/popup/alicecar_004.jpg";

export default function POP_ALICECAR() {
  return (
    <LayerPopup
      title="앨리스 렌터카"
      id="pop_alicecar"
      href="https://www.rentcar.co.kr/"
    >
      제작기간 : 3개월
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
      <img src={Img04} alt="최종 채택 메인 시안" />
    </LayerPopup>
  );
}
