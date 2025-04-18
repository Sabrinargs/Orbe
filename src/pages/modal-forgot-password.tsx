import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type ModalForgotPassawordProps = {
    isOpen: boolean;
    closeModal: () => void;
};

const ForgotPasswordModal: React.FC<ModalForgotPassawordProps> = ({ isOpen, closeModal }) => {
    const [email, setEmail] = useState("");
    const [isSending, setIsSending] = useState(false);

    const handleSendLink = () => {
        setIsSending(true);
        setTimeout(() => {
            setIsSending(false);
            closeModal();
        }, 1000);
    };

    return (
        <div className="absolute flex justify-start items-center overflow-hidden pl-149">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="forgot-password"
                        initial={{ x: 30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 30, opacity: 0 }}
                        transition={{
                            type: "tween",  
                            stiffness: 80,
                            damping: 12
                        }}
                        className="flex justify-center items-center bg-blue-400 shadow-2xl rounded-lg w-99 h-150 gap-1 ">
                        <div className="flex flex-col justify-center items-center gap-3 p-10">
                            <h2 className="text-xl"></h2>

                            <div className="font-bold text-lg text-center"><h1>Having trouble signing in?</h1></div>
                            <h2 className="text-center text-sm w-full px-8">Enter your email or phone number and we'll send you a link to get back into your account.</h2>

                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="rounded-lg p-3 bg-blue-950 w-70 text-amber-50"
                                placeholder="Email or Number"
                            />

                            <Button
                                variant="secondary"
                                type="button"
                                onClick={handleSendLink}
                                className="w-70"
                            >
                                Send Link
                            </Button>

                            <Button
                                type="button"
                                variant="ghost"
                                onClick={closeModal}
                                className="flex justify-center items-center absolute bottom-4 right-4"
                            >
                                Back to login
                            </Button>
                        </div>
                    </motion.div >
                )}
            </AnimatePresence>
        </div>
    );
};

export default ForgotPasswordModal;
