import { CircularProgress, Button as MUIButton, ButtonProps as MUIButtonProps } from '@mui/material'

export type ButtonProps = MUIButtonProps & {
  isLoading?: boolean
}

const Button: React.FC<ButtonProps> = ({ children, disabled, isLoading, ...props }) => {
  return (
    <MUIButton disabled={isLoading || disabled} {...props}>
      {isLoading ? <CircularProgress size={25} /> : children}
    </MUIButton>
  )
}

export default Button
