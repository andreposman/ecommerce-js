/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ContentLoader from 'react-content-loader';

const SkeletonLoader = (props) => (
  <>
    <ContentLoader
      speed={3}
      width={300}
      height={360}
      viewBox="0 0 300 360"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <circle cx="31" cy="31" r="15" />
      <rect x="58" y="18" rx="2" ry="2" width="140" height="10" />
      <rect x="58" y="34" rx="2" ry="2" width="140" height="10" />
      <rect x="0" y="60" rx="2" ry="2" width="300" height="300" />
    </ContentLoader>
    <br />

    <ContentLoader
      speed={3}
      width={300}
      height={360}
      viewBox="0 0 300 360"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <circle cx="31" cy="31" r="15" />
      <rect x="58" y="18" rx="2" ry="2" width="140" height="10" />
      <rect x="58" y="34" rx="2" ry="2" width="140" height="10" />
      <rect x="0" y="60" rx="2" ry="2" width="300" height="300" />
    </ContentLoader>
    <br />

    <ContentLoader
      speed={3}
      width={300}
      height={360}
      viewBox="0 0 300 360"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <circle cx="31" cy="31" r="15" />
      <rect x="58" y="18" rx="2" ry="2" width="140" height="10" />
      <rect x="58" y="34" rx="2" ry="2" width="140" height="10" />
      <rect x="0" y="60" rx="2" ry="2" width="300" height="300" />
    </ContentLoader>
    <br />

    <ContentLoader
      speed={3}
      width={300}
      height={360}
      viewBox="0 0 300 360"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <circle cx="31" cy="31" r="15" />
      <rect x="58" y="18" rx="2" ry="2" width="140" height="10" />
      <rect x="58" y="34" rx="2" ry="2" width="140" height="10" />
      <rect x="0" y="60" rx="2" ry="2" width="300" height="300" />
    </ContentLoader>
    <br />

    <ContentLoader
      speed={3}
      width={300}
      height={360}
      viewBox="0 0 300 360"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <circle cx="31" cy="31" r="15" />
      <rect x="58" y="18" rx="2" ry="2" width="140" height="10" />
      <rect x="58" y="34" rx="2" ry="2" width="140" height="10" />
      <rect x="0" y="60" rx="2" ry="2" width="400" height="400" />
    </ContentLoader>
    <br />
  </>
);

export default SkeletonLoader;
