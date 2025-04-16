import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type ForgotPasswordModalProps = {
    isOpen: boolean;
    closeModal: () => void;
};

const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({ isOpen, closeModal }) => {
    const [email, setEmail] = useState("");
    const [sendLink, setSendLink] = useState();

    return (
        <div className="flex justify-start items-center pl-95">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="forgot-password"
                        initial={{ x: 30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 30, opacity: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 80,
                            damping: 12
                        }}
                        className="flex justify-center items-center bg-blue-400 shadow-2xl rounded-lg w-78 h-150 gap-1 absolute">
                        <div className="flex flex-col justify-center gap-3 p-10">
                            <h2 className="text-xl"></h2>

                            <div className="font-bold text-lg text-center"><h1>Having trouble signing in?</h1></div>
                            <h2 className="text-center text-sm w-full px-8">Enter your email or phone number and we'll send you a link to get back into your account.</h2>

                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="rounded-lg p-2 bg-blue-950 w-70 text-amber-50"
                                placeholder="Email or Number"
                            />
                            
                            <Button
                                variant="secondary"
                                type="button"
                                onClick={sendLink}
                                className=""
                            >
                                Send Link
                            </Button>

                            <Button
                                variant="default"
                                onClick={closeModal}
                                className="absolute bottom-4 right-4"
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
