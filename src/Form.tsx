import { useForm, SubmitHandler } from "react-hook-form";

import "./style/Form.css";

enum TypeEnum {
  pizza = "pizza",
  soup = "soup",
  sandwich = "sandwich",
}

interface IFormInput {
  name: String;
  preparation_time: Number;
  type: TypeEnum;
  no_of_slices: Number;
  diameter: Number;
  spiciness_scale: Number;
  slices_of_bread: Number;
}

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  const type = watch("type");
  const valueOfName = watch("name");

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <label htmlFor="name">Dish Name:</label>
        <input
          placeholder="Dish Name"
          id="name"
          aria-invalid={errors.name ? "true" : "false"}
          {...register("name", {
            required: "Please enter name.",
          })}
        />
        <label htmlFor="preparation_time">Preparation Time:</label>
        <input
          type="time"
          id="preparation_time"
          aria-invalid={errors.preparation_time ? "true" : "false"}
          {...register("preparation_time", {
            required: `Please enter preparation time of ${valueOfName} `,
          })}
          step="1"
        />
        <label htmlFor="type">Dish Type:</label>
        <select
          id="type"
          {...register("type", {
            required: "Please select option.",
          })}
        >
          <option value="" disabled selected>
            Select Dish Type
          </option>
          <option value="pizza">Pizza</option>
          <option value="soup">Soup</option>
          <option value="sandwich">Sandwich</option>
        </select>
        {type === "pizza" && (
          <>
            <label htmlFor="no_of_slices">no_of_slices:</label>
            <input
              placeholder="Number of slices"
              id="no_of_slices"
              type="number"
              aria-invalid={errors.no_of_slices ? "true" : "false"}
              {...register("no_of_slices", {
                required: "Please enter number of slices.",
              })}
            />
            <label
              htmlFor="diameter"
              style={{ textTransform: "capitalize", display: "block" }}
            >
              Diameter:
            </label>
            <input
              id="diameter"
              type="range"
              max="45"
              min="25"
              step="0.5"
              aria-invalid={errors.diameter ? "true" : "false"}
              {...register("diameter", {
                required: "Please enter diameter of pizza.",
              })}
            />
          </>
        )}
        {type === "soup" && (
          <>
            <label htmlFor="spiciness_scale">Spiciness Scale:</label>
            <input
              placeholder="Spiciness Scale"
              id="spiciness_scale"
              type="number"
              min="1"
              max="10"
              aria-invalid={errors.spiciness_scale ? "true" : "false"}
              {...register("spiciness_scale", {
                required: "Please enter spiciness of soup.",
              })}
            />
          </>
        )}
        {type === "sandwich" && (
          <>
            <label htmlFor="slices_of_bread">Slices Of Bread:</label>
            <input
              id="slices_of_bread"
              type="number"
              min="1"
              max="10"
              aria-invalid={errors.slices_of_bread ? "true" : "false"}
              {...register("slices_of_bread", {
                required: "Please enter slices of bread in sandwich.",
              })}
            />
          </>
        )}
        <input type="submit" />
      </form>
    </div>
  );
}
