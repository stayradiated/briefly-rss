import { useEffect, useState } from "react";

const preloadImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve(img);
    };
    img.onerror = img.onabort = () => {
      reject(src);
    };
    img.src = src;
  });
};

const useImagePreloader = (imageList: string[]) => {
  const [imagesPreloaded, setImagesPreloaded] = useState<boolean>(false);

  useEffect(() => {
    let isCancelled = false;

    const effect = async () => {
      if (isCancelled) {
        return;
      }

      const imagesPromiseList: Promise<HTMLImageElement>[] = [];
      for (const i of imageList) {
        imagesPromiseList.push(preloadImage(i));
      }

      await Promise.all(imagesPromiseList);

      if (isCancelled) {
        return;
      }

      setImagesPreloaded(true);
    };

    effect();

    return () => {
      isCancelled = true;
    };
  }, [imageList]);

  return { imagesPreloaded };
};

export { useImagePreloader };
