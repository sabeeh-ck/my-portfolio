import { use, useEffect } from "react";

const useLockViewportHeight = () => {
    useEffect(() => {
        const lockHeight = () => {
            const vh = window.innerHeight * 0.01;

            document.documentElement.style.setProperty("--vh", `${vh}px`);
        };

        lockHeight();

        window.addEventListener("orientationchange", lockHeight);
        return () =>
            window.removeEventListener("orientationchange", lockHeight);
    }, []);
};

export default useLockViewportHeight;
