/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Rooms } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RoomsUpdateFormInputValues = {
    room?: string;
};
export declare type RoomsUpdateFormValidationValues = {
    room?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RoomsUpdateFormOverridesProps = {
    RoomsUpdateFormGrid?: FormProps<GridProps>;
    room?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RoomsUpdateFormProps = React.PropsWithChildren<{
    overrides?: RoomsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    rooms?: Rooms;
    onSubmit?: (fields: RoomsUpdateFormInputValues) => RoomsUpdateFormInputValues;
    onSuccess?: (fields: RoomsUpdateFormInputValues) => void;
    onError?: (fields: RoomsUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: RoomsUpdateFormInputValues) => RoomsUpdateFormInputValues;
    onValidate?: RoomsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RoomsUpdateForm(props: RoomsUpdateFormProps): React.ReactElement;
