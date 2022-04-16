const navigation = slider => {
   let wrapper, dots, arrowLeft, arrowRight

   const markup = remove => {
      wrapperMarkup(remove)
      dotMarkup(remove)
      arrowMarkup(remove)
   }

   const removeElement = elment => {
      elment.parentNode.removeChild(elment)
   }

   const createDiv = className => {
      var div = document.createElement('div')
      var classNames = className.split(' ')
      classNames.forEach(name => div.classList.add(name))
      return div
   }

   const arrowMarkup = remove => {
      if (remove) {
         removeElement(arrowLeft)
         removeElement(arrowRight)
         return
      }
      arrowLeft = createDiv('arrow arrow--left')
      arrowLeft.addEventListener('click', () => slider.prev())
      arrowRight = createDiv('arrow arrow--right')
      arrowRight.addEventListener('click', () => slider.next())

      wrapper.appendChild(arrowLeft)
      wrapper.appendChild(arrowRight)
   }

   function wrapperMarkup(remove) {
      if (remove) {
         var parent = wrapper.parentNode
         while (wrapper.firstChild) parent.insertBefore(wrapper.firstChild, wrapper)
         removeElement(wrapper)
         return
      }
      wrapper = createDiv('navigation-wrapper')
      slider.container.parentNode.appendChild(wrapper)
      wrapper.appendChild(slider.container)
   }

   function dotMarkup(remove) {
      if (remove) {
         removeElement(dots)
         return
      }
      dots = createDiv('dots')
      slider.track.details.slides.forEach((_e, idx) => {
         var dot = createDiv('dot')
         dot.addEventListener('click', () => slider.moveToIdx(idx))
         dots.appendChild(dot)
      })
      wrapper.appendChild(dots)
   }

   function updateClasses() {
      var slide = slider.track.details.rel
      slide === 0 ? arrowLeft.classList.add('arrow--disabled') : arrowLeft.classList.remove('arrow--disabled')
      slide === slider.track.details.slides.length - 1 ? arrowRight.classList.add('arrow--disabled') : arrowRight.classList.remove('arrow--disabled')
      Array.from(dots.children).forEach(function (dot, idx) {
         idx === slide ? dot.classList.add('dot--active') : dot.classList.remove('dot--active')
      })
   }

   slider.on('created', () => {
      markup()
      updateClasses()
   })
   slider.on('optionsChanged', () => {
      console.log(2)
      markup(true)
      markup()
      updateClasses()
   })
   slider.on('slideChanged', () => {
      updateClasses()
   })
   slider.on('destroyed', () => {
      markup(true)
   })
}

var slider = new KeenSlider(
   '#my-keen-slider',
   {
      loop: true,
      mode: 'snap',
      autoplay: true,
      breakpoints: {
         '(min-width: 768px)': {
            slides: { perView: 2, spacing: 15 },
         },
         '(min-width: 1000px)': {
            slides: { perView: 3, spacing: 30 },
         },
      },
      slides: { perView: 1 },
   },
   [
      navigation,
      slider => {
         let timeout
         let mouseOver = false
         function clearNextTimeout() {
            clearTimeout(timeout)
         }
         function nextTimeout() {
            clearTimeout(timeout)
            if (mouseOver) return
            timeout = setTimeout(() => {
               slider.next()
            }, 2500)
         }
         slider.on('created', () => {
            slider.container.addEventListener('mouseover', () => {
               mouseOver = true
               clearNextTimeout()
            })
            slider.container.addEventListener('mouseout', () => {
               mouseOver = false
               nextTimeout()
            })
            nextTimeout()
         })
         slider.on('dragStarted', clearNextTimeout)
         slider.on('animationEnded', nextTimeout)
         slider.on('updated', nextTimeout)
      },
   ]
)

// Feature slider

var slider = new KeenSlider(
   '#my-keen-slider2',
   {
      loop: true,
      mode: 'snap',
      autoplay: true,
      slides: { perView: 1 },
   },
   [
    //   navigation,
      slider => {
         let timeout
         let mouseOver = false
         function clearNextTimeout() {
            clearTimeout(timeout)
         }
         function nextTimeout() {
            clearTimeout(timeout)
            if (mouseOver) return
            timeout = setTimeout(() => {
               slider.next()
            }, 4500)
         }
         slider.on('created', () => {
            slider.container.addEventListener('mouseover', () => {
               mouseOver = true
               clearNextTimeout()
            })
            slider.container.addEventListener('mouseout', () => {
               mouseOver = false
               nextTimeout()
            })
            nextTimeout()
         })
         slider.on('dragStarted', clearNextTimeout)
         slider.on('animationEnded', nextTimeout)
         slider.on('updated', nextTimeout)
      },
   ]
)


// testimonial
var slider = new KeenSlider(
   '#my-keen-slider3',
   {
      loop: true,
      mode: 'snap',
      autoplay: true,
      breakpoints: {
         '(min-width: 768px)': {
            slides: { perView: 2, spacing: 15 },
         },
         '(min-width: 1000px)': {
            slides: { perView: 3, spacing: 30 },
         },
      },
      slides: { perView: 1 },
   },
   [
      navigation,
      slider => {
         let timeout
         let mouseOver = false
         function clearNextTimeout() {
            clearTimeout(timeout)
         }
         function nextTimeout() {
            clearTimeout(timeout)
            if (mouseOver) return
            timeout = setTimeout(() => {
               slider.next()
            }, 2500)
         }
         slider.on('created', () => {
            slider.container.addEventListener('mouseover', () => {
               mouseOver = true
               clearNextTimeout()
            })
            slider.container.addEventListener('mouseout', () => {
               mouseOver = false
               nextTimeout()
            })
            nextTimeout()
         })
         slider.on('dragStarted', clearNextTimeout)
         slider.on('animationEnded', nextTimeout)
         slider.on('updated', nextTimeout)
      },
   ]
)


// Blog
var slider = new KeenSlider(
   '#my-keen-slider4',
   {
      loop: true,
      mode: 'snap',
      autoplay: true,
      breakpoints: {
         '(min-width: 768px)': {
            slides: { perView: 2, spacing: 15 },
         },
         '(min-width: 1000px)': {
            slides: { perView: 3, spacing: 30 },
         },
      },
      slides: { perView: 1 },
   },
   [
      slider => {
         let timeout
         let mouseOver = false
         function clearNextTimeout() {
            clearTimeout(timeout)
         }
         function nextTimeout() {
            clearTimeout(timeout)
            if (mouseOver) return
            timeout = setTimeout(() => {
               slider.next()
            }, 2500)
         }
         slider.on('created', () => {
            slider.container.addEventListener('mouseover', () => {
               mouseOver = true
               clearNextTimeout()
            })
            slider.container.addEventListener('mouseout', () => {
               mouseOver = false
               nextTimeout()
            })
            nextTimeout()
         })
         slider.on('dragStarted', clearNextTimeout)
         slider.on('animationEnded', nextTimeout)
         slider.on('updated', nextTimeout)
      },
   ]
)