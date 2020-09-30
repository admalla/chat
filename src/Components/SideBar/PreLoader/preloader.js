import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./preloader.css";

function Preloader() {
  return (
    <div>
      <SkeletonTheme color="lightgrey" highlightColor="#444">
        <div className="skeleton-1">
          <div className="circle">
            <Skeleton circle={true} height={40} width={40} />
          </div>
          <div>
            <Skeleton count={2} width={150} height={10} />
          </div>
        </div>
        <div className="skeleton-2">
          <div className="circle">
            <Skeleton circle={true} height={40} width={40} />
          </div>
          <div>
            <Skeleton count={2} width={150} height={10} />
          </div>
        </div>
        <div className="skeleton-2">
          <div className="circle">
            <Skeleton circle={true} height={40} width={40} />
          </div>
          <div>
            <Skeleton count={2} width={150} height={10} />
          </div>
        </div>
        <div className="skeleton-2">
          <div className="circle">
            <Skeleton circle={true} height={40} width={40} />
          </div>
          <div>
            <Skeleton count={2} width={150} height={10} />
          </div>
        </div>
        <div className="skeleton-2">
          <div className="circle">
            <Skeleton circle={true} height={40} width={40} />
          </div>
          <div>
            <Skeleton count={2} width={150} height={10} />
          </div>
        </div>
        <div className="skeleton-2">
          <div className="circle">
            <Skeleton circle={true} height={40} width={40} />
          </div>
          <div>
            <Skeleton count={2} width={150} height={10} />
          </div>
        </div>
        <div className="skeleton-2">
          <div className="circle">
            <Skeleton circle={true} height={40} width={40} />
          </div>
          <div>
            <Skeleton count={2} width={150} height={10} />
          </div>
        </div>
        <div className="skeleton-2">
          <div className="circle">
            <Skeleton circle={true} height={40} width={40} />
          </div>
          <div>
            <Skeleton count={2} width={150} height={10} />
          </div>
        </div>
      </SkeletonTheme>
      ;
    </div>
  );
}
export default Preloader;
