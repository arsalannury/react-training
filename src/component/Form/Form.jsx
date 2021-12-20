import { useState } from "react";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "@mui/material";
import {Typography} from '@mui/material';
import {useStyles} from './FormStyle';

const schema = yup
  .object({
    firstName: yup.string().required("enter correctly"),
    lastName: yup.string().required("enter correctly"),
    phoneNumber: yup.number().typeError("enter your phone number"),
  })
  .required();

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 300px;
  margin: 60px 0 60px 0;
  position: relative;
`;

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
  const classes = useStyles()
  return (
    <>
     
      <form action="" onSubmit={handleSubmit(onSubmit)}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fillOpacity="0.2"
          d="M0,96L0,192L36.9,192L36.9,288L73.8,288L73.8,160L110.8,160L110.8,192L147.7,192L147.7,128L184.6,128L184.6,128L221.5,128L221.5,160L258.5,160L258.5,256L295.4,256L295.4,32L332.3,32L332.3,64L369.2,64L369.2,128L406.2,128L406.2,96L443.1,96L443.1,0L480,0L480,192L516.9,192L516.9,0L553.8,0L553.8,224L590.8,224L590.8,288L627.7,288L627.7,224L664.6,224L664.6,32L701.5,32L701.5,32L738.5,32L738.5,256L775.4,256L775.4,96L812.3,96L812.3,64L849.2,64L849.2,256L886.2,256L886.2,128L923.1,128L923.1,256L960,256L960,192L996.9,192L996.9,64L1033.8,64L1033.8,224L1070.8,224L1070.8,288L1107.7,288L1107.7,288L1144.6,288L1144.6,128L1181.5,128L1181.5,32L1218.5,32L1218.5,32L1255.4,32L1255.4,288L1292.3,288L1292.3,96L1329.2,96L1329.2,160L1366.2,160L1366.2,160L1403.1,160L1403.1,224L1440,224L1440,0L1403.1,0L1403.1,0L1366.2,0L1366.2,0L1329.2,0L1329.2,0L1292.3,0L1292.3,0L1255.4,0L1255.4,0L1218.5,0L1218.5,0L1181.5,0L1181.5,0L1144.6,0L1144.6,0L1107.7,0L1107.7,0L1070.8,0L1070.8,0L1033.8,0L1033.8,0L996.9,0L996.9,0L960,0L960,0L923.1,0L923.1,0L886.2,0L886.2,0L849.2,0L849.2,0L812.3,0L812.3,0L775.4,0L775.4,0L738.5,0L738.5,0L701.5,0L701.5,0L664.6,0L664.6,0L627.7,0L627.7,0L590.8,0L590.8,0L553.8,0L553.8,0L516.9,0L516.9,0L480,0L480,0L443.1,0L443.1,0L406.2,0L406.2,0L369.2,0L369.2,0L332.3,0L332.3,0L295.4,0L295.4,0L258.5,0L258.5,0L221.5,0L221.5,0L184.6,0L184.6,0L147.7,0L147.7,0L110.8,0L110.8,0L73.8,0L73.8,0L36.9,0L36.9,0L0,0L0,0Z"
        ></path>
      </svg>
        <Wrapper>
          <Typography className={classes.title_form}>React news send to to</Typography>
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
        </Wrapper>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fillOpacity="0.2"
          d="M0,96L0,192L36.9,192L36.9,288L73.8,288L73.8,160L110.8,160L110.8,192L147.7,192L147.7,128L184.6,128L184.6,128L221.5,128L221.5,160L258.5,160L258.5,256L295.4,256L295.4,32L332.3,32L332.3,64L369.2,64L369.2,128L406.2,128L406.2,96L443.1,96L443.1,0L480,0L480,192L516.9,192L516.9,0L553.8,0L553.8,224L590.8,224L590.8,288L627.7,288L627.7,224L664.6,224L664.6,32L701.5,32L701.5,32L738.5,32L738.5,256L775.4,256L775.4,96L812.3,96L812.3,64L849.2,64L849.2,256L886.2,256L886.2,128L923.1,128L923.1,256L960,256L960,192L996.9,192L996.9,64L1033.8,64L1033.8,224L1070.8,224L1070.8,288L1107.7,288L1107.7,288L1144.6,288L1144.6,128L1181.5,128L1181.5,32L1218.5,32L1218.5,32L1255.4,32L1255.4,288L1292.3,288L1292.3,96L1329.2,96L1329.2,160L1366.2,160L1366.2,160L1403.1,160L1403.1,224L1440,224L1440,320L1403.1,320L1403.1,320L1366.2,320L1366.2,320L1329.2,320L1329.2,320L1292.3,320L1292.3,320L1255.4,320L1255.4,320L1218.5,320L1218.5,320L1181.5,320L1181.5,320L1144.6,320L1144.6,320L1107.7,320L1107.7,320L1070.8,320L1070.8,320L1033.8,320L1033.8,320L996.9,320L996.9,320L960,320L960,320L923.1,320L923.1,320L886.2,320L886.2,320L849.2,320L849.2,320L812.3,320L812.3,320L775.4,320L775.4,320L738.5,320L738.5,320L701.5,320L701.5,320L664.6,320L664.6,320L627.7,320L627.7,320L590.8,320L590.8,320L553.8,320L553.8,320L516.9,320L516.9,320L480,320L480,320L443.1,320L443.1,320L406.2,320L406.2,320L369.2,320L369.2,320L332.3,320L332.3,320L295.4,320L295.4,320L258.5,320L258.5,320L221.5,320L221.5,320L184.6,320L184.6,320L147.7,320L147.7,320L110.8,320L110.8,320L73.8,320L73.8,320L36.9,320L36.9,320L0,320L0,320Z"
        ></path>
      </svg>
      </form>
     
    </>
  );
};
export default Form;
