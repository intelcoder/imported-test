

import { call, select } from 'redux-saga/effects'
import { PLURAL_AREA_TYPE } from 'Defaults/map'
import { fetchEntity } from '../../rootSaga'
import { api } from '../../services'
import {
  selectAgentId,
} from './selectors'


import {
  getAgentAction,
  // RELOAD_AGENTS_DATA,
  getAgentsAction,
  getRandomAgentsAction,
} from './actions'

const apiAgent = agentId => api.callApi(`agents/${agentId}`, {
  // mode: 'GET',
  data: {
    with: 'neighbourhoods,testimonials,listings,header_tags,languages',
  },
})
const fetchAgent = fetchEntity.bind(null, getAgentAction, apiAgent)

export function* loadAgent() {
  const agentId = yield select(selectAgentId)
  if(agentId) yield call(fetchAgent, agentId)
}
// https://api.property.ca/v1/localities/27?with=agents&limit=0

const apiAgents = ({ areaType, areaId }) => api.callApi(`${areaType}/${areaId}?with=agents&limit=0`)

const fetchAgents = fetchEntity.bind(null, getAgentsAction, apiAgents)

export function* loadAgents() {
  const userCurrentArea = yield select(state => state.userDefaults.userCurrentArea)

  let areaType = 'localities'
  let areaId = 27
  if(userCurrentArea) {
    areaType = PLURAL_AREA_TYPE[userCurrentArea.areaType]
    areaId = userCurrentArea.areaId
  }
  yield call(fetchAgents, {
    areaType,
    areaId,
  })
}

export function* watchReloadAgentsList() {
  // yield takeLatest(RELOAD_AGENTS_DATA, loadAgents)
}

// Get Random agents
// Later it will use different alias or filter
const apiRandomAgents = () => api.callApi('agents/random')

const fetchRandomAgents = fetchEntity.bind(null, getRandomAgentsAction, apiRandomAgents)

export function* loadRandomAgents() {
  yield call(fetchRandomAgents)
}

