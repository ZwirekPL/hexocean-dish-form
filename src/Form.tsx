//WIRGILIUSZ ŁADZIŃSKI - praca.wirgiliusz@gmail.com

import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

import "./style/Form.css";
import Pizza from "./components/pizza";
import Soup from "./components/soup";
import Sandwich from "./components/sandwich";
import Loader from "./components/loader";
import ErrorComponent from "./components/error";
import ResponseFromServer from "./components/responseFromServer";

enum TypeEnum {
  pizza = "pizza",
  soup = "soup",
  sandwich = "sandwich",
}

interface FormInput {
  name: string;
  preparation_time: number;
  type: TypeEnum;
  no_of_slices: number;
  diameter: number;
  spiciness_scale: number;
  slices_of_bread: number;
}

export default function Form() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [requestFailed, setRequestFailed] = useState<boolean>(false);
  const [responseFromServer, setResponseFromServer] = useState();
  const [errorData, setErrorData] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    setIsLoading(true);
    fetch("https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (!response.ok) throw new Error(`${response.status}`);
        else return response.json();
      })
      .then((data) => {
        setResponseFromServer(data);
        setIsLoading(false);
        setRequestFailed(false);
      })
      .catch((error) => {
        setRequestFailed(true);
        setErrorData(`${error}`);
        setIsLoading(false);
      });
  };

  const type = watch("type");
  const diameter = watch("diameter", 45);
  const noOfSlices = watch("no_of_slices", 0);
  const spiciness = watch("spiciness_scale", 0);
  const slicesOfBread = watch("slices_of_bread", 1);

  return (
    <div className="wrapper">
      {responseFromServer && <ResponseFromServer data={responseFromServer} />}
      {requestFailed && <ErrorComponent data={errorData} />}
      {isLoading && <Loader />}
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
            required: true,
            minLength: 3,
          })}
        />
        {errors.name?.type === "required" && (
          <p className="alert" role="alert">
            Name is required!
          </p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="alert" role="alert">
            The Name must have at least 3 characters!
          </p>
        )}
        <label htmlFor="preparation_time">Preparation Time:</label>
        <input
          type="time"
          id="preparation_time"
          aria-invalid={errors.preparation_time ? "true" : "false"}
          {...register("preparation_time", {
            required: true,
          })}
          step={1}
        />
        {errors.preparation_time?.type === "required" && (
          <p className="alert" role="alert">
            Preparation time is required!
          </p>
        )}
        <label htmlFor="type">Dish Type:</label>
        <select
          id="type"
          defaultValue="Select Dish Type"
          aria-invalid={errors.type ? "true" : "false"}
          {...register("type", {
            required: true,
          })}
        >
          <option value="Select Dish Type" disabled>
            Select Dish Type
          </option>
          <option value="pizza">Pizza</option>
          <option value="soup">Soup</option>
          <option value="sandwich">Sandwich</option>
        </select>
        {errors.type?.type === "required" && (
          <p className="alert" role="alert">
            Dish type is required!
          </p>
        )}
        {type === "pizza" && (
          <>
            <label htmlFor="no_of_slices">no_of_slices:</label>
            <input
              placeholder="Number of slices"
              id="no_of_slices"
              type="number"
              minLength={1}
              step={2}
              max={16}
              aria-invalid={errors.no_of_slices ? "true" : "false"}
              {...register("no_of_slices", {
                required: true,
              })}
            />
            {errors.no_of_slices?.type === "required" && (
              <p className="alert" role="alert">
                Number of slices is required!
              </p>
            )}
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
                required: true,
              })}
            />
            {errors.no_of_slices?.type === "required" && (
              <p className="alert" role="alert">
                Number of slices is required!
              </p>
            )}
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
                  value={1}
                  aria-invalid={errors.spiciness_scale ? "true" : "false"}
                  {...register("spiciness_scale", {
                    required: true,
                  })}
                  id="piciness_scale-1"
                />
              </div>
              <div className="radio-element">
                <label htmlFor="spiciness_scale-2">2</label>
                <input
                  type="radio"
                  value={2}
                  aria-invalid={errors.spiciness_scale ? "true" : "false"}
                  {...register("spiciness_scale", {
                    required: true,
                  })}
                  id="piciness_scale-2"
                />
              </div>
              <div className="radio-element">
                <label htmlFor="spiciness_scale-3">3</label>
                <input
                  type="radio"
                  value={3}
                  aria-invalid={errors.spiciness_scale ? "true" : "false"}
                  {...register("spiciness_scale", {
                    required: true,
                  })}
                  id="piciness_scale-3"
                />
              </div>
              <div className="radio-element">
                <label htmlFor="spiciness_scale-4">4</label>
                <input
                  type="radio"
                  value={4}
                  aria-invalid={errors.spiciness_scale ? "true" : "false"}
                  {...register("spiciness_scale", {
                    required: true,
                  })}
                  id="piciness_scale-4"
                />
              </div>
              <div className="radio-element">
                <label htmlFor="spiciness_scale-5">5</label>
                <input
                  type="radio"
                  value={5}
                  aria-invalid={errors.spiciness_scale ? "true" : "false"}
                  {...register("spiciness_scale", {
                    required: true,
                  })}
                  id="piciness_scale-5"
                />
              </div>
              <div className="radio-element">
                <label htmlFor="spiciness_scale-6">6</label>
                <input
                  type="radio"
                  value={6}
                  aria-invalid={errors.spiciness_scale ? "true" : "false"}
                  {...register("spiciness_scale", {
                    required: true,
                  })}
                  id="piciness_scale-6"
                />
              </div>
              <div className="radio-element">
                <label htmlFor="spiciness_scale-7">7</label>
                <input
                  type="radio"
                  value={7}
                  aria-invalid={errors.spiciness_scale ? "true" : "false"}
                  {...register("spiciness_scale", {
                    required: true,
                  })}
                  id="piciness_scale-7"
                />
              </div>
              <div className="radio-element">
                <label htmlFor="spiciness_scale-8">8</label>
                <input
                  type="radio"
                  value={8}
                  aria-invalid={errors.spiciness_scale ? "true" : "false"}
                  {...register("spiciness_scale", {
                    required: true,
                  })}
                  id="piciness_scale-8"
                />
              </div>
              <div className="radio-element">
                <label htmlFor="spiciness_scale-9">9</label>
                <input
                  type="radio"
                  value={9}
                  aria-invalid={errors.spiciness_scale ? "true" : "false"}
                  {...register("spiciness_scale", {
                    required: true,
                  })}
                  id="piciness_scale-9"
                />
              </div>
              <div className="radio-element">
                <label htmlFor="spiciness_scale-10">10</label>
                <input
                  type="radio"
                  value={10}
                  aria-invalid={errors.spiciness_scale ? "true" : "false"}
                  {...register("spiciness_scale", {
                    required: true,
                  })}
                  id="piciness_scale-10"
                />
              </div>
            </div>
            {errors.spiciness_scale?.type === "required" && (
              <p className="alert" role="alert">
                Spiciness scale is required!
              </p>
            )}
          </div>
        )}
        {type === "sandwich" && (
          <>
            <label htmlFor="slices_of_bread">Slices Of Bread:</label>
            <input
              id="slices_of_bread"
              placeholder="Number of slices of bread"
              type="number"
              min={1}
              max={24}
              aria-invalid={errors.slices_of_bread ? "true" : "false"}
              {...register("slices_of_bread", {
                required: true,
              })}
            />
            {errors.slices_of_bread?.type === "required" && (
              <p className="alert" role="alert">
                Number of slices of bread is required!
              </p>
            )}
          </>
        )}
        <input type="submit" />
      </form>
    </div>
  );
}
// write a readme
//22h - writing
