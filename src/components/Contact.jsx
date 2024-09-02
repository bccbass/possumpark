import { useState, useEffect } from "react";
// npm install react-hook-form @web3forms/react
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import useWeb3Forms from "@web3forms/react";
import brushy from "../assets/brushtailpossum.png";

const Contact = () => {
  const inputClassStyle = 'border border-gray-400 rounded p-1 bg-white'
  const { register, reset, handleSubmit } = useForm();

  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);

  const accessKey = "31670424-2432-4e48-8002-d7c5e175702e";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "PossumConnect",
      subject: "New Contact Message from Possum Park submission form",
      // ... other settings
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResult("Message sent!");
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });

  return (
    <div className="flex flex-col items-center justify-center bg-neutral-50 border w-full">
      {!isSuccess && (
        <form
          className="flex flex-col space-y-4 my-2 p-4 font-thin text-lg w-full max-w-md "
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className={inputClassStyle} 
            placeholder="name"
            type="text"
            {...register("name", { required: true })}
          />
          <input
            className={inputClassStyle} 
            placeholder="email"
            type="email"
            {...register(" email", { required: true })}
          />
          <textarea
            className={inputClassStyle} 
            placeholder="type your message"
            rows="3"
            {...register("message", { required: true })}
          ></textarea>

          <button
            className="ring-1 ring-red-300  ring-offset-2 hover:ring-red-100 self-end bg-white border-red-500 rounded px-2 border hover:bg-red-400 hover:text-white transition-colors"
            type="submit"
          >
            Send Message
          </button>
        </form>
      )}

{
          isSuccess &&
      <div className="flex flex-col items-center my-8">
        <h2 className="text-2xl p-2 rounded my-8 text-gray-500 border-gray-400 border">
        {result}
        </h2>

          <div className="flex pt-6">
            <motion.div
              animate={{
                rotate: [0, 0, 40, -40, 0],
                y: [0, -20, -5, -10, 0],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
              }}
              className="text-center p-2"
            >
              <img className="w-7" src={brushy} alt="" />
            </motion.div>
            <motion.div
              animate={{
                rotate: [0, 0, 40, -40, 0],
                y: [0, -20, -5, -10, 0],
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.7, 0.9],
                repeat: Infinity,
              }}
              className="text-center p-2"
            >
              <img className="w-9" src={brushy} alt="" />
            </motion.div>
            <motion.div
              animate={{
                rotate: [0, 0, -10, 40, 0],
                y: [0, -10, -5, -15, 0],
              }}
              transition={{
                duration: 2.8,
                // ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
              }}
              className="text-center p-2"
            >
              <img className="w-8" src={brushy} alt="" />
            </motion.div>
          </div>
          </div>
        }
    </div>
  );
};

export default Contact;
