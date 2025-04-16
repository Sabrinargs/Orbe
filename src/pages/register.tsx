import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import abstractImage from "../assets/img/abstract.jpg";
import { FaEye } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";
import ForgotPasswordModal from "./modal-forgot-password";
import abstractFull from "../assets/img/abstractFull.jpg"

const RegisterPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

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
                            className="rounded-lg p-2 bg-blue-950 w-70 text-amber-50"
                            placeholder="Email"
                        />

                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="rounded-lg p-2 bg-blue-950 text-amber-50"
                            placeholder="Password"
                        />

                        <label className="flex items-center gap-1">
                            <input
                                type="checkbox"
                                checked={showPassword}
                                onChange={() => setShowPassword(!showPassword)}
                                className="form-checkbox h-4 w-4 text-blue-200 bg-gray-700 border-2 border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-300 checked:bg-blue-500 checked:border-blue-500 transition-all duration-200"
                            />
                            <span>Show Password</span>
                        </label>

                        <Button variant="default">
                            <Link to="/login">
                                Login
                            </Link>
                        </Button>

                        <Button
                            variant="ghost"
                            type="button"
                            onClick={openModal}
                            className=""
                        >
                            Forgot Password?
                        </Button>

                    </div>
                </div>
            </div>

            <ForgotPasswordModal isOpen={isModalOpen} closeModal={closeModal} />
        </form>
    );
}

export default RegisterPage;
