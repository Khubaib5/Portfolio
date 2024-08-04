import { useEffect } from 'react';

const BookingCalendar = () => {
  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://cdn.lemcal.com/lemcal-integrations.min.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = "https://cdn.lemcal.com/lemcal-integrations.min.js";
      script.defer = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden py-6">
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-screen-sm">
        <div
          className="lemcal-embed-booking-calendar w-full max-w-[300px] box-border"
          data-user="usr_sSRqik9jzL6zxN4uZ"
          data-meeting-type="met_yAvvNAGN9rrtDoC96"
        ></div>
        
      </div>
      <script src="https://cdn.lemcal.com/lemcal-integrations.min.js" defer></script>
    </div>
  );
};

export default BookingCalendar;
