import React from 'react';
import { connect } from 'react-redux';
import { thunkLogin, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal} from '../../actions/modal_actions'

const mSTP = (state, ownProps) => {
    return (
        {errors: state.errors.sessionErrors,
        formType: 'login'}
    )
}

const mDTP = dispatch => ({
    processForm: (user) => dispatch(thunkLogin(user)),
    otherForm: (
        <a onClick={() => dispatch(openModal('signup'))} className='change-form-link '>
            Create an account?
        </a>
    ),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors()),
    loginDemo: () => dispatch(thunkLogin({email: 'demo@email.com', password:'hunter12'}))
})

export default connect(mSTP, mDTP)(SessionForm);