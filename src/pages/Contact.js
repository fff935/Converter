import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="p-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Контакти</h2>
        <p className="text-center text-gray-700">
          Зв'яжіться з нами за допомогою електронної пошти:  
           <a href="mailto:support@chipchange.com" className="text-blue-600 underline">support@chipchange.com</a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
