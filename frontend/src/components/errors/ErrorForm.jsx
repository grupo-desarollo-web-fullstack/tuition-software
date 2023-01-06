import { BiError } from "react-icons/bi";

const ErrorForm = ({ error, className }) => (
  <article className={`error openInTop ${className}`}>
    <div className="error-container">
      <BiError color="#f5f2e7" size={20} />
      <h2 className="error__title">{error.message}</h2>
    </div>
  </article>
);

export default ErrorForm;
