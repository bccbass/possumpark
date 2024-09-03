import { useState } from "react";
// npm install react-hook-form @web3forms/react
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import useWeb3Forms from "@web3forms/react";
import possum from "../assets/madpossumv2.png";

const Contact = () => {
  const inputClassStyle = "border border-gray-400 rounded p-1 bg-white";
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
    <div className="flex flex-col items-center justify-center h-54 bg-neutral-50 border w-full max-w-lg mb-12">
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
        <motion.div
          
          animate={{
            scale: [0, 1, 1, .95, 1],
            borderRadius: ["100%", "0%", "0%", "0%", "0%"]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeatDelay: 1
          }}
          className="flex flex-col items-center  w-full h-full bg-red-500 "
        >
          <div className="flex pt-6">
            <motion.div
              animate={{
                rotate: [0, 0, 30, -30, 0],
                y: [0, -20, -5, -10, 0],
                x: [2, -2, -5, -10, 2],
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.7, 0.9],
                repeat: Infinity,
              }}
              className="text-center mt-4"
            >
              <img className="w-14" src={possum} alt="" />
            </motion.div>
          </div>
          <h2 className="text-2xl p-2 mb-16 text-neutral-100 julius-sans-one-regular">
            {result}
          </h2>
        </motion.div>
      }
    </div>
  );
};

export default Contact;
