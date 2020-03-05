import React from 'react';
import { connect } from 'react-redux';
import { thunkLogin } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal} from '../../actions/modal_actions';

const mSTP = (state, ownProps) => ({
    errors: state.session.errors,
    formType: 'login'
})

const mDTP = dispatch => ({
    processForm: (user) => dispatch(thunkLogin(user)),
    otherForm: (
        <a onClick={() => dispatch(openModal('signup'))} className='change-form-link'>
            Create an account?
        </a>
    ),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(SessionForm);