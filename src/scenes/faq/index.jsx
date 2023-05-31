import { Accordion, AccordionDetails, AccordionSummary, Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import { tokens } from '../../theme'
import Header from '../../components/Header'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const FAQ = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <>
            <Box m="20px">
                <Header title="FAQ" subtitle="Frequently asked Questions Page" />
                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant='h5' color={colors.greenAccent[500]}>
                            An Important Question
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            hi syed nouman mateen
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant='h5' color={colors.greenAccent[500]}>
                            Another Important Question
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            hi syed nouman mateen
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant='h5' color={colors.greenAccent[500]}>
                            Your Important Question
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            hi syed nouman mateen
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant='h5' color={colors.greenAccent[500]}>
                            My Important Question
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            hi syed nouman mateen
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant='h5' color={colors.greenAccent[500]}>
                            Our Important Question
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            hi syed nouman mateen
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant='h5' color={colors.greenAccent[500]}>
                            Favorite Question
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            hi syed nouman mateen
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </>
    )
}

export default FAQ
