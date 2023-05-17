import "../style/confrimRequest.css";
interface RequestFromServerProps {
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
const ConfrimRequestFromServer = ({ data }: RequestFromServerProps) => {
  const HandleRequestBtn = () => {
    window.location.reload();
  };
  return (
    <div className="requestComp-wrapper">
      <p className="requestParagraph">
        Your from was successfully received by the server!
      </p>
      <div className="requestParagraphContainer">
        <p className="requestParagraph">ID:</p>
        <p>{data.id}</p>
      </div>
      <div className="requestParagraphContainer">
        <p className="requestParagraph">Name:</p>
        <p>{data.name}</p>
      </div>
      <div className="requestParagraphContainer">
        <p className="requestParagraph">Preparation Time:</p>
        <p>{data.preparation_time}</p>
      </div>
      <div className="requestParagraphContainer">
        <p className="requestParagraph">Dish Type:</p>
        <p>{data.type}</p>
      </div>
      <div className="requestParagraphContainer">
        <p className="requestParagraph">Number of slices of pizza:</p>
        <p>{data.no_of_slices}</p>
      </div>
      <div className="requestParagraphContainer">
        <p className="requestParagraph">Pizza diameter:</p>
        <p>{data.diameter}</p>
      </div>
      <div className="requestParagraphContainer">
        <p className="requestParagraph">Spiciness of soup:</p>
        <p>{data.spiciness_scale}</p>
      </div>
      <div className="requestParagraphContainer">
        <p className="requestParagraph">Slices of bread:</p>
        <p>{data.slices_of_bread}</p>
      </div>
      <button onClick={HandleRequestBtn} className="request-btn">
        Refresh
      </button>
    </div>
  );
};

export default ConfrimRequestFromServer;
