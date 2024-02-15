import {
  Carousel,
  SLIDE_BUTTON_NEXT,
  SLIDE_BUTTON_PREV,
  SLIDE_ITEM,
} from "@/app/components/Carousel/Carousel";
import React from 'react';

export const HomeCarousel = () => {
  return (
    <Carousel>
      <button
        className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10"
        role={SLIDE_BUTTON_NEXT}
      >
        &lt;
      </button>
      <button
        className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10"
        role={SLIDE_BUTTON_PREV}
      >
        &gt;
      </button>
      <div
        role={SLIDE_ITEM}
        className="flex h-full min-w-full items-center justify-center bg-gray-400 relative bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: 'url(/AnasAbdin.gif)'}}
      >
        Slide 1
      </div>
      <div
        role={SLIDE_ITEM}
        className="flex h-full min-w-full items-center justify-center bg-gray-400 relative"
      >
        Slide 2
      </div>
      <div
        role={SLIDE_ITEM}
        className="flex h-full min-w-full items-center justify-center bg-gray-400 relative"
      >
        Slide 3
      </div>
    </Carousel>
  );
};
