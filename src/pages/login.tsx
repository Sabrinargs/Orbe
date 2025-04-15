import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <form>
            <div>
                <h1>
                    Login
                </h1>
                <Button variant="vini">
                    <Link to="/register">
                        Register
                    </Link>
                </Button>
            </div>
        </form>
    );
}

export default LoginPage;