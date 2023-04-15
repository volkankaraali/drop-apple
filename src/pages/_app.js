// libraries
import { store } from '@/redux/store'
import { Provider } from 'react-redux'

// scss files
import '@/styles/globals.scss'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )

}
