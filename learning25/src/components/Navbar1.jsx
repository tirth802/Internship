import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar1 = () => {
  return (
    <div><nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <Link class="nav-link" to="/home">Home <span class="sr-only">(current)</span></Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/movie">Movie</Link>
        </li>
        {/* <li class="nav-item">
              <Link class="nav-link" to="/formdemo1">
              formdemo1
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo2">
              formdemo2
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo3">
              formdemo3
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo4">
              formdemo4
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formhome1">
              formhome1
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formhome2">
              formhome2
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formhome3">
              FormHome3
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formDemo5">
              FormDemo5
              </Link>
            </li> */}
            <li class="nav-item">
              <Link class="nav-link" to="/formDemo6">
              FormDemo6
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formDemo7">
              FormDemo7
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formDemo8">
              FormDemo8
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo1">
              ApiDemo1
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/searchmovie">
              SearchMovie
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/moviedetail">
              MovieDetail
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/userlist">
              UserList
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/postapidemo1">
              PostApiDemo1
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/postapidemo2">
              PostApiDemo2
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/useeffectdemo">
              UseEffectDemo
              </Link>
            </li>
            
        
        
      </ul>
      
    </div>
  </nav></div>
  )
}
