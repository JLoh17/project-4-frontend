import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'

// TODO - form submits on input??
const RenderForm = ({ errors, touched, isSubmitting }) => (
  <Form>
    <div className="form-group">
      <label htmlFor="firstName">First Name</label>
      <Field
        id="firstName"
        className={`form-control ${(errors.firstName && touched.firstName ? ' is-invalid' : '')}`}
        name="firstName"
        type="text"
      />
      <ErrorMessage component="div" className="invalid-feedback" name="firstName" />
    </div>

    <div className="form-group">
      <label htmlFor="lastName">Last Name</label>
      <Field
        id="lastName"
        className={`form-control ${(errors.lastName && touched.lastName ? ' is-invalid' : '')}`}
        name="lastName"
        type="text"
      />
      <ErrorMessage component="div" className="invalid-feedback" name="lastName" />
    </div>

    <div className="form-group">
      <label htmlFor="telephone">Telephone</label>
      <Field
        id="telephone"
        className={`form-control ${(errors.telephone && touched.telephone ? ' is-invalid' : '')}`}
        name="telephone"
        type="text"
      />
      <ErrorMessage component="div" className="invalid-feedback" name="telephone" />
    </div>

    <div className="form-group">
      <label htmlFor="address">Address</label>
      <Field
        id="address"
        className={`form-control ${(errors.address && touched.address ? ' is-invalid' : '')}`}
        name="address"
        type="text"
        component="textarea"
        rows="3"
      />
      <ErrorMessage component="div" className="invalid-feedback" name="address" />
    </div>

    <button className="btn btn-success col-6 float-right" type="submit" disabled={isSubmitting}>Proceed to payment
      <Link to="/my/payment" />
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
  telephone: yup.string().required('Field is Required'),
  address: yup.string().required('Field is Required')
})

const FormsDeliveryDetails = ({ initialValues, onSubmit }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={deliveryDetailsSchema}
    onSubmit={onSubmit}
    component={RenderForm}
    enableReinitialize // resets the form if initial value changes
  />
)
FormsDeliveryDetails.propTypes = {
  initialValues: PropTypes.shape().isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default FormsDeliveryDetails
