import { useEffect, useState } from "react";

const useResizeWindows = (media) => {
  const [mq, setMq] = useState(null);

  useEffect(() => {
    function windowWidth() {
      if (matchMedia(media).matches) {
        setMq(true);
      } else {
        setMq(false);
      }
    }

    windowWidth();
    window.addEventListener("resize", windowWidth);

    return () => {
      window.removeEventListener("resize", windowWidth);
    };
  }, [media]);

  return [mq];
};

export { useResizeWindows };
