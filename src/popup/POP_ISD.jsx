import { LayerPopup } from "@/component";

import Img01 from "@/assets/img/popup/isd_001.jpg";
import Img02 from "@/assets/img/popup/isd_002.jpg";
import Img03 from "@/assets/img/popup/isd_003.jpg";
import Img04 from "@/assets/img/popup/isd_004.jpg";

export default function POP_ISD() {
  return (
    <LayerPopup title="이즈디" id="pop_isd">
      UI/UX 디자인, 퍼블리싱 단독 수행
      <br />
      <em>3차 리뉴얼 시안</em>
      <img src={Img01} alt="3차 리뉴얼 시안" />
      <br />
      <em>3차 리뉴얼 시안 - 메인 슬라이드</em>
      <img src={Img02} alt="3차 리뉴얼 시안 - 메인 슬라이드" />
      <br />
      <em>2차 리뉴얼 시안</em>
      <img src={Img03} alt="2차 리뉴얼 시안" />
      <br />
      <em>1차 리뉴얼 시안</em>
      <img src={Img04} alt="1차 리뉴얼 시안" />
    </LayerPopup>
  );
}
