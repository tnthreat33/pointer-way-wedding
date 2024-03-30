import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailtoLink = `mailto:tnthreat33@gmail.com?subject=Customer Inquiry&body=Name: ${name}%0DEmail: ${email}%0DMessage: ${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div>
      <div className="mb-5 mt-3">
        <h1 className="text-4xl mb-4">Contact Me</h1>
        <hr className="border-t-2 border-gray-400 my-4 ml-0" />
      </div>
      <div className="flex">
        <div className="w-5/12 mb-5">
          <h3 className="text-lg py-4">Get in touch</h3>
          <div>
            <strong>Email:</strong>{" "}
            <a href={`mailto:tnthreat33@gmail.com`}>
              tnthreat33@gmail.com
            </a>
          </div>
          <p className="mt-4">Feel free to drop us a message!</p>
        </div>
        <div className="w-7/12 flex items-center">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-4">
              <input
                className="w-full p-2 border border-gray-400 rounded"
                id="name"
                name="name"
                placeholder="Name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <input
                className="w-full p-2 border border-gray-400 rounded"
                id="email"
                name="email"
                placeholder="Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <textarea
              className="w-full p-2 border border-gray-400 rounded mb-4"
              id="message"
              name="message"
              placeholder="Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button className="bg-blue-500 text-white py-2 px-4 rounded" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
