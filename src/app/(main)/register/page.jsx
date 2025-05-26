import Link from 'next/link';

const page = () => {
  return (
    <>

      <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
        <div className="card shadow-lg" style={{ width: '100%', maxWidth: '450px' }}>
          {/* Header */}
          <div className="card-header bg-primary text-white text-center py-3">
            <h3 style={{color: "white"}} className="mb-0">
              Create Account
            </h3>
            <p style={{color: "white"}} className="mb-0 opacity-75">Join our community today</p>
          </div>

          {/* Registration Form */}
          <div className="card-body p-4">
            <form>
              {/* Name Field */}
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">
                  <i className="fas fa-user me-2"></i>Full Name
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-id-card"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  <i className="fas fa-envelope me-2"></i>Email Address
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-at"></i>
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="example@domain.com"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  <i className="fas fa-key me-2"></i>Password
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="••••••••"
                    required
                    minLength={8}
                  />
                  {/* <button 
                    className="btn p-2" 
                    style={{borderRadius: "4px"}}
                    type="button"
                    id="togglePassword"
                  >
                    <i className="fas fa-eye"></i>
                  </button> */}
                </div>
                <div className="form-text">Minimum 8 characters</div>
              </div>

              {/* Confirm Password Field */}
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  <i className="fas fa-key me-2"></i>Confirm Password
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    placeholder="••••••••"
                    required
                    minLength={8}
                  />
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="agreeTerms"
                  required
                />
                <label className="form-check-label" htmlFor="agreeTerms">
                  I agree to the <Link href="/terms" className="text-decoration-none">Terms and Conditions</Link>
                </label>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary w-100 mb-3">
                <i className="fas fa-user-plus me-2"></i>Register
              </button>
            </form>
          </div>

          {/* Footer */}
          <div className="card-footer text-center py-3 bg-light">
            <p className="mb-0">
              Already have an account?{' '}
              <Link href="/login" className="text-decoration-none">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      
      {/* Password Toggle Script */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.getElementById('togglePassword').addEventListener('click', function() {
            const password = document.getElementById('password');
            const icon = this.querySelector('i');
            if (password.type === 'password') {
              password.type = 'text';
              icon.classList.replace('fa-eye', 'fa-eye-slash');
            } else {
              password.type = 'password';
              icon.classList.replace('fa-eye-slash', 'fa-eye');
            }
          });
        `
      }}></script>
    </>
  );
};

export default page;
