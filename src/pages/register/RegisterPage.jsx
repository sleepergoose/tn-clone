import { useState } from 'react';
import AuthService from '../../services/auth.service.jsx';

const RegisterPage = () => {
  const authService = new AuthService();

  const [requestState, setRequestState] = useState({
    isPending: false,
    error: null,
  });

  const [form, setForm] = useState({
    name: { value: '' },
    email: { value: '' },
    password: { value: '' },
  });

  const handleChange = (e) => {
    const _form = { ...form };
    _form[e.target.name].value = e.target.value;
    setForm(_form);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setRequestState({
      isPending: true,
      error: null,
    });

    try {
      if (form && form.name.value && form.email.value && form.password.value) {
        await authService.signUp({
          name: form.name.value,
          email: form.email.value,
          password: form.password.value,
        });

        setRequestState({
          isPending: false,
          error: null,
        });

        setForm({
          name: { value: '' },
          email: { value: '' },
          password: { value: '' },
        });
      }
    } catch (error) {
      setRequestState({
        isPending: false,
        error: error,
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-50 p-3 d-flex flex-column align-items-center shadow" style={{
        border: '1px solid #48484830',
        borderRadius: '10px',
        margin: '25px auto'
      }}>
        <h3>Add Product Form</h3>

        <div className="m-3 w-100">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" name="name" className="form-control" placeholder="Name"
            value={form.name.value} onChange={(e) => handleChange(e)} />
        </div>

        <div className="m-3 w-100">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" name="email" className="form-control " placeholder="Email Address"
            value={form.email.value} onChange={(e) => handleChange(e)} />
        </div>

        <div className="m-3 w-100">
          <label htmlFor="password" className="form-label">Password:</label>
          <input type="password" name="password" className="form-control" placeholder="Password"
            value={form.password.value} onChange={(e) => handleChange(e)} />
        </div>

        {requestState.isPending && <button type="submit" disabled className="m-3 w-50 btn btn-primary">Registration...</button>}
        {!requestState.isPending && <button type="submit" className="m-3 w-50 btn btn-primary">Register</button>}
      </form>

      {requestState.error && (
        <div className="error-message">
          <h4>An error occurred during registration flow.</h4>
          <p>{requestState.error}</p>
        </div>
      )}
    </>
  );
};

export default RegisterPage;