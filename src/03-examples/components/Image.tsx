import { FC } from "react";

interface ImageProps {
    imageUrl: string | undefined;
    name: string | undefined;
}

export const Image: FC<ImageProps> = ( { imageUrl, name } ) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
        <img src={ imageUrl } className="card-img-top img-fluid" alt="Your Image" />
        <div className="card-body">
            <p className="card-text">{ name }</p>
        </div>
    </div>
  )
}
