/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Rooms } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function RoomsUpdateForm(props) {
  const {
    id: idProp,
    rooms,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    room: "",
  };
  const [room, setRoom] = React.useState(initialValues.room);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = roomsRecord
      ? { ...initialValues, ...roomsRecord }
      : initialValues;
    setRoom(cleanValues.room);
    setErrors({});
  };
  const [roomsRecord, setRoomsRecord] = React.useState(rooms);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Rooms, idProp) : rooms;
      setRoomsRecord(record);
    };
    queryData();
  }, [idProp, rooms]);
  React.useEffect(resetStateValues, [roomsRecord]);
  const validations = {
    room: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          room,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Rooms.copyOf(roomsRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "RoomsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Room"
        isRequired={true}
        isReadOnly={false}
        value={room}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              room: value,
            };
            const result = onChange(modelFields);
            value = result?.room ?? value;
          }
          if (errors.room?.hasError) {
            runValidationTasks("room", value);
          }
          setRoom(value);
        }}
        onBlur={() => runValidationTasks("room", room)}
        errorMessage={errors.room?.errorMessage}
        hasError={errors.room?.hasError}
        {...getOverrideProps(overrides, "room")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || rooms)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || rooms) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
