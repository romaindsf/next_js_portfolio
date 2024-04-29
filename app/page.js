'use client'
import styled from 'styled-components'
import { useRef, useEffect } from 'react'

const Nav = styled.nav`
  position: fixed;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  margin-left: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid black;
  border-radius: 10px;
`
const NavButton = styled.button`
  font-size: 16px;
`

export default function Home() {
  const accueilRef = useRef()
  const presentationRef = useRef()
  const realisationRef = useRef()
  const activitesRef = useRef()
  const competencesRef = useRef()
  const contactRef = useRef()

  const scrollToSection = (ref) => {
    if (ref.current) ref.current.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <>
      <header>
        <Nav>
          <NavButton onClick={() => scrollToSection(accueilRef)}>
            Accueil
          </NavButton>
          <NavButton onClick={() => scrollToSection(presentationRef)}>
            Présentation
          </NavButton>
          <NavButton onClick={() => scrollToSection(realisationRef)}>
            Réalisation
          </NavButton>
          <NavButton onClick={() => scrollToSection(activitesRef)}>
            Activités
          </NavButton>
          <NavButton onClick={() => scrollToSection(competencesRef)}>
            Compétences
          </NavButton>
          <NavButton onClick={() => scrollToSection(contactRef)}>
            Contact
          </NavButton>
          <NavButton onClick={() => scrollToSection(CVRef)}>CV</NavButton>
        </Nav>
      </header>
      <h1>Hello world !</h1>
      <section ref={accueilRef}>
        <h2>Accueil</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          vel lacus est. Nulla pretium, ex at porttitor efficitur, ex nunc
          euismod ligula, in malesuada neque magna at mauris. Sed at elementum
          urna. Donec lobortis tempus velit. Duis bibendum odio volutpat, ornare
          purus ut, pellentesque odio. Nullam quis diam vel ligula egestas
          lacinia et quis odio. Mauris aliquet venenatis erat, pulvinar
          malesuada ante pellentesque quis. Suspendisse tellus diam, venenatis
          et dignissim vel, viverra non magna. Interdum et malesuada fames ac
          ante ipsum primis in faucibus. Pellentesque suscipit malesuada
          pharetra. Duis ac ipsum eget erat dictum elementum. Nulla bibendum
          facilisis enim, ut iaculis justo pretium in. Integer blandit eget
          tortor ut commodo. Duis a aliquam mauris. Nulla facilisi. Aenean
          ultricies, turpis ut scelerisque elementum, justo libero malesuada
          lorem, in auctor dolor sapien vel augue. Etiam non lacinia sem. In et
          enim consectetur, mattis nisi quis, pharetra quam. Nam laoreet finibus
          orci, ac fringilla dolor vehicula id. In nec arcu vel metus iaculis
          ultricies a ut dolor. Suspendisse arcu justo, sollicitudin id lobortis
          et, fringilla nec leo. Sed quis enim a orci ultrices condimentum vitae
          id lectus. Ut in massa et leo interdum pulvinar quis volutpat erat.
          Sed nulla ante, fermentum a massa vel, volutpat posuere arcu. Etiam
          nunc ex, gravida vitae finibus in, egestas quis orci. Suspendisse
          feugiat risus ut orci tincidunt eleifend. Vestibulum sit amet arcu id
          orci vehicula commodo. Integer sodales elit ut risus volutpat
          sagittis. In ut risus sit amet dui lacinia dapibus. Praesent justo
          purus, varius ut metus at, molestie volutpat neque. Proin sapien
          libero, elementum at vehicula quis, facilisis vitae lorem. Nullam sit
          amet orci mi. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Vestibulum aliquet, purus et pulvinar mollis, est ex
          faucibus diam, quis mattis justo lorem eu tellus. Etiam quis elit
          ultrices, aliquam massa nec, imperdiet risus. Ut mi lectus, luctus non
          bibendum id, consectetur ut eros. Vestibulum ut odio fermentum,
          euismod ligula vitae, aliquet neque. Sed tempor vulputate erat, a
          interdum tellus semper sit amet. Nunc efficitur lacus consectetur,
          accumsan purus in, venenatis tortor. Curabitur auctor, diam
          scelerisque posuere semper, elit ipsum dignissim felis, eget lobortis
          nulla est sit amet tellus. Vivamus eget dignissim nisi. Integer magna
          dolor, eleifend ac ex in, sodales tincidunt orci. Vestibulum facilisis
          nibh et ante aliquam tempus. Nulla fermentum nunc vitae arcu dictum,
          sit amet sollicitudin ipsum condimentum. Duis vitae semper risus, eu
          egestas turpis. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Ut eu urna ac elit volutpat mollis ac sed neque. Nam porta
          ipsum quis nunc imperdiet, id fringilla lacus blandit. Nulla a euismod
          quam. Integer lorem eros, porta ac molestie non, efficitur non lacus.
          Mauris nulla mi, maximus at rutrum vitae, imperdiet sed odio. Maecenas
          blandit, ipsum id euismod hendrerit, quam erat efficitur leo, vitae
          finibus enim lorem quis justo.
        </p>
      </section>
      <section ref={presentationRef}>
        <h2>Présentation</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          vel lacus est. Nulla pretium, ex at porttitor efficitur, ex nunc
          euismod ligula, in malesuada neque magna at mauris. Sed at elementum
          urna. Donec lobortis tempus velit. Duis bibendum odio volutpat, ornare
          purus ut, pellentesque odio. Nullam quis diam vel ligula egestas
          lacinia et quis odio. Mauris aliquet venenatis erat, pulvinar
          malesuada ante pellentesque quis. Suspendisse tellus diam, venenatis
          et dignissim vel, viverra non magna. Interdum et malesuada fames ac
          ante ipsum primis in faucibus. Pellentesque suscipit malesuada
          pharetra. Duis ac ipsum eget erat dictum elementum. Nulla bibendum
          facilisis enim, ut iaculis justo pretium in. Integer blandit eget
          tortor ut commodo. Duis a aliquam mauris. Nulla facilisi. Aenean
          ultricies, turpis ut scelerisque elementum, justo libero malesuada
          lorem, in auctor dolor sapien vel augue. Etiam non lacinia sem. In et
          enim consectetur, mattis nisi quis, pharetra quam. Nam laoreet finibus
          orci, ac fringilla dolor vehicula id. In nec arcu vel metus iaculis
          ultricies a ut dolor. Suspendisse arcu justo, sollicitudin id lobortis
          et, fringilla nec leo. Sed quis enim a orci ultrices condimentum vitae
          id lectus. Ut in massa et leo interdum pulvinar quis volutpat erat.
          Sed nulla ante, fermentum a massa vel, volutpat posuere arcu. Etiam
          nunc ex, gravida vitae finibus in, egestas quis orci. Suspendisse
          feugiat risus ut orci tincidunt eleifend. Vestibulum sit amet arcu id
          orci vehicula commodo. Integer sodales elit ut risus volutpat
          sagittis. In ut risus sit amet dui lacinia dapibus. Praesent justo
          purus, varius ut metus at, molestie volutpat neque. Proin sapien
          libero, elementum at vehicula quis, facilisis vitae lorem. Nullam sit
          amet orci mi. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Vestibulum aliquet, purus et pulvinar mollis, est ex
          faucibus diam, quis mattis justo lorem eu tellus. Etiam quis elit
          ultrices, aliquam massa nec, imperdiet risus. Ut mi lectus, luctus non
          bibendum id, consectetur ut eros. Vestibulum ut odio fermentum,
          euismod ligula vitae, aliquet neque. Sed tempor vulputate erat, a
          interdum tellus semper sit amet. Nunc efficitur lacus consectetur,
          accumsan purus in, venenatis tortor. Curabitur auctor, diam
          scelerisque posuere semper, elit ipsum dignissim felis, eget lobortis
          nulla est sit amet tellus. Vivamus eget dignissim nisi. Integer magna
          dolor, eleifend ac ex in, sodales tincidunt orci. Vestibulum facilisis
          nibh et ante aliquam tempus. Nulla fermentum nunc vitae arcu dictum,
          sit amet sollicitudin ipsum condimentum. Duis vitae semper risus, eu
          egestas turpis. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Ut eu urna ac elit volutpat mollis ac sed neque. Nam porta
          ipsum quis nunc imperdiet, id fringilla lacus blandit. Nulla a euismod
          quam. Integer lorem eros, porta ac molestie non, efficitur non lacus.
          Mauris nulla mi, maximus at rutrum vitae, imperdiet sed odio. Maecenas
          blandit, ipsum id euismod hendrerit, quam erat efficitur leo, vitae
          finibus enim lorem quis justo.
        </p>
      </section>
      <section ref={realisationRef}>
        <h2>Réalisation</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          vel lacus est. Nulla pretium, ex at porttitor efficitur, ex nunc
          euismod ligula, in malesuada neque magna at mauris. Sed at elementum
          urna. Donec lobortis tempus velit. Duis bibendum odio volutpat, ornare
          purus ut, pellentesque odio. Nullam quis diam vel ligula egestas
          lacinia et quis odio. Mauris aliquet venenatis erat, pulvinar
          malesuada ante pellentesque quis. Suspendisse tellus diam, venenatis
          et dignissim vel, viverra non magna. Interdum et malesuada fames ac
          ante ipsum primis in faucibus. Pellentesque suscipit malesuada
          pharetra. Duis ac ipsum eget erat dictum elementum. Nulla bibendum
          facilisis enim, ut iaculis justo pretium in. Integer blandit eget
          tortor ut commodo. Duis a aliquam mauris. Nulla facilisi. Aenean
          ultricies, turpis ut scelerisque elementum, justo libero malesuada
          lorem, in auctor dolor sapien vel augue. Etiam non lacinia sem. In et
          enim consectetur, mattis nisi quis, pharetra quam. Nam laoreet finibus
          orci, ac fringilla dolor vehicula id. In nec arcu vel metus iaculis
          ultricies a ut dolor. Suspendisse arcu justo, sollicitudin id lobortis
          et, fringilla nec leo. Sed quis enim a orci ultrices condimentum vitae
          id lectus. Ut in massa et leo interdum pulvinar quis volutpat erat.
          Sed nulla ante, fermentum a massa vel, volutpat posuere arcu. Etiam
          nunc ex, gravida vitae finibus in, egestas quis orci. Suspendisse
          feugiat risus ut orci tincidunt eleifend. Vestibulum sit amet arcu id
          orci vehicula commodo. Integer sodales elit ut risus volutpat
          sagittis. In ut risus sit amet dui lacinia dapibus. Praesent justo
          purus, varius ut metus at, molestie volutpat neque. Proin sapien
          libero, elementum at vehicula quis, facilisis vitae lorem. Nullam sit
          amet orci mi. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Vestibulum aliquet, purus et pulvinar mollis, est ex
          faucibus diam, quis mattis justo lorem eu tellus. Etiam quis elit
          ultrices, aliquam massa nec, imperdiet risus. Ut mi lectus, luctus non
          bibendum id, consectetur ut eros. Vestibulum ut odio fermentum,
          euismod ligula vitae, aliquet neque. Sed tempor vulputate erat, a
          interdum tellus semper sit amet. Nunc efficitur lacus consectetur,
          accumsan purus in, venenatis tortor. Curabitur auctor, diam
          scelerisque posuere semper, elit ipsum dignissim felis, eget lobortis
          nulla est sit amet tellus. Vivamus eget dignissim nisi. Integer magna
          dolor, eleifend ac ex in, sodales tincidunt orci. Vestibulum facilisis
          nibh et ante aliquam tempus. Nulla fermentum nunc vitae arcu dictum,
          sit amet sollicitudin ipsum condimentum. Duis vitae semper risus, eu
          egestas turpis. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Ut eu urna ac elit volutpat mollis ac sed neque. Nam porta
          ipsum quis nunc imperdiet, id fringilla lacus blandit. Nulla a euismod
          quam. Integer lorem eros, porta ac molestie non, efficitur non lacus.
          Mauris nulla mi, maximus at rutrum vitae, imperdiet sed odio. Maecenas
          blandit, ipsum id euismod hendrerit, quam erat efficitur leo, vitae
          finibus enim lorem quis justo.
        </p>
      </section>
      <section ref={activitesRef}>
        <h2>Activités</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          vel lacus est. Nulla pretium, ex at porttitor efficitur, ex nunc
          euismod ligula, in malesuada neque magna at mauris. Sed at elementum
          urna. Donec lobortis tempus velit. Duis bibendum odio volutpat, ornare
          purus ut, pellentesque odio. Nullam quis diam vel ligula egestas
          lacinia et quis odio. Mauris aliquet venenatis erat, pulvinar
          malesuada ante pellentesque quis. Suspendisse tellus diam, venenatis
          et dignissim vel, viverra non magna. Interdum et malesuada fames ac
          ante ipsum primis in faucibus. Pellentesque suscipit malesuada
          pharetra. Duis ac ipsum eget erat dictum elementum. Nulla bibendum
          facilisis enim, ut iaculis justo pretium in. Integer blandit eget
          tortor ut commodo. Duis a aliquam mauris. Nulla facilisi. Aenean
          ultricies, turpis ut scelerisque elementum, justo libero malesuada
          lorem, in auctor dolor sapien vel augue. Etiam non lacinia sem. In et
          enim consectetur, mattis nisi quis, pharetra quam. Nam laoreet finibus
          orci, ac fringilla dolor vehicula id. In nec arcu vel metus iaculis
          ultricies a ut dolor. Suspendisse arcu justo, sollicitudin id lobortis
          et, fringilla nec leo. Sed quis enim a orci ultrices condimentum vitae
          id lectus. Ut in massa et leo interdum pulvinar quis volutpat erat.
          Sed nulla ante, fermentum a massa vel, volutpat posuere arcu. Etiam
          nunc ex, gravida vitae finibus in, egestas quis orci. Suspendisse
          feugiat risus ut orci tincidunt eleifend. Vestibulum sit amet arcu id
          orci vehicula commodo. Integer sodales elit ut risus volutpat
          sagittis. In ut risus sit amet dui lacinia dapibus. Praesent justo
          purus, varius ut metus at, molestie volutpat neque. Proin sapien
          libero, elementum at vehicula quis, facilisis vitae lorem. Nullam sit
          amet orci mi. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Vestibulum aliquet, purus et pulvinar mollis, est ex
          faucibus diam, quis mattis justo lorem eu tellus. Etiam quis elit
          ultrices, aliquam massa nec, imperdiet risus. Ut mi lectus, luctus non
          bibendum id, consectetur ut eros. Vestibulum ut odio fermentum,
          euismod ligula vitae, aliquet neque. Sed tempor vulputate erat, a
          interdum tellus semper sit amet. Nunc efficitur lacus consectetur,
          accumsan purus in, venenatis tortor. Curabitur auctor, diam
          scelerisque posuere semper, elit ipsum dignissim felis, eget lobortis
          nulla est sit amet tellus. Vivamus eget dignissim nisi. Integer magna
          dolor, eleifend ac ex in, sodales tincidunt orci. Vestibulum facilisis
          nibh et ante aliquam tempus. Nulla fermentum nunc vitae arcu dictum,
          sit amet sollicitudin ipsum condimentum. Duis vitae semper risus, eu
          egestas turpis. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Ut eu urna ac elit volutpat mollis ac sed neque. Nam porta
          ipsum quis nunc imperdiet, id fringilla lacus blandit. Nulla a euismod
          quam. Integer lorem eros, porta ac molestie non, efficitur non lacus.
          Mauris nulla mi, maximus at rutrum vitae, imperdiet sed odio. Maecenas
          blandit, ipsum id euismod hendrerit, quam erat efficitur leo, vitae
          finibus enim lorem quis justo.
        </p>
      </section>
      <section ref={competencesRef}>
        <h2>Compétences</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          vel lacus est. Nulla pretium, ex at porttitor efficitur, ex nunc
          euismod ligula, in malesuada neque magna at mauris. Sed at elementum
          urna. Donec lobortis tempus velit. Duis bibendum odio volutpat, ornare
          purus ut, pellentesque odio. Nullam quis diam vel ligula egestas
          lacinia et quis odio. Mauris aliquet venenatis erat, pulvinar
          malesuada ante pellentesque quis. Suspendisse tellus diam, venenatis
          et dignissim vel, viverra non magna. Interdum et malesuada fames ac
          ante ipsum primis in faucibus. Pellentesque suscipit malesuada
          pharetra. Duis ac ipsum eget erat dictum elementum. Nulla bibendum
          facilisis enim, ut iaculis justo pretium in. Integer blandit eget
          tortor ut commodo. Duis a aliquam mauris. Nulla facilisi. Aenean
          ultricies, turpis ut scelerisque elementum, justo libero malesuada
          lorem, in auctor dolor sapien vel augue. Etiam non lacinia sem. In et
          enim consectetur, mattis nisi quis, pharetra quam. Nam laoreet finibus
          orci, ac fringilla dolor vehicula id. In nec arcu vel metus iaculis
          ultricies a ut dolor. Suspendisse arcu justo, sollicitudin id lobortis
          et, fringilla nec leo. Sed quis enim a orci ultrices condimentum vitae
          id lectus. Ut in massa et leo interdum pulvinar quis volutpat erat.
          Sed nulla ante, fermentum a massa vel, volutpat posuere arcu. Etiam
          nunc ex, gravida vitae finibus in, egestas quis orci. Suspendisse
          feugiat risus ut orci tincidunt eleifend. Vestibulum sit amet arcu id
          orci vehicula commodo. Integer sodales elit ut risus volutpat
          sagittis. In ut risus sit amet dui lacinia dapibus. Praesent justo
          purus, varius ut metus at, molestie volutpat neque. Proin sapien
          libero, elementum at vehicula quis, facilisis vitae lorem. Nullam sit
          amet orci mi. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Vestibulum aliquet, purus et pulvinar mollis, est ex
          faucibus diam, quis mattis justo lorem eu tellus. Etiam quis elit
          ultrices, aliquam massa nec, imperdiet risus. Ut mi lectus, luctus non
          bibendum id, consectetur ut eros. Vestibulum ut odio fermentum,
          euismod ligula vitae, aliquet neque. Sed tempor vulputate erat, a
          interdum tellus semper sit amet. Nunc efficitur lacus consectetur,
          accumsan purus in, venenatis tortor. Curabitur auctor, diam
          scelerisque posuere semper, elit ipsum dignissim felis, eget lobortis
          nulla est sit amet tellus. Vivamus eget dignissim nisi. Integer magna
          dolor, eleifend ac ex in, sodales tincidunt orci. Vestibulum facilisis
          nibh et ante aliquam tempus. Nulla fermentum nunc vitae arcu dictum,
          sit amet sollicitudin ipsum condimentum. Duis vitae semper risus, eu
          egestas turpis. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Ut eu urna ac elit volutpat mollis ac sed neque. Nam porta
          ipsum quis nunc imperdiet, id fringilla lacus blandit. Nulla a euismod
          quam. Integer lorem eros, porta ac molestie non, efficitur non lacus.
          Mauris nulla mi, maximus at rutrum vitae, imperdiet sed odio. Maecenas
          blandit, ipsum id euismod hendrerit, quam erat efficitur leo, vitae
          finibus enim lorem quis justo.
        </p>
      </section>
      <section ref={contactRef}>
        <h2>Contact</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          vel lacus est. Nulla pretium, ex at porttitor efficitur, ex nunc
          euismod ligula, in malesuada neque magna at mauris. Sed at elementum
          urna. Donec lobortis tempus velit. Duis bibendum odio volutpat, ornare
          purus ut, pellentesque odio. Nullam quis diam vel ligula egestas
          lacinia et quis odio. Mauris aliquet venenatis erat, pulvinar
          malesuada ante pellentesque quis. Suspendisse tellus diam, venenatis
          et dignissim vel, viverra non magna. Interdum et malesuada fames ac
          ante ipsum primis in faucibus. Pellentesque suscipit malesuada
          pharetra. Duis ac ipsum eget erat dictum elementum. Nulla bibendum
          facilisis enim, ut iaculis justo pretium in. Integer blandit eget
          tortor ut commodo. Duis a aliquam mauris. Nulla facilisi. Aenean
          ultricies, turpis ut scelerisque elementum, justo libero malesuada
          lorem, in auctor dolor sapien vel augue. Etiam non lacinia sem. In et
          enim consectetur, mattis nisi quis, pharetra quam. Nam laoreet finibus
          orci, ac fringilla dolor vehicula id. In nec arcu vel metus iaculis
          ultricies a ut dolor. Suspendisse arcu justo, sollicitudin id lobortis
          et, fringilla nec leo. Sed quis enim a orci ultrices condimentum vitae
          id lectus. Ut in massa et leo interdum pulvinar quis volutpat erat.
          Sed nulla ante, fermentum a massa vel, volutpat posuere arcu. Etiam
          nunc ex, gravida vitae finibus in, egestas quis orci. Suspendisse
          feugiat risus ut orci tincidunt eleifend. Vestibulum sit amet arcu id
          orci vehicula commodo. Integer sodales elit ut risus volutpat
          sagittis. In ut risus sit amet dui lacinia dapibus. Praesent justo
          purus, varius ut metus at, molestie volutpat neque. Proin sapien
          libero, elementum at vehicula quis, facilisis vitae lorem. Nullam sit
          amet orci mi. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Vestibulum aliquet, purus et pulvinar mollis, est ex
          faucibus diam, quis mattis justo lorem eu tellus. Etiam quis elit
          ultrices, aliquam massa nec, imperdiet risus. Ut mi lectus, luctus non
          bibendum id, consectetur ut eros. Vestibulum ut odio fermentum,
          euismod ligula vitae, aliquet neque. Sed tempor vulputate erat, a
          interdum tellus semper sit amet. Nunc efficitur lacus consectetur,
          accumsan purus in, venenatis tortor. Curabitur auctor, diam
          scelerisque posuere semper, elit ipsum dignissim felis, eget lobortis
          nulla est sit amet tellus. Vivamus eget dignissim nisi. Integer magna
          dolor, eleifend ac ex in, sodales tincidunt orci. Vestibulum facilisis
          nibh et ante aliquam tempus. Nulla fermentum nunc vitae arcu dictum,
          sit amet sollicitudin ipsum condimentum. Duis vitae semper risus, eu
          egestas turpis. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Ut eu urna ac elit volutpat mollis ac sed neque. Nam porta
          ipsum quis nunc imperdiet, id fringilla lacus blandit. Nulla a euismod
          quam. Integer lorem eros, porta ac molestie non, efficitur non lacus.
          Mauris nulla mi, maximus at rutrum vitae, imperdiet sed odio. Maecenas
          blandit, ipsum id euismod hendrerit, quam erat efficitur leo, vitae
          finibus enim lorem quis justo.
        </p>
      </section>
    </>
  )
}
