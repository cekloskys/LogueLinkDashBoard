/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Blocks } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BlocksUpdateFormInputValues = {
    hour?: number;
};
export declare type BlocksUpdateFormValidationValues = {
    hour?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BlocksUpdateFormOverridesProps = {
    BlocksUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    hour?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BlocksUpdateFormProps = React.PropsWithChildren<{
    overrides?: BlocksUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    blocks?: Blocks;
    onSubmit?: (fields: BlocksUpdateFormInputValues) => BlocksUpdateFormInputValues;
    onSuccess?: (fields: BlocksUpdateFormInputValues) => void;
    onError?: (fields: BlocksUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BlocksUpdateFormInputValues) => BlocksUpdateFormInputValues;
    onValidate?: BlocksUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BlocksUpdateForm(props: BlocksUpdateFormProps): React.ReactElement;
