import { useState } from "react";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "@mui/material";

const schema = yup
  .object({
    firstName: yup.string().required("enter correctly"),
    lastName: yup.string().required("enter correctly"),
    phoneNumber: yup.number().typeError("enter your phone number"),
  })
  .required();



const Form = () => {


  const defaultValues = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
  };

  const { control, formState, handleSubmit, register } = useForm({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, errors } = formState;
  const onSubmit = (data) => console.log(data);
  
  return (
    <>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              required
              error={!!errors.firstName}
              helperText={errors?.firstName?.message}
              label="firstName"
            />
          )}
        />
        <Controller
          name="lastName"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              required
              error={!!errors.lastName}
              helperText={errors?.lastName?.message}
              label="lastName"
            />
          )}
        />
        <Controller
          name="phoneNumber"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              required
              error={!!errors.phoneNumber}
              helperText={errors?.phoneNumber?.message}
              label="phoneNumber"
            />
          )}
        />
        <Button variant="contained">Send</Button>
      </form>
    </>
  );
};
export default Form;
