import React from 'react'
import Header from '../../components/Header'
import { Box, useTheme } from '@mui/material'
import GeographyChart from '../../components/GeographyChart'
import { tokens } from '../../theme'

const Geography = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <>
            <Box m="20px">
                <Header title="Geography Chart" subtitle="simple Geography Chart" />
                <Box height="70vh" border={`1px solid ${colors.grey[100]}`}>
                    <GeographyChart />
                </Box>
            </Box>
        </>
    )
}

export default Geography
