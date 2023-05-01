/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Dates } from "../models";
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
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DatesUpdateFormOverridesProps = {
    DatesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DatesUpdateFormProps = React.PropsWithChildren<{
    overrides?: DatesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    dates?: Dates;
    onSubmit?: (fields: DatesUpdateFormInputValues) => DatesUpdateFormInputValues;
    onSuccess?: (fields: DatesUpdateFormInputValues) => void;
    onError?: (fields: DatesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DatesUpdateFormInputValues) => DatesUpdateFormInputValues;
    onValidate?: DatesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DatesUpdateForm(props: DatesUpdateFormProps): React.ReactElement;
