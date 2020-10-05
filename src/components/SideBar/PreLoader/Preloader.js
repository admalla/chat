import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./preloader.css";

function Preloader() {
  const Array = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
      Array.fill(
      <SkeletonTheme color="lightgrey" highlightColor="white">
        <div className="skeleton">
          <div className="circle">
            <Skeleton circle={true} height={40} width={40} />
          </div>
          <div>
            <Skeleton count={2} width={150} height={10} />
          </div>
        </div>
      </SkeletonTheme>
      )
  );
}
export default Preloader
