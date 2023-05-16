type PizzaProps = { size: number; noOfSlices: number };

const Pizza = ({ size, noOfSlices }: PizzaProps) => {
  const numberOfPizzaCut = noOfSlices > 1 ? noOfSlices / 2 : noOfSlices;
  console.log(numberOfPizzaCut);
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
    }
  };

  return (
    <div className={`pizza-container`} style={{ scale: `${size / 30}` }}>
      <div className="pizza-dough">
        {Array.from(Array(Number(numberOfPizzaCut)).keys()).map(
          (_child, index) => (
            <div
              className="pizza-slice"
              style={{
                rotate: `${cuttingDeg(index)}deg`,
              }}
              //for max 16 slices
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
        <div className="measure">
          <p>{size}cm</p>
          <div className="measure-segment" />
        </div>
      )}
    </div>
  );
};

export default Pizza;
// add handle and style to slices pizza
