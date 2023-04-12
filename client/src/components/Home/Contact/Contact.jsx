import React, { useState } from "react";

const Contact = () => {
  const [values, setValues] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    console.log(e);
  };

  return (
    <div className="py-10">
      <article className="text-center">
        <h1 className="text-white text-4xl mb-8 font-semibold">
          Contact us if you need.
        </h1>
        <p className="text-gray-300 text-xl my-0 mx-auto max-w-[28rem] mb-8">
          Contact us, we will try pur best to get back to you as soon as
          possible.
        </p>
      </article>

      <form className="max-w-[600px] my-0 mx-auto flex flex-col gap-y-6">
        <div>
          <input
            className="bg-black py-4 px-4 rounded-md"
            type="email"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <input
            className="bg-black py-4 px-4 rounded-md"
            type="text"
            name="subject"
            placeholder="Subject"
            value={values.subject}
          />
        </div>
        <div>
          <textarea
            className="bg-black py-4 px-4 rounded-md resize-none	"
            name="message"
            id=""
            rows="5"
            placeholder="Message"
            value={values.message}
          ></textarea>
        </div>
        <div>
          <button className="bg-black w-full py-4 rounded-md">Send</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
