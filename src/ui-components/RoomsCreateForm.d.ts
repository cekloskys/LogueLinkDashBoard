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
export declare type RoomsCreateFormInputValues = {
    room?: string;
};
export declare type RoomsCreateFormValidationValues = {
    room?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RoomsCreateFormOverridesProps = {
    RoomsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    room?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RoomsCreateFormProps = React.PropsWithChildren<{
    overrides?: RoomsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RoomsCreateFormInputValues) => RoomsCreateFormInputValues;
    onSuccess?: (fields: RoomsCreateFormInputValues) => void;
    onError?: (fields: RoomsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RoomsCreateFormInputValues) => RoomsCreateFormInputValues;
    onValidate?: RoomsCreateFormValidationValues;
} & React.CSSProperties>;
export default function RoomsCreateForm(props: RoomsCreateFormProps): React.ReactElement;
