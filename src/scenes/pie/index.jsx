import React from 'react'
import Header from '../../components/Header'
import { Box } from '@mui/material'
import PieChart from '../../components/PieChart'

const Pie = () => {
    return (
        <>
            <Box m="20px">
                <Header title="Pie Chart" subtitle="simple Pie Chart" />
                <Box height="70vh">
                    <PieChart />
                </Box>
            </Box>
        </>
    )
}

export default Pie
