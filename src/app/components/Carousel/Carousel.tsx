"use client";

import React, {
  Children,
  cloneElement,
  FC,
  ReactElement,
  useMemo,
  useState,
} from "react";

export const SLIDE_ITEM = "SLIDE_ITEM";
export const SLIDE_BUTTON_NEXT = "SLIDE_BUTTON_NEXT";
export const SLIDE_BUTTON_PREV = "SLIDE_BUTTON_PREV";

export const Carousel: FC<{ children?: any; wrapperClass?: string }> = ({
  children,
  wrapperClass = "relative h-full overflow-x-hidden overflow-y-hidden",
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const childrenArray = useMemo(
    () =>
      Children.map(children, (child: ReactElement) =>
        cloneElement(child, child.props),
      ),
    [children],
  );
  const slides = useMemo(
    () => childrenArray.filter((child: any) => child.props.role === SLIDE_ITEM),
    [childrenArray],
  );

  const nextButton = useMemo(() => {
    const button = childrenArray.find(
      (child: any) => child.props.role === SLIDE_BUTTON_NEXT,
    );
    return button
      ? cloneElement(button, {
          onClick: () => {
            setCurrentSlide(
              (prevSlide) => (prevSlide - 1 + slides.length) % slides.length,
            );
          },
        })
      : "";
  }, [childrenArray, slides.length]);
  const prevButton = useMemo(() => {
    const button = childrenArray.find(
      (child: any) => child.props.role === SLIDE_BUTTON_PREV,
    );
    return button
      ? cloneElement(button, {
          onClick: () => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
          },
        })
      : "";
  }, [childrenArray, slides.length]);

  return (
    <div className={wrapperClass}>
      <div
        style={{ transform: `translateX(-${currentSlide}00%)` }}
        className={`relative flex h-full snap-x snap-mandatory scroll-smooth no-scrollbar wrapper-container transition-transform duration-500 ease-in-out`}
      >
        {slides.map((slide, index) =>
          cloneElement(slide, {
            className: `${
              slide.props.className
            } snap-mandatory snap-center z-5`,
          }),
        )}
      </div>
      <span className="absolute top-1/2 left-4 transform -translate-y-1/2 z-6">
        {nextButton}
      </span>
      <span className="absolute top-1/2 right-4 transform -translate-y-1/2 z-6">
        {prevButton}
      </span>
    </div>
  );
};
