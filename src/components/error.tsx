import "../style/error.css";
type ErrorComponentProps = { data: string };
const ErrorComponent = ({ data }: ErrorComponentProps) => {
  const handleServerError = (data: string) => {
    if (data === "Error: 400") {
      return (
        <>
          <p>400 Bad Request</p>
          <p>The server cannot or will not process the request client error.</p>
          <p>Please try again.</p>
        </>
      );
    }
    if (data === "Error: 404") {
      return (
        <>
          <p>404 Not Found</p>
          <p>
            The requested resource could not be found but may be available in
            the future.
          </p>
          <p>Please try again.</p>
        </>
      );
    }
    if (data === "Error: 500") {
      return (
        <>
          <p>500 Internal Server Error</p>
          <p>The server has encountered.</p>
          <p>Please try again.</p>
        </>
      );
    } else {
      return (
        <>
          <p>Unknown Error</p>
          <p>Please try again.</p>
        </>
      );
    }
  };
  const HandleErrorBtn = () => {
    window.location.reload();
  };
  return (
    <div className="errorComp-wrapper">
      <p className="errorParagraph">Ups something went wrong...</p>
      <div className="errorParagraph">{handleServerError(data)}</div>
      <button onClick={HandleErrorBtn} className="error-btn">
        Refresh
      </button>
    </div>
  );
};

export default ErrorComponent;
