import { useForm, SubmitHandler } from "react-hook-form";

import "./style/Form.css";
import Pizza from "./components/pizza";
import Soup from "./components/soup";
import Sandwich from "./components/sandwich";

enum TypeEnum {
  pizza = "pizza",
  soup = "soup",
  sandwich = "sandwich",
}

interface IFormInput {
  name: string;
  preparation_time: number;
  type: TypeEnum;
  no_of_slices: number;
  diameter: number;
  spiciness_scale: number;
  slices_of_bread: number;
}

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  const type = watch("type");
  const valueOfName = watch("name");
  const diameter = watch("diameter", 25);
  const noOfSlices = watch("no_of_slices", 1);
  const spiciness = watch("spiciness_scale", 1);
  const slicesOfBread = watch("slices_of_bread", 1);

  return (
    <div className="wrapper">
      {type === "pizza" && <Pizza size={diameter} noOfSlices={noOfSlices} />}
      {type === "soup" && <Soup spiciness={spiciness} />}
      {type === "sandwich" && <Sandwich slicesOfBread={slicesOfBread} />}
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
              // Can you cut a pizza into an odd number of pieces?
              step={2}
              max={16}
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
              step="0.1"
              aria-invalid={errors.diameter ? "true" : "false"}
              {...register("diameter", {
                required: "Please enter diameter of pizza.",
              })}
            />
          </>
        )}
        {type === "soup" && (
          <div className="spiciness-contanier">
            <p>Spiciness Scale:</p>
            <div className="radio-container">
              <div className="radio-element">
                <label htmlFor="spiciness_scale-1">1</label>
                <input
                  type="radio"
                  value="1"
                  defaultChecked
                  aria-invalid={errors.spiciness_scale ? "true" : "false"}
                  {...register("spiciness_scale", {
                    required: "Please enter spiciness of soup.",
                  })}
                  id="piciness_scale-1"
                />
              </div>

              <div className="radio-element">
                <label htmlFor="spiciness_scale-2">2</label>
                <input
                  type="radio"
                  value="2"
                  aria-invalid={errors.spiciness_scale ? "true" : "false"}
                  {...register("spiciness_scale", {
                    required: "Please enter spiciness of soup.",
                  })}
                  id="piciness_scale-2"
                />
              </div>

              <div className="radio-element">
                <label htmlFor="spiciness_scale-3">3</label>
                <input
                  type="radio"
                  value="3"
                  aria-invalid={errors.spiciness_scale ? "true" : "false"}
                  {...register("spiciness_scale", {
                    required: "Please enter spiciness of soup.",
                  })}
                  id="piciness_scale-3"
                />
              </div>

              <div className="radio-element">
                <label htmlFor="spiciness_scale-4">4</label>
                <input
                  type="radio"
                  value="4"
                  aria-invalid={errors.spiciness_scale ? "true" : "false"}
                  {...register("spiciness_scale", {
                    required: "Please enter spiciness of soup.",
                  })}
                  id="piciness_scale-4"
                />
              </div>

              <div className="radio-element">
                <label htmlFor="spiciness_scale-5">5</label>
                <input
                  type="radio"
                  value="5"
                  aria-invalid={errors.spiciness_scale ? "true" : "false"}
                  {...register("spiciness_scale", {
                    required: "Please enter spiciness of soup.",
                  })}
                  id="piciness_scale-5"
                />
              </div>

              <div className="radio-element">
                <label htmlFor="spiciness_scale-6">6</label>
                <input
                  type="radio"
                  value="6"
                  aria-invalid={errors.spiciness_scale ? "true" : "false"}
                  {...register("spiciness_scale", {
                    required: "Please enter spiciness of soup.",
                  })}
                  id="piciness_scale-6"
                />
              </div>

              <div className="radio-element">
                <label htmlFor="spiciness_scale-7">7</label>
                <input
                  type="radio"
                  value="7"
                  aria-invalid={errors.spiciness_scale ? "true" : "false"}
                  {...register("spiciness_scale", {
                    required: "Please enter spiciness of soup.",
                  })}
                  id="piciness_scale-7"
                />
              </div>

              <div className="radio-element">
                <label htmlFor="spiciness_scale-8">8</label>
                <input
                  type="radio"
                  value="8"
                  aria-invalid={errors.spiciness_scale ? "true" : "false"}
                  {...register("spiciness_scale", {
                    required: "Please enter spiciness of soup.",
                  })}
                  id="piciness_scale-8"
                />
              </div>

              <div className="radio-element">
                <label htmlFor="spiciness_scale-9">9</label>
                <input
                  type="radio"
                  value="9"
                  aria-invalid={errors.spiciness_scale ? "true" : "false"}
                  {...register("spiciness_scale", {
                    required: "Please enter spiciness of soup.",
                  })}
                  id="piciness_scale-9"
                />
              </div>

              <div className="radio-element">
                <label htmlFor="spiciness_scale-10">10</label>
                <input
                  type="radio"
                  value="10"
                  aria-invalid={errors.spiciness_scale ? "true" : "false"}
                  {...register("spiciness_scale", {
                    required: "Please enter spiciness of soup.",
                  })}
                  id="piciness_scale-10"
                />
              </div>
            </div>
          </div>
        )}
        {type === "sandwich" && (
          <>
            <label htmlFor="slices_of_bread">Slices Of Bread:</label>
            <input
              id="slices_of_bread"
              placeholder="Number of slices of bread"
              type="number"
              min="1"
              max="24"
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
