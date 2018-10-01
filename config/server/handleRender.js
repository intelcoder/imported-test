import React from 'react'
import Helmet from 'react-helmet'
import createHistory from 'history/createMemoryHistory'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import Loadable from 'react-loadable'
import { getBundles } from 'react-loadable/webpack'

import configureStore from 'Redux/store/configureStoreProd'
import rootSaga from 'Redux/rootSaga'
import AppRoot from 'Containers/root/AppRoot'
import { renderDom } from 'Containers/root/html'
import stats from '../../dist/react-loadable.json'

const handleRender = (req, res) => {
  const port = 3333
  const host = req.get('host').replace(/\:.*/, '')
  const urlPath = req.url

  const history = createHistory({
    initialEntries: [urlPath],
  })
  // const history = createHistory()
  const store = configureStore(history, {})

  let modules = []
  const context = {}
  const htmlRoot = (
    <Provider store={store}>
      <StaticRouter location={urlPath} context={context}>
        <Loadable.Capture report={moduleName => {modules.push(moduleName)}}>
          <AppRoot />
        </Loadable.Capture>
      </StaticRouter>
    </Provider>
  )
  store
    .runSaga(rootSaga)
    .done.then(() => {
      const storeState = store.getState()
      console.log(modules, getBundles(stats, modules))
      const RTS = renderToString(htmlRoot)
      const head = Helmet.renderStatic()

      res.status(200).send(renderDom(RTS, port, host, storeState, head, getBundles(stats, modules)))
    })
    .catch(e => {
      console.log(e.message)
      res.status(500).send(e.message)
    })
  renderToString(htmlRoot)

  store.close()
}

export default handleRender
