import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar: React.FunctionComponent = () => (
    <nav>
        <div className="nav-wrapper purple darken-1 px-1">
            <a href="/" className="brand-logo">React + Typescript</a>
            <ul className="right hide-on-med-and-down">
                <li>
                    <NavLink to="/react-typescript-todolist">Todo list</NavLink>
                </li>
                <li>
                    <NavLink to="/react-typescript-todolist/about">Infos</NavLink>
                </li>
            </ul>
        </div>
    </nav>
)
