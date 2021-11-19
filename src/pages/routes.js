import React from 'react'
import {Switch , Route, Redirect } from 'react-router-dom'
import { NinjaPage } from './NinjaPage'

export const useRoutes = () => {
    return (
        <Switch >
            <Route path={'/ninjify'} >
                <NinjaPage />
            </Route>
        <Redirect to='/ninjify' />
        </Switch>
    )
}