import _ from 'lodash'
import { useLayoutEffect, useRef, useState } from 'react'

/**
 * Semantic UI's dropdown has the dropdown menu with `position: absolute`.
 * When the `inlineMenu` prop is enabled we need the menu to be rendered
 * directly below the trigger, instead of inside of a popup box. In this
 * case the menu shouldn't show up over elements that are below the dropdown,
 * it needs to behave as if it was `position: static`. Unfortunately, we
 * can't just make it static because of the structure of the other elements
 * inside dropdown (trigger, input, labels, etc).
 *
 * To fix this, we add a wrapper around Semantic's dropdown and set the
 * wrapper's margin bottom to the dropdown menu's height, making it act
 * as if the menu was statically positioned. We update this height
 * if the number of given options changes (which can happen when they
 * come from an api call, for example).
 */
const useInlineMenuWrapper = options => {
  const wrapperRef = useRef()
  const optionsCountRef = useRef()
  const [wrapperMargin, setWrapperMargin] = useState()

  useLayoutEffect(() => {
    const { current: wrapperEl } = wrapperRef
    const { current: prevOptionsCount } = optionsCountRef
    if (wrapperEl && options && prevOptionsCount !== options.length) {
      const menuEl = wrapperEl.querySelector('.menu')

      const { marginTop } = window.getComputedStyle(menuEl)
      const marginTopNumber = _.toNumber(marginTop.split('px')[0])

      const newMargin = menuEl.offsetHeight + marginTopNumber
      if (newMargin !== wrapperMargin) {
        setWrapperMargin(newMargin)
      }
      optionsCountRef.current = options.length
    }
  }, [options, wrapperMargin])

  return [wrapperRef, wrapperMargin]
}

export default useInlineMenuWrapper
