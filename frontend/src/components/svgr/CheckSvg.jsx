import { motion } from "framer-motion";
/* eslint-disable react/jsx-props-no-spreading */

const CheckSvg = (props) => (
  <motion.svg
    width={100}
    height={100}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      fillRule="evenodd"
      d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm2.72 5.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 0 1 1.06-1.06l1.47 1.47 3.97-3.97z"
      clipRule="evenodd"
    />
  </motion.svg>
);

export default CheckSvg;
