import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => emailjs.init("x3coIOBOjftGEdYql")), [];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_ypro70r";
    const templateId = "template_v61u5js";
    try {
      setIsLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: nameRef.current.value,
        email: emailRef.current.value,
        message: messageRef.current.value,
      });
      alert("Email successfully sent check inbox");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl grid grid-cols-3 px-32 py-8 mt-20 scroll-mt-6 sm:flex xs:grid-cols-1"
    >
      <div className="col-span-2 ">
        <div className="text-center lg:text-left leading-9">
          <h1 className="text-5xl font-bold mb-10 text-heading-text">
            Get in touch!
          </h1>
          <p className="pr-20 text-xl leading-10 sm:pr-8
          xs:pr-0">
            Shoot me an email if you want to connect! You can also find me on
            <span className="text-primary font-semibold">
              <a href="https://www.linkedin.com/in/sienna-nguyen-0828b4146/">
                {" "}
                Linkedin{" "}
              </a>
            </span>
            or
            <span className="text-primary font-semibold">
              <a href="https://github.com/misssn1998"> Github </a>
            </span>
            if that's more your speed🤩🫶👩💻.{" "}
          </p>
        </div>
      </div>

      <form className="col-span-1 flex flex-col xs:mt-10" onSubmit={handleSubmit}>
        {/* NAME */}
        <div className="gap-2 flex flex-col w-full mb-8">
          <label className="font-semibold mr-6">Name</label>
          <input
            type="text"
            name="name"
            ref={nameRef}
            className="input input-bordered border-heading-text"
            placeholder="John"
            required
            value={form.name}
            onChange={handleChange}
          />
        </div>

        {/* EMAIL */}
        <div className="gap-2 flex flex-col w-full mb-8">
          <label className="font-semibold mr-6">Email</label>
          <input
            type="email"
            name="email"
            ref={emailRef}
            className="input input-bordered border-heading-text"
            placeholder="John@email.com"
            required
            value={form.email}
            onChange={handleChange}
          />
        </div>

        {/* MESSAGE */}
        <div className="gap-2 flex flex-col w-full">
          <label className="font-semibold mr-6">Your Message</label>
          <textarea
            name="message"
            className="textarea textarea-bordered border-heading-text textarea-lg"
            placeholder="Hi Sienna,...."
            ref={messageRef}
            required
            value={form.message}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="btn btn-sm mt-5 bg-secondary shadow-lg hover:scale-110"
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Send Message"}
          <FiSend />
        </button>
      </form>
    </section>
  );
};

export default Contact;
