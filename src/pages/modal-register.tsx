import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type ModalRegisterProps = {
    isOpen: boolean;
    closeModal: () => void;
};

const ModalRegister: React.FC<ModalRegisterProps> = ({ isOpen, closeModal }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match");
        } else {
            setError("");
            console.log("Registration submitted");
        }
    };


    return (
        <div className="absolute flex justify-start items-center overflow-hidden pl-172">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="register-modal"
                        initial={{ x: 30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 30, opacity: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 80,
                            damping: 12
                        }}
                        className="flex justify-center items-center bg-blue-400 shadow-2xl rounded-lg w-78 h-150 gap-1"
                    >

                        <div className="flex flex-col justify-center gap-3 p-10">

                            <div className="font-bold text-lg text-center"><h1>Create an account</h1></div>
                            <h2 className="text-center text-sm w-full px-1">Sign up to closely track your investments and make financial decisions with more confidence.</h2>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="rounded-lg p-3 bg-blue-950 w-70 text-amber-50"
                                placeholder="Full name"
                            />

                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="rounded-lg p-3 bg-blue-950 w-70 text-amber-50"
                                placeholder="Email or number"
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
                                        {showPassword ? 'Hide' : 'Show'}
                                    </button>
                                )}
                            </div>

                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="rounded-lg p-3 pr-20 bg-blue-950 text-amber-50 w-full "
                                    placeholder="Confirm Password"
                                />

                                {password.length > 0 && (
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-white hover:underline"
                                    >
                                        {showConfirmPassword ? 'Hide' : 'Show'}
                                    </button>
                                )}
                            </div>

                            <Button
                                variant="secondary"
                                type="button"
                                // onClick={}
                                className=""
                            >
                                Sign up
                            </Button>

                            <h2 className="text-center text-sm w-full px-1">By signing up, you agree to our Terms and Privacy Policy.</h2>

                        </div>

                        <Button
                            type="button"
                            variant="ghost"
                            onClick={closeModal}
                            className="flex justify-center items-center absolute bottom-4 right-4"
                        >
                            Back to login
                        </Button>

                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ModalRegister;