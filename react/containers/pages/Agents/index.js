import React, { Component } from 'react'
import WithReducer from 'Components/WithReducer'
// import agentReducer from 'Modules/agent/reducers'

import importedComponent from 'react-imported-component'


const agentReducer = importedComponent(() => import('../../../redux/modules/agent/reducers'))

class AgentPage extends Component {
  render() {
    return (
      <div>Agent Page</div>
    )
  }
}


export default WithReducer('agents', agentReducer)(AgentPage)
