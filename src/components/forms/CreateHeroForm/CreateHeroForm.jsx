import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as HeroActionCreators from '../../../actions/heroActionCreators';

const initialValues = {
  nickname: '',
  realName: '',
  originDescription: '',
  catchPhrase: '',
};

const CreateHeroForm = (props) => {

  
  const submitHandler = (values, formikBag) => {

    formikBag.resetForm();
  }

  return (
    <Formik initialValues={initialValues} onSubmit={submitHandler}>
      <Form
        style={{ display: 'flex', flexDirection: 'column', width: '400px' }}
      >
        <Field placeholder="nickname" name="nickname" />
        <Field placeholder="realName" name="realName" />
        <Field placeholder="originDescription" name="originDescription" />
        <Field placeholder="catchPhrase" name="catchPhrase" />
        <button type="submit">Create hero</button>
      </Form>
    </Formik>
  );
};

export default CreateHeroForm;
