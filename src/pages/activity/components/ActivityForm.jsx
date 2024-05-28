import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as y from "yup";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { IconRestore } from "@tabler/icons-react";
import { IconDeviceFloppy } from "@tabler/icons-react";
import { useEffect } from "react";
import axiosInstance from "../../../api/axosInstance";
import { useState } from "react";

const schema = y.object({
  task: y.string().required("Task is required"),
  description: y.string().required("Description is required"),
  country: y.string().required("Country is required"),
});

export default function ActivityForm() {
  const navigate = useNavigate();

  const [countries, setCountries] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      task: "",
      description: "",
      country: "",
      status: false,
    },
  });

  const generateCountries = async () => {
    try {
        const response = await axiosInstance.get("/v1/countries?");
        const countryData = Object.values(response.data.data).map(value => value.country);

        console.log(countryData)
        setCountries(countryData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
  }

  const onSubmit = async (data) => {
    if (data.id) {
      dispatch(updateTodo(data));
      reset();
    } else {
      const todo = {
        ...data,
        id: new Date().getMilliseconds().toString(),
      };
      dispatch(addTodo(todo));
    }
  };

  useEffect(() => {
    generateCountries();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="shadow-sm p-4 rounded-4">
        <h3>Create Task</h3>
        <div className="mb-3">
          <label htmlFor="task" className="form-label">
            Task
          </label>
          <input
            {...register("task")}
            type="text"
            className={`form-control ${errors.task && `is-invalid`}`}
            id="task"
            name="task"
            rows="3"
          />

          <div className="invalid-feedback">{errors.task}</div>

          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            {...register("description")}
            className={`form-control ${errors.description && `is-invalid`}`}
            name="description"
            id="description"
            rows="3"
          />

          <div className="invalid-feedback">{errors.country}</div>

          <label htmlFor="country" className="form-label">
            Country
          </label>
          <select
          {...register("country")}
          className={`form-control ${errors.country && `is-invalid`}`}
          id="country"
        >
          <option value="">Select a country</option>
          {countries.map((country, index) => (
            <option key={index} value={country} style={{ color: 'black' }}>
              {country}
            </option>
          ))}
        </select>

          <div className="invalid-feedback">{errors.country}</div>
        </div>
        <div className="form-check">
          <input
            {...register("status")}
            className="form-check-input"
            type="checkbox"
            id="status"
          />
          <label className="form-check-label" htmlFor="status">
            Completed
          </label>
        </div>
        <div className="text-end">
          <button
            type="button"
            className="btn btn-danger me-2 gap-2 align-middle"
            onClick={reset}
          >
            <i style={{ color: "white" }}>
              <IconRestore />
              Reset
            </i>
          </button>
          <button
            type="submit"
            className="btn btn-primary me-2 gap-2 align-middle"
          >
            <i>
              <IconDeviceFloppy />
              Submit
            </i>
          </button>
        </div>
      </form>
    </>
  );
}
