import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'

const RenderForm = ({ errors, touched, isSubmitting }) => (
  <Form>
    <div className="form-group">
      <label htmlFor="productName">Product</label>
      <Field
        id="productName"
        className={`form-control ${(errors.productName && touched.productName ? 'is-invalid' : '')}`}
        name="productName" // this links to the Product from users if an initial value is found
        type="text"
      />
      <ErrorMessage component="div" className="invalid-feedback" name="productName" />
    </div>

    <div className="form-group">
      <label htmlFor="CategoryId">Category</label>
      <Field
        id="CategoryId"
        className={`form-control ${(errors.CategoryId && touched.CategoryId ? 'is-invalid' : '')}`}
        name="CategoryId"
        as="select"
      >
        <option value="" label="Select a Category" />
        <option value="1" label="Electronics" />
        <option value="2" label="Sports & Lifestyle" />
        <option value="3" label="Household" />
        <option value="4" label="Toys & Games" />
      </Field>
      <ErrorMessage component="div" className="invalid-feedback" name="CategoryId" />
    </div>

    <div className="form-group">
      <label htmlFor="Price">Price</label>
      <Field
        id="price"
        className={`form-control ${(errors.price && touched.price ? 'is-invalid' : '')}`}
        name="price"
        type="text"
      />
      <ErrorMessage component="div" className="invalid-feedback" name="price" />
    </div>

    <div className="form-group">
      <label htmlFor="Description">Description</label>
      <Field
        id="description"
        className={`form-control ${(errors.description && touched.description ? 'is-invalid' : '')}`}
        name="description"
        type="text"
        component="textarea"
        rows="3"
      />
      <ErrorMessage component="div" className="invalid-feedback" name="description" />
    </div>

    <div className="form-group">
      <label htmlFor="imageURL">Image URL</label>
      <Field
        id="imageURL"
        className={`form-control ${(errors.imageURL && touched.imageURL ? 'is-invalid' : '')}`}
        name="imageURL"
        type="text"
      />
      <ErrorMessage component="div" className="invalid-feedback" name="imageURL" />
    </div>

    <div className="form-group">
      <label htmlFor="imageURL2">Image URL 2 (optional)</label>
      <Field
        id="imageURL2"
        className={`form-control ${(errors.imageURL && touched.imageURL ? 'is-invalid' : '')}`}
        name="imageURL2"
        type="text"
      />
    </div>

    <div className="form-group">
      <label htmlFor="imageURL3">Image URL 3 (optional)</label>
      <Field
        id="imageURL3"
        className={`form-control ${(errors.imageURL && touched.imageURL ? 'is-invalid' : '')}`}
        name="imageURL3"
        type="text"
      />
    </div>

    <div className="custom-control custom-checkbox form-group">
      <Field
        id="isNew"
        className="custom-control-input"
        name="isNew"
        type="checkbox"
      />
      <label className="custom-control-label" htmlFor="isNew">New product</label>
      <ErrorMessage component="div" className="invalid-feedback" name="isNew" />
    </div>

    <div className="custom-control custom-checkbox form-group">
      <Field
        id="isFeatured"
        className="custom-control-input"
        name="isFeatured"
        type="checkbox"
      />
      <label className="custom-control-label" htmlFor="isFeatured">Featured product</label>
      <ErrorMessage component="div" className="invalid-feedback" name="isFeatured" />
    </div>

    <div className="custom-control custom-checkbox form-group">
      <Field
        id="isDisabled"
        className="custom-control-input"
        name="isDisabled"
        type="checkbox"
      />
      <label className="custom-control-label" htmlFor="isDisabled">isDisabled</label>
      <ErrorMessage component="div" className="invalid-feedback" name="isDisabled" />
    </div>

    <button className="btn btn-success col-6 float-right" type="submit" disabled={isSubmitting}>Create product</button>

  </Form>

)

RenderForm.propTypes = {
  errors: PropTypes.shape().isRequired,
  touched: PropTypes.shape().isRequired,
  isSubmitting: PropTypes.bool.isRequired
}

const createProductSchema = yup.object().shape({
  productName: yup.string().required('Field is Required'),
  CategoryId: yup.number().required('Field is Required'),
  price: yup.number().required('Field is Required'),
  description: yup.string().required('Field is Required'),
  imageURL: yup.string().required('Field is Required'),
  imageURL2: yup.string().notRequired(''),
  imageURL3: yup.string().notRequired(''),
  isNew: yup.boolean(),
  isFeatured: yup.boolean(),
  isDisabled: yup.boolean()
})

const FormsCreateProduct = ({ onSubmit }) => (
  <Formik
    initialValues={{
      productName: '',
      CategoryId: '',
      price: '',
      description: '',
      imageURL: '',
      imageURL2: '',
      imageURL3: ''
    }} // if not initial values, set to empty string
    validationSchema={createProductSchema}
    onSubmit={onSubmit}
    component={RenderForm}
    enableReinitialize // resets the form if initial value changes
  />
)
FormsCreateProduct.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default FormsCreateProduct
