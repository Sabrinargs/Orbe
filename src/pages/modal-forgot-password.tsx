import React from 'react';
import { Button } from "@/components/ui/button";

type ForgotPasswordModalProps = {
    isOpen: boolean;
    closeModal: () => void;
};

const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({ isOpen, closeModal }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl"></h2>

                <Button
                    variant="default"
                    onClick={closeModal}
                >
                    Close
                </Button>
            </div>
        </div>
    );
};

export default ForgotPasswordModal;
