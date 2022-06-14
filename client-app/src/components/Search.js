import { useRef, useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'

export default function Search({ loading }) {
    const inputRef = useRef(null)

    const onFocus = () => {
        inputRef.current.focus()
    }
    const onSearch = (e) => {
        console.log(e)
    }
    return (
        <Box
            component="div"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
                background: 'white',
                display: 'flex',
                alignItems: 'center',
                border: '1px solid rgba(224, 224, 224, 1)',
            }}
            noValidate
            autoComplete="off"
        >
            <label
                onClick={onFocus}
                style={{ width: '20px', cursor: 'pointer' }}
            >
                <SearchIcon />
            </label>
            {/* <TextField id="outlined-basic" label="Search" variant="outlined" /> */}
            <TextField
                disabled={loading}
                type="search"
                id="filled-basic"
                label="Search"
                variant="standard"
                inputRef={inputRef}
                onInput={onSearch}
            />
            {/* <TextField id="standard-basic" label="Search" variant="standard" /> */}
        </Box>
    )
}
