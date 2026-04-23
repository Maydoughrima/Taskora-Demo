import Button from "../../components/UI/Button";
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import taskora from "../../assets/taskora.png";

export default function Register() {
  return (
    <div className="relative min-h-screen w-full bg-[var(--primary)] flex items-center justify-center p-4 overflow-hidden">

      {/* GLOW */}
      <div className="absolute w-[700px] h-[700px] bg-gradient-to-r from-[var(--cta)]/30 via-purple-500/20 to-blue-500/30 blur-[120px] opacity-40 rounded-full -z-10" />

      <div className="w-full max-w-7xl bg-[var(--secondary)] rounded-2xl border p-5 md:p-6 lg:p-8 flex flex-col lg:flex-row gap-6 lg:gap-10 min-h-[600px]">

        {/* LEFT */}
        <div className="flex flex-col flex-1 justify-center max-w-md mx-auto lg:mx-0 gap-8">

          <div>
            <p className="text-[var(--text)] font-heading text-3xl">
              Taskora
            </p>

            <p className="text-[var(--text)] font-body text-xl mt-4">
              Create your account
            </p>

            <p className="text-[var(--secondary400)] text-sm mt-1 font-body">
              Start managing your workflow today.
            </p>
          </div>

          {/* FORM */}
          <div className="flex flex-col gap-3">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-[var(--primary)] border rounded-lg px-4 h-11 text-sm outline-none focus:border-[var(--cta)]"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full bg-[var(--primary)] border rounded-lg px-4 h-11 text-sm outline-none focus:border-[var(--cta)]"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full bg-[var(--primary)] border rounded-lg px-4 h-11 text-sm outline-none focus:border-[var(--cta)]"
            />

            <Button className="w-full mt-2 h-11" to="/login">
              Create Account
            </Button>

            <p className="text-xs text-[var(--secondary400)] text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-[var(--cta)]">
                Login
              </Link>
            </p>
          </div>
        </div>

        {/* RIGHT (reuse same image section) */}
        <div className="flex-1 relative rounded-2xl overflow-hidden min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
          
          <img src={taskora} className="w-full h-full object-cover" />

          <div className="absolute inset-0 bg-black/3" />

          <div className="absolute bottom-5 left-5 right-5 backdrop-blur-xl bg-black/50 border border-white/10 rounded-xl p-4 flex items-center justify-between">
            
            <div>
              <p className="text-xs text-white/70">Start Now</p>
              <p className="text-sm text-white">
                Your productivity upgrade begins here
              </p>
            </div>

            <button className="p-2 bg-white/20 rounded-full">
              <IoArrowForward className="text-white" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}