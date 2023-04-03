/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Times } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TimesUpdateFormInputValues = {
    time?: string;
};
export declare type TimesUpdateFormValidationValues = {
    time?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TimesUpdateFormOverridesProps = {
    TimesUpdateFormGrid?: FormProps<GridProps>;
    time?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TimesUpdateFormProps = React.PropsWithChildren<{
    overrides?: TimesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    times?: Times;
    onSubmit?: (fields: TimesUpdateFormInputValues) => TimesUpdateFormInputValues;
    onSuccess?: (fields: TimesUpdateFormInputValues) => void;
    onError?: (fields: TimesUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: TimesUpdateFormInputValues) => TimesUpdateFormInputValues;
    onValidate?: TimesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TimesUpdateForm(props: TimesUpdateFormProps): React.ReactElement;
