import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
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
        disabled
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
        disabled
      />
      <ErrorMessage component="div" className="invalid-feedback" name="lastName" />
    </div>

    <div className="form-group">
      <label htmlFor="telephone">Telephone</label>
      <Field
        id="telephone"
        className={`form-control ${(errors.telephone && touched.telephone ? 'is-invalid' : '')}`}
        name="telephone"
        type="text"
        disabled
      />
      <ErrorMessage component="div" className="invalid-feedback" name="telephone" />
    </div>

    <div className="form-group">
      <label htmlFor="deliveryAddress">Address</label>
      <Field
        id="deliveryAddress"
        className={`form-control ${(errors.deliveryAddress && touched.deliveryAddress ? 'is-invalid' : '')}`}
        name="deliveryAddress"
        type="text"
        component="textarea"
        rows="3"
        disabled
      />
      <ErrorMessage component="div" className="invalid-feedback" name="deliveryAddress" />
    </div>

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
  telephone: yup.number().required('Field is Required'),
  deliveryAddress: yup.string().required('Field is Required')
})

const FormsDeliveryShow = ({ initialValues }) => (
  <Formik
    initialValues={initialValues} // the initial values in the form.
    validationSchema={deliveryDetailsSchema}
    component={RenderForm}
    enableReinitialize // resets the form if initial value changes
  />
)
FormsDeliveryShow.propTypes = {
  initialValues: PropTypes.shape().isRequired
}

export default FormsDeliveryShow