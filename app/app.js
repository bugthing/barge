import LocalStorage from 'localStorage'
import React from 'react/addons'
import Css from './style.css'
import Content from './content'

import DockerHost from './components/DockerHost'

var dockerHost = LocalStorage.getItem('dockerHost')

if(dockerHost) {
  document.write( Content )
} else {
  React.render(<DockerHost />, document.body);
}
