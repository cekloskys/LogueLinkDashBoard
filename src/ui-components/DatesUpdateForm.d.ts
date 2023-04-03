/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Dates } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DatesUpdateFormInputValues = {
    date?: string;
};
export declare type DatesUpdateFormValidationValues = {
    date?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DatesUpdateFormOverridesProps = {
    DatesUpdateFormGrid?: FormProps<GridProps>;
    date?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DatesUpdateFormProps = React.PropsWithChildren<{
    overrides?: DatesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    dates?: Dates;
    onSubmit?: (fields: DatesUpdateFormInputValues) => DatesUpdateFormInputValues;
    onSuccess?: (fields: DatesUpdateFormInputValues) => void;
    onError?: (fields: DatesUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: DatesUpdateFormInputValues) => DatesUpdateFormInputValues;
    onValidate?: DatesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DatesUpdateForm(props: DatesUpdateFormProps): React.ReactElement;
