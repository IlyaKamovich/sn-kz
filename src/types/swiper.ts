import React from 'react';

import type { SwiperSlideProps, SwiperProps } from 'swiper/react';
import { Swiper } from 'swiper/types';

export interface SwiperRef extends HTMLElement {
  swiper: Swiper;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'swiper-container': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & SwiperProps,
        HTMLElement
      >;
      'swiper-slide': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & SwiperSlideProps,
        HTMLElement
      >;
    }
  }
}
