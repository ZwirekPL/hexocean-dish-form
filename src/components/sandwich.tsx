type SandwichProps = { slicesOfBread: number };

const Sandwich = ({ slicesOfBread }: SandwichProps) => {
  const positiveSlicesOfBread = slicesOfBread <= 0 ? 26 : slicesOfBread;

  return (
    <div className="sandwich-container">
      {slicesOfBread >= 25 && (
        <div className="error">
          <p>Error</p>
          <p>Please choose maximum 24 slices of bread !</p>
        </div>
      )}
      {slicesOfBread <= 0 && (
        <div className="error">
          <p>Error</p>
          <p>How would you like to set {slicesOfBread} pieces of bread?</p>
          <p>Please correct the value to a positive number !</p>
        </div>
      )}
      {Array.from(Array(Number(positiveSlicesOfBread)).keys()).map(
        (_child, index) => (
          <div
            className="bread"
            key={index}
            style={{ display: slicesOfBread >= 25 ? "none" : "block" }}
          >
            <div
              className="bread-base"
              style={{ display: slicesOfBread <= 0 ? "none" : "block" }}
            ></div>
            <div
              className="bread-shadow"
              style={{ display: slicesOfBread <= 0 ? "none" : "block" }}
            ></div>
          </div>
        )
      )}
    </div>
  );
};

export default Sandwich;
