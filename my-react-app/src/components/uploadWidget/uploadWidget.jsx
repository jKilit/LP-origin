import { createContext, useEffect, useState } from "react";

// Create a context to manage the script loading state
const CloudinaryScriptContext = createContext();

function CloudinaryUploadWidget({ uwConfig, setState, text }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const uwScript = document.getElementById("uw");
    if (!uwScript) {
      const script = document.createElement("script");
      script.setAttribute("async", "");
      script.setAttribute("id", "uw");
      script.src = "https://upload-widget.cloudinary.com/global/all.js";
      script.addEventListener("load", () => setLoaded(true));
      document.body.appendChild(script);
    } else {
      setLoaded(true);
    }
  }, []);

  const initializeCloudinaryWidget = () => {
    if (loaded) {
      const myWidget = window.cloudinary.createUploadWidget(
        uwConfig,
        (error, result) => {
          if (error) {
            console.error("Error during Cloudinary upload:", error);
          } else if (result.event === "success") {
            console.log("Upload success:", result.info);
            setState(result.info.secure_url);
          } else {
            console.log("Upload result:", result);
          }
        }
      );

      myWidget.open();
    }
  };

  return (
    <CloudinaryScriptContext.Provider value={{ loaded }}>
      <button
        className="cloudinary-button"
        onClick={initializeCloudinaryWidget}
      >
        {text}
      </button>
    </CloudinaryScriptContext.Provider>
  );
}

export default CloudinaryUploadWidget;
export { CloudinaryScriptContext };
