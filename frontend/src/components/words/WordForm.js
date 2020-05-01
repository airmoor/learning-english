import React from 'react';
import { Field, reduxForm } from 'redux-form';

class WordForm extends React.Component {
  renderField = ({ input, label, meta: { touched, error } }) => {
    return (
      <div className={`inline field ${touched && error ? 'error' : ''}`}>
        <label className='ui center aligned header'>{label}</label>
        <div>
          <input {...input} autoComplete='off' />
          {touched && error && (
            <span className='ui pointing red basic label'>{error}</span>
          )}
        </div>
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
    console.log(formValues)
  };

  render() {
    const btnText = `${this.props.initialValues ? 'Update' : 'Add'}`;
    return (
      <div className='ui segment'>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className='ui big form error'
        >
          <Field name='word' component={this.renderField} label='word in english'/>
          <Field name='transcription' component={this.renderField} label='transcription'/>
          <Field name='definitions' component={this.renderField} label='what is it'/>
          <Field name='translations' component={this.renderField} label='translation'/>
          <Field name='examples' component={this.renderField} label='examples'/>
          {/* <Field name='knowledge' component={this.renderField} label='knowledge'/> */}
          <button className='ui orange button'>{btnText}</button>
        </form>
      </div>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.word) {
    errors.word = 'Please enter at least 1 character';
  }

  return errors;
};

export default reduxForm({
  form: 'wordForm',
  touchOnBlur: false,
  validate
})(WordForm);
