/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Tutorials } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TutorialsUpdateFormInputValues = {
    uri?: string;
    title?: string;
};
export declare type TutorialsUpdateFormValidationValues = {
    uri?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TutorialsUpdateFormOverridesProps = {
    TutorialsUpdateFormGrid?: FormProps<GridProps>;
    uri?: FormProps<TextFieldProps>;
    title?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TutorialsUpdateFormProps = React.PropsWithChildren<{
    overrides?: TutorialsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    tutorials?: Tutorials;
    onSubmit?: (fields: TutorialsUpdateFormInputValues) => TutorialsUpdateFormInputValues;
    onSuccess?: (fields: TutorialsUpdateFormInputValues) => void;
    onError?: (fields: TutorialsUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: TutorialsUpdateFormInputValues) => TutorialsUpdateFormInputValues;
    onValidate?: TutorialsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TutorialsUpdateForm(props: TutorialsUpdateFormProps): React.ReactElement;
