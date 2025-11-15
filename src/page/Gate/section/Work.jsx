import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";

import { Card } from "@/component";

export default function Work({ data }) {
  return (
    <section className="work">
      <div className="work__wrap">
        <Swiper
          className="work-slide"
          slidesPerView={"auto"}
          spaceBetween={40}
          direction={"horizontal"}
          mousewheel={{ sensitivity: 3, releaseOnEdges: true }}
          modules={[Mousewheel]}
        >
          {data.map((item, num) => {
            return (
              <SwiperSlide className="work-slide__item" key={num}>
                <Card
                  className="work-slide__card"
                  num={num + 1}
                  tit={item.tit}
                  tag={item.tag}
                  year={item.year}
                  img={item.img}
                >
                  {item.desc}
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
