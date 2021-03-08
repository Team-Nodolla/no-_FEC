/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
/* eslint-disable import/extensions */
import React from 'react';
import propTypes from 'proptypes';
import ComparisonWindowRow from './ComparisonWindowRow.jsx';
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
  const getAllFeatures = () => {
    const features = new Set();
    currentProductFeatures.forEach((product) => {
      features.add(product.feature);
    });
    relatedProductFeatures.forEach((product) => {
      features.add(product.feature);
    });
    return features;
  };

  const getAllValues = (features) => {
    const values = []; // An array of tuples
    features.forEach((feature) => {
      const putInValues = []; // tuple: [ currentProductVal, relatedProductVal ]
      const currIndex = currentProductFeatures.findIndex((product) => (product.feature === feature));
      const relatedIndex = relatedProductFeatures.findIndex((related) => (related.feature === feature));
      if (currIndex !== -1) {
        currentProductFeatures[currIndex].value === true
          ? putInValues.push('✓')
          : putInValues.push(currentProductFeatures[currIndex].value);
      } else {
        putInValues.push('');
      }
      if (relatedIndex !== -1) {
        relatedProductFeatures[relatedIndex].value === true
          ? putInValues.push('✓')
          : putInValues.push(relatedProductFeatures[relatedIndex].value);
      } else {
        putInValues.push('');
      }
      values.push(putInValues);
    });
    return values;
  };

  // console.log([...getAllFeatures()], getAllValues([...getAllFeatures()]));

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
        <span id="comparison-modal-current-name">{currentProductName}</span>
        <span id="comparison-modal-related-name">{relatedProductName}</span>
      </div>
      <div id="comparison-modal-feature-container">
        <ComparisonWindowRow
          comparedFeature={currentProductFeatures[0].feature}
          currentProductValue={currentProductFeatures[0].value}
          relatedProductValue={relatedProductFeatures[0].value}
        />
        <ComparisonWindowRow
          comparedFeature={currentProductFeatures[1].feature}
          currentProductValue={currentProductFeatures[1].value}
          relatedProductValue=""
        />
        <ComparisonWindowRow
          comparedFeature="3-year-warranty"
          currentProductValue="✓"
          relatedProductValue="✓"
        />
      </div>
    </div>
  );
};

ComparisonWindow.propTypes = {
  displayModal: propTypes.bool.isRequired,
};

export default ComparisonWindow;
