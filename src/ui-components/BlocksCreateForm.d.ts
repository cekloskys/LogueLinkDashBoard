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
export declare type BlocksCreateFormInputValues = {
    hour?: number;
};
export declare type BlocksCreateFormValidationValues = {
    hour?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BlocksCreateFormOverridesProps = {
    BlocksCreateFormGrid?: FormProps<GridProps>;
    hour?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BlocksCreateFormProps = React.PropsWithChildren<{
    overrides?: BlocksCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BlocksCreateFormInputValues) => BlocksCreateFormInputValues;
    onSuccess?: (fields: BlocksCreateFormInputValues) => void;
    onError?: (fields: BlocksCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: BlocksCreateFormInputValues) => BlocksCreateFormInputValues;
    onValidate?: BlocksCreateFormValidationValues;
} & React.CSSProperties>;
export default function BlocksCreateForm(props: BlocksCreateFormProps): React.ReactElement;
