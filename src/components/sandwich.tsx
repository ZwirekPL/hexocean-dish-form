type SandwichProps = { slicesOfBread: number };

const Sandwich = ({ slicesOfBread }: SandwichProps) => {
  return (
    <div className="sandwich-container">
      {slicesOfBread >= 25 && (
        <div className="sandwich-error">
          <p>Error</p>
          <p>Please choose maximum 24 slices of bread !</p>
        </div>
      )}
      {Array.from(Array(Number(slicesOfBread)).keys()).map((_child, index) => (
        <div
          className="bread"
          key={index}
          style={{ display: slicesOfBread >= 25 ? "none" : "block" }}
        >
          <div className="bread-base"></div>
          <div className="bread-shadow"></div>
        </div>
      ))}
    </div>
  );
};

export default Sandwich;
