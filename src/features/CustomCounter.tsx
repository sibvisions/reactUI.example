/** React import */
import * as React from 'react'

/** Scss import */
import './CustomCounter.scss'

const { useState, useEffect } = React

/** Simple counter */
const Counter: React.FC<{
  count: number
  className: string
}> = ({ count, className }) => (
  <div className={`counter ${className}`}>
    <p
      key={count}
      className={`counter__count ${className ? className + '__count' : ''}`}
    >
      {count}
    </p>
  </div>
)

export type ICounterProps = {
  className?: string
}

/** 
 * This is an example for either a custom-screen or a custom component.
 * As a custom-screen, the entire available "main" screen will be filled with this component as if it was a workscreen.
 * As a custom-component, this component will replace the component specified in array in your main file e.g. "App". 
 * The layout will then recalculate with your custom component.
 */
const CustomCounter: React.FC<ICounterProps> = ({ className = '' }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (count > 99) return setCount(0)

      setCount(count + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [count, setCount])

  return <Counter className={className} count={count} />
}
export default CustomCounter