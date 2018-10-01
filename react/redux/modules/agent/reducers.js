import { REQUEST, SUCCESS, FAILURE } from 'Redux/actions/constants'

import {
  AGENT_DATA,
  AGENTS_DATA,
  RANDOM_AGENT_DATA,
  SHUFFLE_AGENTS,
} from './actions'


const agentInitialState = {
  isFetching: false,
  agent: null,
}


export default function agentReducer(state = agentInitialState, action) {
  const reducerState = { ...state }

  switch(action.type) {
    // To Remove Data before mounting component and avoid flash of old data
    case AGENT_DATA[REQUEST]:
      reducerState.agent = null
      reducerState.isFetching = true
      break
    case AGENT_DATA[SUCCESS]:
      const responseData = action.response.data
      reducerState.agent = responseData.data
      reducerState.isFetching = false
      break
    case AGENT_DATA[FAILURE]:
      reducerState.agent = null
      reducerState.isFetching = false
      break
  }

  return reducerState
}


// List of agents
const agentsInitialState = {
  isFetching: false,
  agents: [],
}

export function agentsReducer(state = agentsInitialState, action) {
  const reducerState = { ...state }
  let responseData

  switch(action.type) {
    case AGENTS_DATA[REQUEST]:
      reducerState.isFetching = true
      break
    case AGENTS_DATA[SUCCESS]:
      responseData = action.response.data
      reducerState.agents = responseData.data.agents
      reducerState.isFetching = false
      break
    case AGENTS_DATA[FAILURE]:
      reducerState.isFetching = false
      break
  }

  return reducerState
}
