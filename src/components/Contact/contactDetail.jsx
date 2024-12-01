import { FcFeedback } from "react-icons/fc";
import { motion } from "framer-motion";

const ContactDetails = () => {
  return (
    <section className="text-center tracking-tight p-6 flex flex-col leading-7">
      <motion.a
        animate={{
          scale: [1, 1.4, 1], // Scale values
        }}
        transition={{
          duration: 1.7, // Animation duration
          repeat: Infinity, // Infinite loop
          ease: "easeInOut",
        }}
        href="tel:+919872932661"
        className="text-sky-500 flex items-center justify-center gap-2 hover:scale-125 transition-transform duration-300 ease-in-out"
        aria-label="Call +91 9872932661">
        📞+91 9872932661
      </motion.a>
      <a
        href="mailto:ashukaushik1007@gmail.com"
        className="text-sky-500 hover:underline flex items-center justify-center gap-2 hover:scale-125 transition-transform duration-300 ease-in-out"
        aria-label="Email to ashukaushik1007@gmail.com">
        <FcFeedback /> ashukaushik1007@gmail.com
      </a>
      <address className="not-italic mb-2">
        📍 <strong>Address:</strong> Gopal Marg, Near Krishan Mandir, Budhlada, District: Mansa, State: Punjab, Pin:
        151502
      </address>
      <p className="mt-2">
        Feel free to reach out for collaboration, project inquiries, or just to connect. I’m always open to meaningful
        conversations!
      </p>
    </section>
  );
};

export default ContactDetails;
