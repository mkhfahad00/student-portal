import React from 'react'

function DropdownMenu() {
  return (
    <div id="menu-wrap">
      <input type="checkbox" className="toggler" />
      <div className="dots">
        <div></div>
      </div>
      <div className="menu">
        <div>
          <ul>
            <li>
              <p className="link">
                Option one
              </p>
            </li>
            <li>
              <p className="link">
                Option two
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DropdownMenu
