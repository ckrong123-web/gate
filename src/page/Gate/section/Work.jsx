import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import cn from "classnames";
import { ArrowIco } from "@/icon";

import useDeviceBreakpoint from "@/hook/useDeviceBreakpoint";

import { Card } from "@/component";

const Work = forwardRef((props, ref) => {
  const { isPc } = useDeviceBreakpoint();
  return (
    <section className={cn("work", props.className)} ref={ref}>
      <div className="work__wrap">
        <Swiper
          className="work-slide"
          slidesPerView={"auto"}
          spaceBetween={40}
          direction={"horizontal"}
          mousewheel={isPc && { sensitivity: 3, releaseOnEdges: true }}
          modules={isPc && [Mousewheel]}
        >
          {props.data.map((item, num) => {
            return (
              <SwiperSlide className="work-slide__item" key={num}>
                <Card
                  className="work-slide__card"
                  num={num + 1}
                  tit={item.tit}
                  tag={item.tag}
                  year={item.year}
                  img={item.img}
                  href={item.href}
                >
                  {item.desc}
                </Card>
              </SwiperSlide>
            );
          })}

          <SwiperSlide className="work-slide__item">
            <div className="work-slide__link">
              <Link to="/gate/work" className="work-slide__link-wrap">
                More Project
                <ArrowIco className="work-slide__ico" />
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
});

export default Work;
