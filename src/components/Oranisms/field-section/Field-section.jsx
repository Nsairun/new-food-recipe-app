import React from 'react';
import './field-section.css';
import Button from '../../atoms/Button';

function FieldSection() {
  return (
    <div className="add-recipe">
      <h1>Add your recipe here</h1>
      <div className="fields">
        <p>Food Name</p>
        <FieldSection />
        <p>Image Link</p>
        <FieldSection />
        <p>Food Description</p>
        <FieldSection />
        <Button />
      </div>
    </div>
  );
}

export default FieldSection;
