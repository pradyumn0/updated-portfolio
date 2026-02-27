export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-md w-full text-center">
        
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-3">
          Thank You!
        </h1>

        {/* Message */}
        <p className="text-gray-600 mb-6">
          Your submission has been received successfully.  
          We’ll get back to you shortly.
        </p>

        {/* Back to Home Button */}
        <a
          href="/"
          className="inline-block bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition duration-300"
        >
          Back to Home
        </a>

      </div>
    </div>
  );
}