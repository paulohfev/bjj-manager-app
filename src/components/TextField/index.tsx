import { TextField as MUITextField, TextFieldProps as MUITextFieldProps } from '@mui/material'

import { InputSize } from '@/constants/inputSettings'

export enum TextFieldType {
  text = 'text',
  password = 'password',
  email = 'email',
}

export type TextFieldProps = Omit<MUITextFieldProps, 'size'> & {
  size?: InputSize
}

const TextField: React.FC<TextFieldProps> = ({ size = InputSize.medium, ...props }) => {
  return <MUITextField {...props} size={size} sx={{ width: '100%' }} />
}

export default TextField
