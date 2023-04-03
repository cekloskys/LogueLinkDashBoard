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
export declare type TutorialsCreateFormInputValues = {
    uri?: string;
    title?: string;
};
export declare type TutorialsCreateFormValidationValues = {
    uri?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TutorialsCreateFormOverridesProps = {
    TutorialsCreateFormGrid?: FormProps<GridProps>;
    uri?: FormProps<TextFieldProps>;
    title?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TutorialsCreateFormProps = React.PropsWithChildren<{
    overrides?: TutorialsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TutorialsCreateFormInputValues) => TutorialsCreateFormInputValues;
    onSuccess?: (fields: TutorialsCreateFormInputValues) => void;
    onError?: (fields: TutorialsCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: TutorialsCreateFormInputValues) => TutorialsCreateFormInputValues;
    onValidate?: TutorialsCreateFormValidationValues;
} & React.CSSProperties>;
export default function TutorialsCreateForm(props: TutorialsCreateFormProps): React.ReactElement;
