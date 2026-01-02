function LoginPage() {
  return (
    <>
      {/* container */}
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT SECTION */}
          <div className="text-center md:text-left">
            <h1 className="text-blue-600 text-5xl font-bold mb-4">facebook</h1>
            <p className="text-2xl text-gray-800">
              Facebook helps you connect and share with the people in your life.
            </p>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm  p-6">
              {/* form goes here */}
              <div className="bg-white rounded-lg shadow-lg">
                <form>
                  <input className="w-full" type="email" />
                  <input className="w-full" type="password" />
                  <button>Login</button>
                </form>
                <button>Forgotten Password?</button>
                <button>Create New Account</button>
              </div>
              <p>Create a Page for a celebrity, brand or business.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
