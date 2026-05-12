import { useEffect, useState } from "react";

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollY = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      const percent = height > 0 ? Math.min(100, (scrollY / height) * 100) : 0;
      setProgress(percent);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-75"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default ProgressBar;
