import {useSelector} from "react-redux";
import {useState, useEffect} from "react";

const LoadingBar=()=>{
  const [visible, setVisible]=useState(false);
  const [progress, setProgress]=useState(0);
  const loading=useSelector((state) => state.loadingBar);

  useEffect(() => {
    if (loading > 0) {
      setVisible(true);
      setProgress(Math.min(99, progress + (100 - progress) / 2));
    } else if (loading === 0 && visible) {
      setProgress(100);
      const timer=setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 400);
      return ()=> clearTimeout(timer);
    }
  }, [loading, visible, progress]);

  if (!visible) return null;

  return(
    <div className="loading-bar-container">
      <div className="loading-bar" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default LoadingBar;