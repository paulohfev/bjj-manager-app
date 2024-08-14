import { Button as MUIButton, ButtonProps as MUIButtonProps } from '@mui/material'

export type ButtonProps = MUIButtonProps

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <MUIButton {...props}>{children}</MUIButton>
}

export default Button
