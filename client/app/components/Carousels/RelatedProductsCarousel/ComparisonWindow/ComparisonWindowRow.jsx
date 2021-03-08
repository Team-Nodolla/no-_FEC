import React from 'react';
import propTypes from 'proptypes';
import './ComparisonWindowRow.css';

const ComparisonWindowRow = ({
  comparedFeature = 'Compared Feature',
  currentProductValue = '',
  relatedProductValue = '',
}) => (
  <div id="comparison-modal-row">
    <div id="comparison-row-current-value">{currentProductValue}</div>
    <div id="comparison-row-feature">{comparedFeature}</div>
    <div id="comparison-row-related-value">{relatedProductValue}</div>
  </div>
);

ComparisonWindowRow.propTypes = {
  comparedFeature: propTypes.string.isRequired,
  currentProductValue: propTypes.string.isRequired,
  relatedProductValue: propTypes.string.isRequired,
};

export default ComparisonWindowRow;
