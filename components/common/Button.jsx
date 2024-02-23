import React from 'react'

function Button({children, type}) {
  switch(type) {
    case 'primary':
        return <button className="bg-[#BCECAC] rounded-[12px] p-[6px] w-full max-w-[200px]">{children}</button>
    case 'secondary':
        return <button className="border border-black rounded-[12px] p-[6px] w-full max-w-[200px]">{children}</button>
  }
}

export default Button