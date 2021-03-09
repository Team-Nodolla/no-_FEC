import React from 'react';
import { useForm } from 'react-hook-form';

const ReviewImageUpload = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input ref={register} type="file" name="images">
      <button>Add image</button>
    </form>
  )
};

export default ReviewImageUpload;
