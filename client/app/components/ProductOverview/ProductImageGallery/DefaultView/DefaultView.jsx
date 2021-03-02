import React from 'react';
import ReactImageMagnify from 'react-image-magnify';
import './DefaultView.css';

const DefaultView = ({ defaultPhoto }) => {
  // const [currentPhoto, setCurrentPhoto] = useState(0);

  if (defaultPhoto !== undefined) {
    // const onClickRightChange = () => {
    //   console.log('clicked right');
    //   if (currentPhoto !== defaultPhoto.length - 1) {
    //     setCurrentPhoto(currentPhoto + 1);
    //   }
    // };
    // const onClickLeftChange = () => {
    //   console.log('clicked left');
    //   if (currentPhoto > 0) {
    //     setCurrentPhoto(currentPhoto - 1);
    //   }
    // };
    return (
      <div className="default-image">
        <div className="image">
          <ReactImageMagnify {...{
            smallImage: {
              isFluidWidth: true,
              src: defaultPhoto.url,
            },
            largeImage: {
              src: defaultPhoto.url,
              width: 1200,
              height: 1800,
            },
          }}
          />
        </div>
        <div className="padding-container">
        </div>
      </div>
    );
  }

  return (
    <div></div>
  );
};

export default DefaultView;
