import LocalStorage from 'localStorage'
import React from 'react'
import Css from './style.css'
import Content from './content'

var dockerHost = LocalStorage.getItem('dockerHost')

if(dockerHost) {
  document.write( Content )
} else {
  document.write( 'Get docker host' )
}
