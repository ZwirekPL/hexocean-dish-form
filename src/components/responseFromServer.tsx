import "../style/responseFromServer.css";
interface ResponseFromServerProps {
  data: DataProps;
}
interface DataProps {
  name: string;
  preparation_time: string;
  type: string;
  no_of_slices: number;
  diameter: number;
  spiciness_scale: number;
  slices_of_bread: number;
  id: number;
}
const ResponseFromServer = ({ data }: ResponseFromServerProps) => {
  const handleResponseFromServerBtn = () => {
    window.location.reload();
  };
  return (
    <div className="responseComp-wrapper">
      <p className="responseParagraph">
        Your from was successfully received by the server!
      </p>
      <div className="responseParagraphContainer">
        <p className="responseParagraph">ID:</p>
        <p>{data.id}</p>
      </div>
      <div className="responseParagraphContainer">
        <p className="responseParagraph">Name:</p>
        <p>{data.name}</p>
      </div>
      <div className="responseParagraphContainer">
        <p className="responseParagraph">Preparation Time:</p>
        <p>{data.preparation_time}</p>
      </div>
      <div className="responseParagraphContainer">
        <p className="responseParagraph">Dish Type:</p>
        <p>{data.type}</p>
      </div>
      <div className="responseParagraphContainer">
        <p className="responseParagraph">Number of slices of pizza:</p>
        <p>{data.no_of_slices}</p>
      </div>
      <div className="responseParagraphContainer">
        <p className="responseParagraph">Pizza diameter:</p>
        <p>{data.diameter}</p>
      </div>
      <div className="responseParagraphContainer">
        <p className="responseParagraph">Spiciness of soup:</p>
        <p>{data.spiciness_scale}</p>
      </div>
      <div className="responseParagraphContainer">
        <p className="responseParagraph">Slices of bread:</p>
        <p>{data.slices_of_bread}</p>
      </div>
      <button onClick={handleResponseFromServerBtn} className="response-btn">
        Back to form
      </button>
    </div>
  );
};

export default ResponseFromServer;
