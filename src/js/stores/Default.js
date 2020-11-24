import React, { createContext, useEffect, useMemo, useReducer } from 'react'
import { DEFAULT_START_VIEW } from '@shared/constants'
import { setBrowserStorage } from '@utils/browser'

import reducer from './reducer/default.reducer'

export const store = {
  currentView: DEFAULT_START_VIEW,
  enableNotifications: false
}

export const DefaultContext = createContext()

export function DefaultProvider({ children, initialState = {} }) {
  const [state, dispatch] = useReducer(reducer, { ...store, ...initialState })

  const toLocalStorage = useMemo(
    () => ({
      enableNotifications: state.enableNotifications
    }),
    [state.enableNotifications]
  )

  useEffect(() => {
    setBrowserStorage('local', toLocalStorage)
  }, [toLocalStorage])

  return (
    <DefaultContext.Provider value={[state, dispatch]}>
      {children}
    </DefaultContext.Provider>
  )
}