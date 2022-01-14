export default function Register() {
    return (
<div className="">
      <img src={test} className="w-full h-screen absolute z-[-1] " />
      <div className="flex justify-center items-center w-full h-screen">


      <div className="w-full max-w-md p-8 space-y-3 rounded-xl  bg-[#37393E]">
        <h1 className="text-2xl font-bold text-center text-white">Login</h1>
        <form
          novalidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label for="username" className="block text-white">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="w-full px-4 py-3 rounded-md border-[1px] border-black  bg-[#37393E]"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="password" className="block text-white">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border-[1px] border-black  bg-[#37393E]"
            />
            <div className="flex justify-end text-xs text-white">
              <a href="#">Forgot Password?</a>
            </div>
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-white bg-[#5765F2]">
           Login
          </button>
        </form>
        
      </div>
      </div>
    </div>
    )
}
