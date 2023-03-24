/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TimesCreateFormInputValues = {
    time?: string;
};
export declare type TimesCreateFormValidationValues = {
    time?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TimesCreateFormOverridesProps = {
    TimesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    time?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TimesCreateFormProps = React.PropsWithChildren<{
    overrides?: TimesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TimesCreateFormInputValues) => TimesCreateFormInputValues;
    onSuccess?: (fields: TimesCreateFormInputValues) => void;
    onError?: (fields: TimesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TimesCreateFormInputValues) => TimesCreateFormInputValues;
    onValidate?: TimesCreateFormValidationValues;
} & React.CSSProperties>;
export default function TimesCreateForm(props: TimesCreateFormProps): React.ReactElement;
