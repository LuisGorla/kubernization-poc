import './App.css'
import { useEffect, useReducer } from 'react'

import Layout from './components/Layout'
import TableList from './components/TableList'
import Search from './components/Search'

const initialState = {
    loading: false,
    paging: {
        total: 0,
        offset: 0,
        limit: 0,
        current: 0,
        search: '',
    },
    results: [],
}

function reducer(state, action) {
    switch (action.type) {
        case 'loading':
            return { ...state, loading: true }
        case 'data-load':
            return { ...state, loading: false, results: [] }
        default:
            throw new Error()
    }
}

const getData = async () => {
    const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts?limit=10&offset=1'
    )
    const json = await response.json()
    return json
}

export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        dispatch({ type: 'loading' })
        setTimeout(() => {
            dispatch({ type: 'data-load' })
        }, 5000)
    }, [])

    return (
        <Layout title="Poc Kubernetes">
            <Search loading={state.loading}></Search>
            <TableList loading={state.loading}></TableList>
        </Layout>
    )
}
