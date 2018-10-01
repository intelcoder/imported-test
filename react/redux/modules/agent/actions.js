import { REQUEST, SUCCESS, FAILURE } from '../../actions/constants'
import { actionCreator, createRequestTypes } from '../../actions'

export const LOAD_AGENT_DATA = 'LOAD_AGENT_DATA'
export const loadAgentData = agentId => actionCreator(LOAD_AGENT_DATA, { agentId })


export const AGENT_DATA = createRequestTypes('AGENT_DATA')
export const getAgentAction = {
  request: agentId => actionCreator(AGENT_DATA[REQUEST], { agentId }),
  success: (defaults, response) => actionCreator(AGENT_DATA[SUCCESS], { response }),
  failure: (defaults, error) => actionCreator(AGENT_DATA[FAILURE], { error }),
}


// Getting list of agents
export const RELOAD_AGENTS_DATA = 'RELOAD_AGENTS_DATA'
export const reloadAgentsData = query => actionCreator(RELOAD_AGENTS_DATA, { query })

export const AGENTS_DATA = createRequestTypes('AGENTS_DATA')
export const getAgentsAction = {
  request: params => actionCreator(AGENTS_DATA[REQUEST], { params }),
  success: (defaults, response) => actionCreator(AGENTS_DATA[SUCCESS], { response }),
  failure: (defaults, error) => actionCreator(AGENTS_DATA[FAILURE], { error }),
}

export const LOAD_RANDOM_AGENTS = 'LOAD_RANDOM_AGENTS'
export const loadRandomAgents = query => actionCreator(LOAD_RANDOM_AGENTS, { query })

export const RANDOM_AGENT_DATA = createRequestTypes('RANDOM_AGENT_DATA')
export const getRandomAgentsAction = {
  request: () => actionCreator(RANDOM_AGENT_DATA[REQUEST], {}),
  success: (defaults, response) => actionCreator(RANDOM_AGENT_DATA[SUCCESS], { response }),
  failure: (defaults, error) => actionCreator(RANDOM_AGENT_DATA[FAILURE], { error }),
}

