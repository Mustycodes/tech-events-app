import { ReactNode } from "react"

const FloatingLabelInput = ({children}:{children: ReactNode}) => {
  return (
    <div className="text-input border-2">
     {children}
    </div>
  )
}

export default FloatingLabelInput
