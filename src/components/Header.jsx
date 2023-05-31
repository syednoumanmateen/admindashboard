
import React from 'react'
import Typography from '@mui/material/Typography'
import { tokens } from '../theme'
import { Box, useTheme } from '@mui/material'


const Header = ({ title, subtitle }) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    return (
        <>
            <Box mb="30px">
                <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{ mb: "5px" }}>{title}</Typography>
                <Typography variant="h5" color={colors.greenAccent[400]}>{subtitle}</Typography>
            </Box>
        </>
    )
}

export default Header
