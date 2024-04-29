'use client'
import { useRef } from 'react'
export default function Scroll() {
  let ref1 = useRef()
  let ref2 = useRef()

  function scrollTo(ref) {
    if (!ref.current) return
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <div>
      <button onClick={() => scrollTo(ref1)}>First element anchor</button>
      <button onClick={() => scrollTo(ref2)}>Second element anchor</button>
      <div style={{ height: '800px' }}>Just a spacer</div>
      <div style={{ height: '800px' }} ref={ref1}>
        Element 1
      </div>
      <div style={{ height: '800px' }} ref={ref2}>
        Element 2
      </div>
    </div>
  )
}
