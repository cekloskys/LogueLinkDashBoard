/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Links } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LinksUpdateFormInputValues = {
    uri?: string;
    title?: string;
};
export declare type LinksUpdateFormValidationValues = {
    uri?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LinksUpdateFormOverridesProps = {
    LinksUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uri?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LinksUpdateFormProps = React.PropsWithChildren<{
    overrides?: LinksUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    links?: Links;
    onSubmit?: (fields: LinksUpdateFormInputValues) => LinksUpdateFormInputValues;
    onSuccess?: (fields: LinksUpdateFormInputValues) => void;
    onError?: (fields: LinksUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LinksUpdateFormInputValues) => LinksUpdateFormInputValues;
    onValidate?: LinksUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LinksUpdateForm(props: LinksUpdateFormProps): React.ReactElement;
