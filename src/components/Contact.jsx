import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import SectionTitle from "./SectionTitle";

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
        message: messageRef.current.value
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
      className="mx-auto max-7xl hero min-h-screen scroll-mt-6"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Get in touch!</h1>
          <p className="py-6 w-72">
            Shoot me an email if you want to connect! You can also find me on
            <span className="text-emerald-500">
              <a href="www.linkedin.com/in/sienna-nguyen-0828b4146"> Linkedin </a>
            </span>
             or
            <span className="text-emerald-500">
              <a href="https://github.com/misssn1998"> Github </a>
            </span>
             if that's more your speed.
          </p>
        </div>
        <form
          className="mx-auto max-w-38 flex flex-col"
          onSubmit={handleSubmit}
        >
          {/* NAME */}
          <div className="gap-2 flex flex-col w-64 mb-8">
            <label className="font-semibold mr-6">Name</label>
            <input
              type="text"
              name="name"
              ref={nameRef}
              className="input input-bordered"
              placeholder="John"
              required
              value={form.name}
              onChange={handleChange}
            />
          </div>

          {/* EMAIL */}
          <div className="gap-2 flex flex-col w-64 mb-8">
            <label className="font-semibold mr-6">Email</label>
            <input
              type="email"
              name="email"
              ref={emailRef}
              className="input input-bordered"
              placeholder="John@email.com"
              required
              value={form.email}
              onChange={handleChange}
            />
          </div>

          {/* MESSAGE */}
          <div className="gap-2 flex flex-col w-64">
            <label className="font-semibold mr-6">Your Message</label>
            <textarea
              name="message"
              className="textarea textarea-bordered textarea-lg w-full max-w-xs"
              placeholder="Hi Sienna,...."
              ref={messageRef}
              required
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="btn btn-sm mt-5 bg-emerald-500"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
