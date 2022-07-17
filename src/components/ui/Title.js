import React from 'react'

const Title = (props) => {
  return (
    <h3 className={`${props.className} text-sm font-semibold mb-3 px-6 md:px-0`}>{props.children}</h3>
  )
}

export default Title