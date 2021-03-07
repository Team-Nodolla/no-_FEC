import React from 'react';
import propTypes from 'proptypes';
import './ComparisonWindow.css';

// features = [ {feature, value}, {feature, value} ]

const ComparisonWindow = ({ displayModal }) => {
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
  console.log(currentProductName, '||', relatedProductName);
  return (
    <div
      id="comparison-modal-containter"
      className={
        displayModal
          ? 'comparison-modal-visible'
          : 'comparison-modal-invisible'
      }
    >
      <h3 id="comparison-modal-title">Comparison</h3>
      <div id="comparison-modal-names">
        <div id="comparison-modal-current-name">{currentProductName}</div>
        <div id="comparison-modal-related-name">{relatedProductName}</div>
      </div>
    </div>
  );
};

ComparisonWindow.propTypes = {
  displayModal: propTypes.bool.isRequired,
};

export default ComparisonWindow;
