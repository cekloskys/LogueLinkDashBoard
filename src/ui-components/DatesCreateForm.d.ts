/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DatesCreateFormInputValues = {
    date?: string;
};
export declare type DatesCreateFormValidationValues = {
    date?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DatesCreateFormOverridesProps = {
    DatesCreateFormGrid?: FormProps<GridProps>;
    date?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DatesCreateFormProps = React.PropsWithChildren<{
    overrides?: DatesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DatesCreateFormInputValues) => DatesCreateFormInputValues;
    onSuccess?: (fields: DatesCreateFormInputValues) => void;
    onError?: (fields: DatesCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: DatesCreateFormInputValues) => DatesCreateFormInputValues;
    onValidate?: DatesCreateFormValidationValues;
} & React.CSSProperties>;
export default function DatesCreateForm(props: DatesCreateFormProps): React.ReactElement;
