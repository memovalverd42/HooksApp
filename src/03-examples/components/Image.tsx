import { FC, useLayoutEffect, useRef, useState } from "react";

interface ImageProps {
    imageUrl: string | undefined;
    name: string | undefined;
}

export const Image: FC<ImageProps> = ( { imageUrl, name } ) => {

  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  const imageRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const { height, width } = imageRef.current?.getBoundingClientRect()!;
    setBoxSize({height, width});
  }, [])

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
          <img 
            src={ imageUrl } 
            className="card-img-top img-fluid" 
            alt="Your Image" 
            ref={ imageRef }
            />
          <div className="card-body">
              <p className="card-text">{ name }</p>
          </div>
      </div>

      <code>{ JSON.stringify(boxSize) }</code>
    </>
  )
}
