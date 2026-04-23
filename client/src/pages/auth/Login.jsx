import Button from "../../components/UI/Button";
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import taskora from "../../assets/taskora.png";
import dummy1 from "../../assets/test-img-1.png"
import dummy2 from "../../assets/test-img-2.png"
import dummy3 from "../../assets/test-img-3.png"

export default function Login() {
  return (
    <div className="relative min-h-screen w-full bg-[var(--primary)] flex items-center justify-center p-4 overflow-hidden">

      {/* 🔥 OUTER GRADIENT GLOW */}
      <div className="absolute w-[700px] h-[700px] bg-gradient-to-r from-[var(--cta)]/30 via-purple-500/20 to-blue-500/30 blur-[120px] opacity-40 rounded-full -z-10" />

      {/* MAIN CARD */}
      <div className="w-full max-w-7xl bg-[var(--secondary)] rounded-2xl border p-5 md:p-6 lg:p-8 flex flex-col lg:flex-row gap-6 lg:gap-10 min-h-[600px]">

        {/* ================= LEFT SIDE ================= */}
        <div className="flex flex-col flex-1 justify-between max-w-full lg:max-w-md xl:max-w-lg mx-auto lg:mx-0">
          
          <div className="flex flex-col gap-8">

            {/* HEADER */}
            <div>
              <p className="text-[var(--text)] font-heading text-3xl">
                Taskora
              </p>

              <p className="text-[var(--text)] font-body text-xl mt-4">
                Welcome to Taskora
              </p>

              <p className="text-[var(--secondary400)] text-sm mt-1 font-body">
                Manage your tasks, clients, and projects — all in one place.
              </p>
            </div>

            {/* FORM */}
            <div className="flex flex-col gap-3">

              <input
                type="email"
                placeholder="Email"
                className="w-full bg-[var(--primary)] border rounded-lg px-4 h-11 text-sm outline-none focus:border-[var(--cta)] font-body"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full bg-[var(--primary)] border rounded-lg px-4 h-11 text-sm outline-none focus:border-[var(--cta)] font-body"
              />

              <Button className="w-full mt-2 h-11" to="/">
                Login
              </Button>

              <Button variant="secondary" className="w-full h-11">
                Sign in with Google
              </Button>

              <p className="text-xs text-[var(--secondary400)] text-center font-body">
                Don’t have an account?{" "}
                <Link to="/register" className="text-[var(--cta)]">
                  Sign up
                </Link>
              </p>
            </div>
          </div>

          {/* USERS */}
          <div className="hidden md:flex items-center justify-between mt-6 border rounded-xl p-4">
            <div className="flex items-center gap-3">
              
              <div className="flex -space-x-2">
                <img src={dummy1} className="w-7 h-7 rounded-full border object-cover" />
                <img src={dummy2} className="w-7 h-7 rounded-full border object-cover" />
                <img src={dummy3} className="w-7 h-7 rounded-full border object-cover" />
              </div>

              <div>
                <p className="text-sm font-medium text-[var(--text)] font-body">
                  Join with 20k+ Users
                </p>
                <p className="text-xs text-[var(--secondary400)] font-body">
                  Let’s grow together
                </p>
              </div>
            </div>

            <button className="p-2 rounded-full border hover:bg-[var(--primary)] transition">
              <IoArrowForward />
            </button>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex-1 relative rounded-2xl overflow-hidden min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
          
          <img
            src={taskora}
            alt="preview"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/3" />

          {/* INNER GLOW */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-[120px] bg-gradient-to-r from-[var(--cta)]/30 via-purple-500/30 to-blue-500/30 blur-3xl opacity-60" />

          {/* GLASS CARD */}
          <div className="absolute bottom-5 left-5 right-5 backdrop-blur-xl bg-black/50 border border-white/10 rounded-xl p-4 flex items-center justify-between shadow-xl">
            
            <div>
              <p className="text-xs text-white/70 uppercase tracking-wide font-body">
                Creating
              </p>
              <p className="text-sm text-white font-medium font-body">
                Build better workflows with Taskora
              </p>
            </div>

            <button className="p-2 bg-white/20 hover:bg-white/30 rounded-full">
              <IoArrowForward className="text-white" />
            </button>
          </div>
        </div>

        {/* MOBILE USERS */}
        <div className="flex md:hidden items-center justify-between border rounded-xl p-3">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <img src={dummy1} className="w-6 h-6 rounded-full border object-cover" />
              <img src={dummy2} className="w-6 h-6 rounded-full border object-cover" />
              <img src={dummy3} className="w-6 h-6 rounded-full border object-cover" />
            </div>

            <div>
              <p className="text-sm font-medium text-[var(--text)] font-body">
                Join with 20k+ Users
              </p>
              <p className="text-xs text-[var(--secondary400)] font-body">
                Let’s grow together
              </p>
            </div>
          </div>

          <button className="p-2 rounded-full border">
            <IoArrowForward />
          </button>
        </div>

      </div>
    </div>
  );
}