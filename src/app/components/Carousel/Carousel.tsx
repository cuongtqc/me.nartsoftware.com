"use client";

import React, {
  Children,
  cloneElement,
  FC,
  ReactElement,
  useCallback,
  useMemo,
  useState,
} from "react";

export const SLIDE_ITEM = "SLIDE_ITEM";
export const SLIDE_BUTTON_NEXT = "SLIDE_BUTTON_NEXT";
export const SLIDE_BUTTON_PREV = "SLIDE_BUTTON_PREV";

export const Carousel: FC<{ children?: any; wrapperClass?: string }> = ({
  children,
  wrapperClass = "relative h-full",
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
  const nextButton = useMemo(
    () =>
      childrenArray.find(
        (child: any) => child.props.role === SLIDE_BUTTON_NEXT,
      ),
    [childrenArray],
  );
  const prevButton = useMemo(
    () =>
      childrenArray.find(
        (child: any) => child.props.role === SLIDE_BUTTON_PREV,
      ),
    [childrenArray],
  );

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };
  const goToPrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length,
    );
  };

  const transformValue = useMemo(() => `translate-x-${currentSlide}/${slides.length}`, [currentSlide, slides]);

  return (
    <div className={wrapperClass}>
      <div
        className={
          `relative flex h-full snap-x wrapper-container transition-transform duration-500 ease-in-out ${transformValue}`
        }
      >
        {slides.map((slide, index) =>
          cloneElement(slide, {
            className: `${slide.props.className} snap-mandatory snap-center ${
              index === currentSlide ? "active text-red-600 z-5" : ""
            }`,
          }),
        )}
      </div>
      <span className="absolute top-1/2 left-4 transform -translate-y-1/2 z-6">
        {nextButton ? cloneElement(nextButton, { onClick: goToPrevSlide }) : ""}
      </span>
      <span className="absolute top-1/2 right-4 transform -translate-y-1/2 z-6">
        {prevButton ? cloneElement(prevButton, { onClick: goToNextSlide }) : ""}
      </span>
    </div>
  );
};
