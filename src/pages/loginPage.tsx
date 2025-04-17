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
        <form className="grid place-items-center h-screen">
            <div className="fixed inset-0 -z-10">
                <img className="w-full h-full object-cover opacity-50" src={abstractFull} alt="" />a
            </div>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&display=swap');
                `}
            </style>

            <div className=" bg-blue-400 shadow-black dark:shadow-blue-400 shadow-2xl rounded-lg w-250 h-150 gap-1 absolute">

                <div className="flex flex-row">
                    <div className="relative">
                        <img className="w-180 h-150 rounded-l-lg" src={abstractImage} alt="" />

                        <div className="absolute top-4 left-4 text-white">
                            <h1 className="text-6xl font-bold" style={{ fontFamily: 'Merriweather, serif' }}>Orbe</h1>
                            <h2 className="text-3xl text-blue-950">Sua visão, nossa missão.</h2>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center gap-4 p-4">

                        <h1 className="font-serif text-5xl font-bold flex justify-center place-items-baseline pb-10" style={{ fontFamily: 'Merriweather, serif' }}>Orbe</h1>

                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="rounded-lg p-3 bg-blue-950 w-70 text-amber-50"
                            placeholder="Email"
                        />

                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="rounded-lg p-3 pr-20 bg-blue-950 text-amber-50 w-full "
                                placeholder="Password"
                            />

                            {password.length > 0 && (
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-white hover:underline"
                                >
                                    {showPassword ? 'Ocultar' : 'Mostrar'}
                                </button>
                            )}
                        </div>

                        <Button variant="default">
                            <Link to="/login">
                                Login
                            </Link>
                        </Button>

                        <Button
                            variant="ghost"
                            type="button"
                            onClick={() => handleModal("forgotPassword")}
                            className=""
                        >
                            Forgot Password?
                        </Button>

                        <div className="flex items-center w-full my-4">
                            <div className="flex-grow border-t border-amber-50"></div>
                            <span className="mx-4 text-amber-50 text-sm">Or</span>
                            <div className="flex-grow border-t border-amber-50"></div>
                        </div>

                        <Button
                            variant="ghost"
                            type="button"
                            onClick={() => handleModal("register")}
                            className=""
                        >
                            Sign up
                        </Button>

                    </div>
                </div>
            </div>

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
