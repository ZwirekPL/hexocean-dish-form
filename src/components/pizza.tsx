type PizzaProps = { size: number; noOfSlices: number };

const Pizza = ({ size, noOfSlices }: PizzaProps) => {
  const numberOfPizzaCut = noOfSlices > 1 ? noOfSlices / 2 : noOfSlices;
  // console.log(numberOfPizzaCut);

  return (
    <div className={`pizza-container`} style={{ scale: `${size / 30}` }}>
      <div className="pizza-dough">
        {Array.from(Array(Number(numberOfPizzaCut)).keys()).map(
          (_child, index) => (
            <div
              className="pizza-slice"
              style={{
                rotate: `${index < 3 ? 360 / (index * 4) : 3 * 45}deg`,
              }}
              //for max 8 slices
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
