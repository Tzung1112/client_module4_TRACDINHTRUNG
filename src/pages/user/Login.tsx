import React, { useState, memo } from 'react';
import api from '@/services/api';
import './login.scss';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { useTranslation } from 'react-i18next';

export default function Login() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [registrationMessage, setRegistrationMessage] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const validatePassword = (password: any) => {
    0

    if (password.length < 6) {
      setPasswordError(t("validatePassword"));
      return false;
    } else {
      setPasswordError('');
      return true;
    }
  };

  const validateUserName = (userName: any) => {
    if (userName.length < 3) {
      setUserNameError(t("validateUserName"));
      return false;
    } else {
      setUserNameError('');
      return true;
    }
  };

  const validateFirstName = (firstName: any) => {
    if (firstName.length === 0) {
      setFirstNameError(t("validateFirstName"));
      return false;
    } else {
      setFirstNameError('');
      return true;
    }
  };

  const validateLastName = (lastName: any) => {
    if (lastName.length === 0) {
      setLastNameError(t("validateLastName"));
      return false;
    } else {
      setLastNameError('');
      return true;
    }
  };

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);

    // const password = e.target.password.value;

    // if (!validatePassword(password) || !validateUserName(e.target.userName.value) || !validateEmail(e.target.email.value) || !validateFirstName(e.target.firstName.value) || !validateLastName(e.target.lastName.value)) {
    //   setLoading(false);
    //   return;
    // }
    const data = {
      userName: e.target.userName.value,
      password: e.target.password.value,
    };
    // try {
    //     const result = await api.users.register(data);

    //     setLoading(false);
    //     if (result.status !== 200) {
    //         message.warning(result.data.message);
    //     } else {
    //         message.success(result.data !== undefined ? result.data.message : result.message);
    //     }
    // } catch (error) {
    //     message.error('An error occurred during registration. Please try again.');
    //     setLoading(false);
    // }
    await api.userApi.login(data)
      .then(res => {
        setLoading(false);
        if (res.status != 200) {

          message.warning(res.data.message);
        } else {

          // message.success(res.data !== undefined ? res.data.message : res.message);
          message.success("login successfully")
          localStorage.setItem("token", res.data.token)
        }
      })
      .catch(err => {
        console.log("loi");
        message.error('An error occurred during registration. Please try again.');
        setLoading(false);
      })
  };

  return (
    <div className="form-login">
      <img alt="" className="avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsEn7WxlkbYXl22nDWEU_jrEYlXtueC3aQdg&usqp=CAU" />
      <h2>Login Form</h2>
      <form action="" onSubmit={handleFormSubmit}>
        <p> User Name</p>
        <input placeholder="Enter User Name" type="text" name='userName'/>
        <p>Password</p>
        <input placeholder="Enter Password" type="password" name='password' />
        <input className="custom-btn btn-4" type="submit" defaultValue="Sign in" />
        <p>
          <input type="checkbox" />
          Remember Me
        </p>
      </form>
    </div>

  );
}

