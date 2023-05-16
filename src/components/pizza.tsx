type PizzaProps = { size: number };

const Pizza = ({ size }: PizzaProps) => {
  const pizzaSizeInt = size;

  return (
    <div className={`pizza-container`} style={{ scale: `${size / 30}` }}>
      <div className="pizza-dough">
        <div className="pizza-cheese">
          <div className="pepperoni-container">
            <div className="pepperoni"></div>
            <div className="pepperoni"></div>
            <div className="pepperoni"></div>
            <div className="pepperoni"></div>
            <div className="pepperoni"></div>
            <div className="pepperoni"></div>
            <div className="pepperoni"></div>
            <div className="pepperoni"></div>
            <div className="pepperoni"></div>
            <div className="pepperoni"></div>
            <div className="pepperoni"></div>
            <div className="pepperoni"></div>
            <div className="pepperoni"></div>
            <div className="pepperoni"></div>
          </div>
        </div>
      </div>
      {size && (
        <div className="measure">
          <p>{pizzaSizeInt}cm</p>
          <div className="measure-segment" />
        </div>
      )}
    </div>
  );
};

export default Pizza;
