/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import propTypes from 'proptypes';
import ComparisonWindowRow from './ComparisonWindowRow.jsx';
import './ComparisonWindow.css';

// features = [ {feature, value}, {feature, value} ]

const ComparisonWindow = ({
  displayModal,
  currentProductName,
  currentProductFeatures,
  relatedProductName,
  relatedProductFeatures,
}) => {
  const [featuresAndValues, setFeaturesAndValues] = useState([{ current: '', feature: '', related: '' }]);

  useEffect(() => {
    const features = getAllFeatures();
    const values = getAllValues(features);
    const combined = combineFeaturesAndValues(features, values);
    setFeaturesAndValues(combined);
  }, [currentProductName, relatedProductName]);

  const getAllFeatures = () => {
    const featuresSet = new Set();
    currentProductFeatures.forEach((product) => {
      featuresSet.add(product.feature);
    });
    relatedProductFeatures.forEach((product) => {
      featuresSet.add(product.feature);
    });
    return [...featuresSet];
  };

  const getAllValues = (featuresArray) => {
    const values = []; // An array of tuples
    featuresArray.forEach((feature) => {
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

  const combineFeaturesAndValues = (featuresArray, valuesArray) => {
    const combined = featuresArray.map((feature, index) => {
      const [current, related] = valuesArray[index];
      return { current, feature, related };
    });
    return combined;
  };

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
        {featuresAndValues?.map((combo) => (
          <ComparisonWindowRow
            key={combo.feature}
            comparedFeature={combo.feature}
            currentProductValue={combo.current}
            relatedProductValue={combo.related}
          />
        ))}
      </div>
    </div>
  );
};

ComparisonWindow.propTypes = {
  displayModal: propTypes.bool.isRequired,
  currentProductName: propTypes.string.isRequired,
  currentProductFeatures: propTypes.array.isRequired,
  relatedProductName: propTypes.string.isRequired,
  relatedProductFeatures: propTypes.array.isRequired,
};

export default ComparisonWindow;
