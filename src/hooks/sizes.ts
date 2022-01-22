import React, { useEffect, useState } from "react";

interface Sizes {
  screenWidth: number;
  screenHeight: number;
  ratiowh: number;
  ratiohw: number;
  rect?: {
    width: number;
    height: number;
    left: number;
    right: number;
    top: number;
    bottom: number;
  };
}

/**
 * Listen to window's resize event and returns some information about window's size.
 * If an `element` is providen, it wil also return element's sizes
 */
export const useResize = (element?: React.RefObject<Element>) => {
  const [sizes, setSizes] = useState<Sizes>({
    screenWidth: 0,
    screenHeight: 0,
    ratiowh: 0,
    ratiohw: 0,
    rect: undefined
  });

  const onResize = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const ratiowh = screenWidth / screenHeight;
    const ratiohw = screenHeight / screenWidth;
    let rect: Sizes['rect'];
    
    if (element?.current) {
      // DOM API does not allow for a shallow copy, so we have to manually set them
      const clientRect = element.current.getBoundingClientRect();
      rect = {
        width: clientRect.width,
        height: clientRect.height > 300 ? 300 : clientRect.height,
        left: clientRect.left,
        right: clientRect.right,
        top: clientRect.top,
        bottom: clientRect.bottom
      };
    }

    setSizes({
      screenWidth,
      screenHeight,
      ratiowh,
      ratiohw,
      rect
    });
  };

  useEffect(() => {
    window.addEventListener('resize', onResize, false);
    onResize();

    return () => {
      window.removeEventListener('resize', onResize, false);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return sizes;
};
