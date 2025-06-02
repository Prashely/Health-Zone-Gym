import React from "react";
import Em from "../../assets/images/icons/ema.svg";
import Postal from "../../assets/images/icons/postal.svg";
import T from "../../assets/images/icons/t.svg";
import W from "../../assets/images/icons/w.svg";

const ContactUs = () => {
  const contactDetails = [
    {
      id: 1,
      title: "Telephone",
      href: "tel:0810262271",
      text: "081 026 2271",
      icon: T,
    },
    {
      id: 2,
      title: "WhatsApp",
      href: "https://wa.me/27810262271",
      text: "081 026 2271",
      icon: W,
    },
    {
      id: 3,
      title: "Email",
      href: "mailto:dennismatlhaba2@gmail.com",
      text: "dennismatlhaba2@gmail.com",
      icon: Em,
    },
    {
      id: 4,
      title: "Postal Address",
      href: "https://maps.google.com/maps?q=Maporch%20Enterprise&t=&z=15&ie=UTF8&iwloc=&output=embed",
      text: "Private Bag X2306, Bakenberg, 0611",
      icon: Postal,
    },
  ];

  return (
    <section
      id="contact"
      className="flex items-center justify-center px-10 md:px-0 bg-gray-50 py-16 md:py-20 lg:py-28"
    >
      <div className="">
        <div className="-mx-4 flex flex-wrap items-center justify-center">
          {/* Contact Info Box */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="rounded-xl bg-white p-8 shadow-lg sm:p-10 md:p-12 lg:p-10 xl:p-12">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                Get in Touch with the School
              </h2>
              <p className="mb-8 text-gray-600">
                Reach out and we'll do our best to assist you.
              </p>

              <div className="flex flex-col gap-6">
                {contactDetails.map((contact) => (
                  <div
                    key={contact.id}
                    className="flex items-start gap-4 hover:bg-gray-100 transition-all p-3 rounded-md"
                  >
                    <img
                      src={contact.icon}
                      alt={contact.title}
                      className="w-10 h-10 object-contain"
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">
                        {contact.title}
                      </h4>
                      <a
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline break-words"
                      >
                        {contact.text}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-12 w-full px-4 lg:mt-0 lg:w-1/2">
            <div className="overflow-hidden rounded-xl shadow-lg h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.0497726558256!2d28.764714976124782!3d-23.85236627234934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec76733308b56b1%3A0xb9750c801c6e313f!2sDennis%20Matlhaba%20Ii%20Secondary%20School!5e0!3m2!1sen!2sza!4v1748901497049!5m2!1sen!2sza"
                width="100%"
                height="100%"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dennis Matlhaba II Secondary School Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
