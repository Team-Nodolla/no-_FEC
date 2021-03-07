import React from 'react';
import propTypes from 'proptypes';
import './ComparisonWindow.css';

// features = [ {feature, value}, {feature, value} ]

const ComparisonWindow = ({ displayComparisonModal }) => {
  // Hard Coded values for testing
  const currentProductName = 'Camo Onesie';
  const currentProductFeatures = [
    {
      feature: 'Fabric',
      value: 'Canvas',
    },
    {
      feature: 'Buttons',
      value: 'Brass',
    },
  ];
  const relatedProductName = 'Morning Joggers';
  const relatedProductFeatures = [
    {
      feature: 'Fabric',
      value: '100% Cotton',
    },
    {
      feature: 'Cut',
      value: 'Skinny',
    },
  ];
  console.log(currentProductName, relatedProductName);
  return (
    <div
      id="comparison-modal-containter"
      className={
        displayComparisonModal
          ? 'comparison-modal-visible'
          : 'comparison-modal-invisible'
      }
    >
      <h3 id="comparison-modal-title">Comparison</h3>
      {/* <span>{currentProductName}</span> */}
      {/* <span>{relatedProductName}</span> */}
    </div>
  );
};

ComparisonWindow.propTypes = {
  displayComparisonModal: propTypes.bool.isRequired,
};

export default ComparisonWindow;
