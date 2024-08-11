import React from 'react'

import { Controller, ControllerProps as ControllerPropsRHF, FieldValues } from 'react-hook-form'

import TextField, { TextFieldProps } from '../../TextField'

export type TextFieldControllerProps<T extends FieldValues> = TextFieldProps & {
  controllerProps: Omit<ControllerPropsRHF<T>, 'render'>
}

const TextFieldController = <T extends FieldValues>({
  controllerProps,
  ...textFieldProps
}: TextFieldControllerProps<T>) => {
  return (
    <Controller
      {...controllerProps}
      render={({ field }) => {
        return <TextField {...textFieldProps} onChange={field.onChange} value={field.value ?? ''} />
      }}
    />
  )
}

export default TextFieldController
