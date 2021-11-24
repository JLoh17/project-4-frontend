import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'

const RenderForm = ({ errors, touched, isSubmitting }) => (
  <Form>

    <div className="form-group">
      <label htmlFor="email">Email</label>
      <Field
        id="email"
        placeholder="Enter your registered email address"
        className={`form-control ${(errors.email && touched.email ? ' is-invalid' : '')}`}
        name="email"
        type="text"
      />
      <ErrorMessage component="div" className="invalid-feedback" name="email" />
    </div>

    <div className="form-group">
      <label htmlFor="passwordHash">Password</label>
      <Field
        id="passwordHash"
        placeholder="Enter password"
        className={`form-control ${(errors.passwordHash && touched.passwordHash ? ' is-invalid' : '')}`}
        name="passwordHash"
        type="password"
      />
      <ErrorMessage component="div" className="invalid-feedback" name="passwordHash" />
    </div>

    <button className="btn btn-success" type="submit" disabled={isSubmitting}>REGISTER</button>
  </Form>
)
RenderForm.propTypes = {
  errors: PropTypes.shape().isRequired,
  touched: PropTypes.shape().isRequired,
  isSubmitting: PropTypes.bool.isRequired
}

const authLoginSchema = yup.object().shape({
  email: yup.string().email().required('Field is required'),
  passwordHash: yup.string().min(6).required('Field is required')
})

const FormsAuthLogin = ({ onSubmit }) => (
  <Formik
    initialValues={{
      email: '',
      passwordHash: ''
    }}
    validationSchema={authLoginSchema}
    onSubmit={onSubmit}
    component={RenderForm}
  />
)
FormsAuthLogin.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default FormsAuthLogin
