import React from 'react'
import 'components/dropdownMenu/styles.css'
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
                Edit
              </p>
            </li>
            <li>
              <p className="link">
                Delete
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DropdownMenu
