import React from 'react'

const Login = () => {
	return (
		<div className="container px-5 my-5">
			<form id="contactForm" data-sb-form-api-token="API_TOKEN">
				<div className="form-floating mb-3">
					<input
						className="form-control"
						id="emailAddress"
						type="email"
						placeholder="Email Address"
						data-sb-validations="required,email"
					/>
					<label for="emailAddress">Email Address</label>
					<div
						className="invalid-feedback"
						data-sb-feedback="emailAddress:required">
						Email Address is required.
					</div>
					<div className="invalid-feedback" data-sb-feedback="emailAddress:email">
						Email Address Email is not valid.
					</div>
				</div>
				<div className="form-floating mb-3">
					<input
						className="form-control"
						id="password"
						type="text"
						placeholder="Password"
						data-sb-validations="required"
					/>
					<label for="password">Password</label>
					<div className="invalid-feedback" data-sb-feedback="password:required">
						Password is required.
					</div>
				</div>
				<div className="d-none" id="submitSuccessMessage">
					<div className="text-center mb-3">
						<div className="fw-bolder">Form submission successful!</div>
						<p>To activate this form, sign up at</p>
						<a href="https://startbootstrap.com/solution/contact-forms">
							https://startbootstrap.com/solution/contact-forms
						</a>
					</div>
				</div>
				<div className="d-none" id="submitErrorMessage">
					<div className="text-center text-danger mb-3">Error sending message!</div>
				</div>
				<div className="d-grid">
					<button
						className="btn btn-primary btn-lg disabled"
						id="submitButton"
						type="submit">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}

export default Login
