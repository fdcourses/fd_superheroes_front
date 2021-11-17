import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import { useDispatch } from 'react-redux';
import * as HeroActionCreators from '../../../actions/heroActionCreators';

const initialValues = {
  nickname: '',
  realName: '',
  originDescription: '',
  catchPhrase: '',
  superPowers: [''],
  images: [null],
};

const CreateHeroForm = (props) => {
  const dispatch = useDispatch();

  const submitHandler = (values, formikBag) => {
    console.log(values);

    const data = new FormData();
    data.append('nickname', values.nickname);
    data.append('realName', values.realName);
    data.append('originDescription', values.originDescription);
    data.append('catchPhrase', values.catchPhrase);

    values.superPowers.forEach((power) => {
      data.append('superPowers', power);
    });
    values.images.forEach((img) => {
      data.append('images', img);
    });

    const action = HeroActionCreators.createHeroRequest(data);
    dispatch(action);
    formikBag.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={submitHandler}>
      {({ values, setFieldValue }) => {
        return (
          <Form
            style={{ display: 'flex', flexDirection: 'column', width: '400px' }}
          >
            <Field placeholder="nickname" name="nickname" />
            <Field placeholder="realName" name="realName" />
            <Field placeholder="originDescription" name="originDescription" />
            <Field placeholder="catchPhrase" name="catchPhrase" />
            <FieldArray name="superPowers">
              {({ push, remove }) => {
                return (
                  <div>
                    {values.superPowers.length > 0 &&
                      values.superPowers.map((hero, index) => {
                        return (
                          <div>
                            <Field
                              placeholder="Superpower"
                              name={`superPowers.${index}`}
                            />
                            <button type="button" onClick={() => remove(index)}>
                              Delete Power
                            </button>
                          </div>
                        );
                      })}

                    <button type="button" onClick={() => push('')}>
                      Add Power
                    </button>
                  </div>
                );
              }}
            </FieldArray>
            <FieldArray name="images">
              {({ push, remove }) => (
                <div>
                  {values.images.length > 0 &&
                    values.images.map((img, index) => {
                      return (
                        <div>
                          <input
                            type="file"
                            name={`images.${index}`}
                            onChange={(e) => {
                              setFieldValue(
                                `images.${index}`,
                                e.currentTarget.files[0]
                              );
                            }}
                          />
                          <button type="button" onClick={() => remove(index)}>
                            Remove Image
                          </button>
                        </div>
                      );
                    })}
                  <button type="button" onClick={() => push(null)}>
                    Add image
                  </button>
                </div>
              )}
            </FieldArray>
            <button type="submit">Create hero</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default CreateHeroForm;
