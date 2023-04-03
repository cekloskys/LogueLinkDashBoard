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
export declare type LinksCreateFormInputValues = {
    uri?: string;
    title?: string;
};
export declare type LinksCreateFormValidationValues = {
    uri?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LinksCreateFormOverridesProps = {
    LinksCreateFormGrid?: FormProps<GridProps>;
    uri?: FormProps<TextFieldProps>;
    title?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LinksCreateFormProps = React.PropsWithChildren<{
    overrides?: LinksCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LinksCreateFormInputValues) => LinksCreateFormInputValues;
    onSuccess?: (fields: LinksCreateFormInputValues) => void;
    onError?: (fields: LinksCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: LinksCreateFormInputValues) => LinksCreateFormInputValues;
    onValidate?: LinksCreateFormValidationValues;
} & React.CSSProperties>;
export default function LinksCreateForm(props: LinksCreateFormProps): React.ReactElement;
