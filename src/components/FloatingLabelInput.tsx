import { ReactNode } from "react"

const FloatingLabelInput = ({children}:{children: ReactNode}) => {
  return (
    <div className="text-input">
     {children}
    </div>
  )
}

export default FloatingLabelInput
