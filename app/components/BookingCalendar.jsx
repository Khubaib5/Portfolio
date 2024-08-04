// components/BookingCalendar.js
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
    <div className="flex justify-around items-center m-5" id='booking'>
      <div
        className="lemcal-embed-booking-calendar"
        data-user="usr_sSRqik9jzL6zxN4uZ"
        data-meeting-type="met_yAvvNAGN9rrtDoC96"
      ></div>
      <div
        className="lemcal-embed-booking-calendar"
        data-user="usr_sSRqik9jzL6zxN4uZ"
        data-meeting-type="met_kigosxKks4zsfocAP"
      ></div>
      <script src="https://cdn.lemcal.com/lemcal-integrations.min.js" defer></script>
    </div>
  );
};

export default BookingCalendar;
