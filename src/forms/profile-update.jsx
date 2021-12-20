import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'

const RenderForm = ({ errors, touched, isSubmitting }) => (
  <Form>
    <div className="form-group">
      <label htmlFor="firstName">First Name</label>
      <Field
        id="firstName"
        className={`form-control ${(errors.firstName && touched.firstName ? 'is-invalid' : '')}`}
        name="firstName" // this links to the firstName from users if an initial value is found
        type="text"
      />
      <ErrorMessage component="div" className="invalid-feedback" name="firstName" />
    </div>

    <div className="form-group">
      <label htmlFor="lastName">Last Name</label>
      <Field
        id="lastName"
        className={`form-control ${(errors.lastName && touched.lastName ? 'is-invalid' : '')}`}
        name="lastName"
        type="text"
        placeholder="Please enter a last name"
      />
      <ErrorMessage component="div" className="invalid-feedback" name="lastName" />
    </div>

    <div className="form-group">
      <label htmlFor="email">Email</label>
      <Field
        id="email"
        className={`form-control ${(errors.email && touched.email ? ' is-invalid' : '')}`}
        name="email"
        type="text"
      />
      <ErrorMessage component="div" className="invalid-feedback" name="email" />
    </div>

    <div className="form-group">
      <label htmlFor="telephone">Telephone</label>
      <Field
        id="telephone"
        placeholder="Please enter a telephone number"
        className={`form-control ${(errors.telephone && touched.telephone ? 'is-invalid' : '')}`}
        name="telephone"
        type="text"
      />
      <ErrorMessage component="div" className="invalid-feedback" name="telephone" />
    </div>

    <div className="form-group">
      <label htmlFor="address">Address</label>
      <Field
        id="address"
        placeholder="Enter a delivery address"
        className={`form-control ${(errors.address && touched.address ? 'is-invalid' : '')}`}
        name="address"
        type="text"
        component="textarea"
        rows="3"
      />
      <ErrorMessage component="div" className="invalid-feedback" name="address" />
    </div>

    <button className="btn btn-success col-6 float-right mt-3" type="submit" disabled={isSubmitting}>Update your profile
    </button>
  </Form>
)

RenderForm.propTypes = {
  errors: PropTypes.shape().isRequired,
  touched: PropTypes.shape().isRequired,
  isSubmitting: PropTypes.bool.isRequired
}

const deliveryDetailsSchema = yup.object().shape({
  firstName: yup.string().required('Field is Required'),
  lastName: yup.string().required('Field is Required'),
  email: yup.string().email().required('Field is required'),
  telephone: yup.number().required('Field is Required'),
  address: yup.string().required('Field is Required')
})

const MyProfileForm = ({ initialValues, onSubmit }) => (
  <Formik
    initialValues={initialValues} // the initial values in the form.
    validationSchema={deliveryDetailsSchema}
    onSubmit={onSubmit}
    component={RenderForm}
    enableReinitialize // resets the form if initial value changes
  />
)
MyProfileForm.propTypes = {
  initialValues: PropTypes.shape().isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default MyProfileForm
