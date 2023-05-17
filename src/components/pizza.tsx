type PizzaProps = { size: number; noOfSlices: number };

const Pizza = ({ size, noOfSlices }: PizzaProps) => {
  const numberOfPizzaCut = (noOfSlices: number) => {
    if (noOfSlices < 0) {
      return 0;
    }
    if (noOfSlices > 1) {
      return Math.round(noOfSlices / 2);
    } else {
      return noOfSlices;
    }
  };

  const cuttingDeg = (index: number) => {
    if (index === 0) {
      return "180";
    }
    if (index === 1) {
      return "90";
    }
    if (index === 2) {
      return "45";
    }
    if (index === 3) {
      return "135";
    }
    if (index === 4) {
      return "22.5";
    }
    if (index === 5) {
      return "112.5";
    }
    if (index === 6) {
      return "157.5";
    }
    if (index === 7) {
      return "247.5";
    } else return "90";
  };

  return (
    <>
      {noOfSlices < 0 && (
        <div className="error">
          <p>Error</p>
          <p>How would you like to cut a pizza into {noOfSlices} pieces?</p>
          <p>Please correct the value to a positive and even number !</p>
        </div>
      )}
      {noOfSlices >= 17 && (
        <div className="error">
          <p>Error</p>
          <p>Please choose maximum 16 slices of pizza !</p>
        </div>
      )}
      <div
        className={`pizza-container`}
        style={{
          scale: `${size / 30}`,
          display: noOfSlices >= 17 ? "none" : "block",
        }}
      >
        <div
          className="pizza-dough"
          style={{
            display: noOfSlices < 0 ? "none" : "flex",
          }}
        >
          {Array.from(Array(Number(numberOfPizzaCut(noOfSlices))).keys()).map(
            (_child, index) => (
              <div
                key={index}
                className="pizza-slice"
                style={{
                  rotate: `${cuttingDeg(index)}deg`,
                  display: noOfSlices % 2 != 0 ? "none" : "block",
                }}
              ></div>
            )
          )}
          <div className="pizza-cheese">
            <div className="pepperoni-container">
              <div className="pepperoni"></div>
            </div>
          </div>
        </div>
        {size && (
          <div
            className="pizza-measure"
            style={{
              display: noOfSlices < 0 ? "none" : "block",
            }}
          >
            <p>{size}cm</p>
            <div className="pizza-measure-segment" />
          </div>
        )}
      </div>
    </>
  );
};

export default Pizza;
