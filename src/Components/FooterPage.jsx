import {  useState } from 'react'
import '../Styles/FooterPage.css'

export function FooterPage(){
  const [open, setOpen] = useState(false)

  function openFooter() {
    if (open){
      setOpen(false)
      return
    }
    setOpen(true)
  }
  return(

    <footer>
      <div className='dropup-menu'>
      <button className={`button-footer ${open? "expanded" : ""}`} onClick={openFooter}>
          <span className='button-footer-text'>Mas informacion</span>
          <svg className={`arrow-footer-down ${open? 'arrow-footer-down' : ""}`} aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="rgba(0, 0, 255, 1)"><path className='dropdwon-arrow' d="M9.35229 3.70447L6.00004 7.05672L2.64779 3.70447L1.85229 4.49996L6.00004 8.64771L10.1478 4.49996L9.35229 3.70447Z" fill="rgba(0, 0, 0, 0.9)"></path></svg>
        </button>
        <div className={`footer-hided-menu ${open? "expanded" : ""}`}>Thanks for visit my page!</div>

      </div>
      <div className='footer-info'>
      </div>
    </footer>
  )
}
