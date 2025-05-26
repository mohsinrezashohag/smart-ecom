import Link from 'next/link';

const page = () => {
  return (
    <>

      <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
        <div className="card shadow-lg" style={{ width: '100%', maxWidth: '400px' }}>
          {/* Header */}
          <div className="card-header bg-primary text-white text-center py-3">
            <h3 style={{color: "white"}} className="mb-0">
              Welcome Back
            </h3>
            <p style={{color: "white"}} className="mb-0 opacity-75">Sign in to your account</p>
          </div>

          {/* Login Form */}
          <div className="card-body p-4">
            <form>
              {/* Email Field */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  <i className="fas fa-envelope me-2"></i>Email Address
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-user"></i>
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
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="mb-3 d-flex justify-content-between align-items-center">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="rememberMe"
                  />
                  <label className="form-check-label" htmlFor="rememberMe">
                    Remember me
                  </label>
                </div>
                <Link href="/forgot-password" className="text-decoration-none">
                  Forgot password?
                </Link>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary w-100 mb-3">
                <i className="fas fa-sign-in-alt me-2"></i>Sign In
              </button>
            </form>
          </div>

          {/* Footer */}
          <div className="card-footer text-center py-3 bg-light">
            <p className="mb-0">
              Don't have an account?{' '}
              <Link href="/register" className="text-decoration-none">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>

    </>
  );
};

export default page;