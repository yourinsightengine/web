import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "read");
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-neutral-900 text-white p-4 shadow-lg">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm mb-4 md:mb-0 text-center">
          This website does not use cookies or track your personal data.
        </div>
        <button
          onClick={acceptCookies}
          className="flex items-center gap-x-2 cursor-pointer bg-neutral-600 text-white px-3 py-2 rounded-full hover:bg-neutral-700 transition-colors text-sm"
        >
          <X size={16} />
          Close
        </button>
      </div>
    </div>
  );
}
