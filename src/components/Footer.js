import React from "react";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <>
      <footer>
        {/* footer detail */}
        <div className=" bg-[#436850] md:flex justify-around items-center p-4">
          {/* map */}
          <div className=" p-2 ">
            <div className="text-white mb-2">
              <i class="bi bi-geo-fill"></i>
              <span className=" font-semibold ml-2 lg:text-xl">LOCATION</span>
            </div>
            <iframe
              className="border rounded-2xl p-1 !border-[#A8CD9F] h-[10rem] w-[11rem] lg:h-[200px] lg:w-[290px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3409.1816822330256!2d75.58167437434592!3d31.298723258061532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5b995fbbb599%3A0xc52374a6e91e4acf!2sThe%20Veda%20Vibe%20Ayurvedic%20Clinic%20%26%20Panchakarma%20Centre!5e0!3m2!1sen!2sin!4v1711777800898!5m2!1sen!2sin"
              title="Google Map"
              width="290"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {/* contact */}
          <div>
            {/* heading */}
            <div className="text-white mb-2 mt-4">
              <i class="bi bi-arrows-collapse"></i>
              <span className=" font-semibold ml-2 lg:text-xl">CONTACT</span>
            </div>
            {/* contact details */}
            <div className="border-t-2 border-b-2 !border-[#A8CD9F] h-[12rem] rounded-2xl p-1">
              {/* gmail */}
              <div className="text-white p-1 md:text-xl">
                <i class="bi bi-envelope-arrow-down-fill"></i>
                <span> : Thevedavibe@gmail.com </span>
              </div>
              {/* phone number */}
              <div className="text-white p-2 md:text-xl">
                <i class="bi bi-phone-vibrate-fill"></i>
                <span> : +9191156-61715 </span>
              </div>
              {/* social media */}
              <div className="text-white p-2 flex gap-2 justify-around text-2xl">
                <a
                  class="linkOfSocial"
                  href="https://instagram.com/veda_vibe_?igshid=YmMyMTA2M2Y="
                >
                  <i class="bi bi-instagram"></i>
                </a>
                <a
                  class="linkOfSocial"
                  href="https://www.facebook.com/vedavibeayurveda?mibextid=LQQJ4d"
                >
                  <i class="bi bi-facebook"></i>
                </a>
                <a
                  class="linkOfSocial"
                  href="https://www.youtube.com/@thevedavibe"
                >
                  <i class="bi bi-youtube"></i>
                </a>
              </div>
            </div>
          </div>
          {/* about us */}
          <div>
            <div className="text-white mb-2 mt-4">
              <i class="bi bi-file-earmark-person-fill"></i>
              <span className=" font-semibold ml-2 md:text-xl">ABOUT US</span>
            </div>
            <div className="text-white border-t-2 border-b-2 !border-[#A8CD9F]  rounded-2xl p-2 max-w-xs break-words">
              <p className="md:text-[0.93rem]">
                "At Veda Vibe, we embrace the ancient wisdom of Ayurveda,
                offering holistic therapies and authentic products crafted to
                rejuvenate mind, body, and spirit.Our mission is to harmonize
                wellness through time-honored practices and natural remedies,
                guiding you on a journey towards balanced living and inner
                vitality."
              </p>
            </div>
          </div>
        </div>
        {/* copyright reserved: */}
        <div className="text-center text-md bg-[#A8CD9F] text-black">
          <i class="bi bi-c-circle"></i>
          <span> {currentYear} vedavibe. All rights reserved. </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
