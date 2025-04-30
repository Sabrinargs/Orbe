import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import abstractImage from "../assets/img/abstract.jpg";
import { FaEye } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";
import ModalForgotPassword from "./modal-forgot-password";
import abstractFull from "../assets/img/abstractFull.jpg";
import ModalRegister from "./modal-register";
import ForgotPasswordModal from "./modal-forgot-password";
import video from "../assets/img/abstractvideo0.mp4";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeModal, setActiveModal] = useState<"forgotPassword" | "register" | null>(null);

    const handleModal = (modal: "forgotPassword" | "register" | null) => {
        setActiveModal(modal);
    };

    return (
        <form className="grid place-items-center min-h-screen relative">
        {/* Fundo fixo */}
        <div className="fixed inset-0 -z-10">
          <img className="w-full h-full object-cover opacity-50" src={abstractFull} alt="" />
        </div>
      
        {/* Quadrado azul claro com layout responsivo */}
        <div className="bg-blue-400 shadow-black dark:shadow-blue-400 shadow-2xl rounded-lg w-full max-w-[1000px] sm:h-[600px] flex flex-col sm:flex-row overflow-hidden">
      
          {/* VÍDEO: aparece apenas em telas maiores */}
          <div className="hidden sm:block relative w-[600px] h-[600px] flex-shrink-0">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover rounded-l-lg">
              <source src={video} type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
            <div className="absolute top-4 left-4 text-white">
              <h1 className="text-6xl font-bold" style={{ fontFamily: 'Merriweather, serif' }}>Orbe</h1>
              <h2 className="text-3xl text-amber-50">Sua visão, nossa missão.</h2>
            </div>
          </div>
      
          {/* FORMULÁRIO */}
          <div className="flex flex-col justify-center gap-4 w-full px-6 py-10 sm:py-0 sm:px-10">
            <h1 className="font-serif text-4xl font-bold text-center pb-6" style={{ fontFamily: 'Merriweather, serif' }}>Orbe</h1>
      
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-lg p-3 bg-blue-950 text-white"
              placeholder="Email or Number"
            />
      
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-lg p-3 pr-20 bg-blue-950 text-white w-full"
                placeholder="Password"
              />
              {password.length > 0 && (
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-white"
                >
                  {showPassword ? 'Ocultar' : 'Mostrar'}
                </button>
              )}
            </div>
      
            <Button variant="default">
              <Link to="/login">Login</Link>
            </Button>
      
            <Button variant="ghost" type="button" onClick={() => handleModal("forgotPassword")}>
              Forgot Password?
            </Button>
      
            <div className="flex items-center w-full my-4">
              <div className="flex-grow border-t border-white"></div>
              <span className="mx-4 text-white text-sm">Or</span>
              <div className="flex-grow border-t border-white"></div>
            </div>
      
            <Button variant="ghost" type="button" onClick={() => handleModal("register")}>
              Sign up
            </Button>
          </div>
        </div>
      
        {/* Modais */}
        <ModalForgotPassword
          isOpen={activeModal === "forgotPassword"}
          closeModal={() => handleModal(null)}
        />
        <ModalRegister
          isOpen={activeModal === "register"}
          closeModal={() => handleModal(null)}
        />
      </form>
      
    );
}

export default LoginPage;
