import { Box, TextField } from "@mui/material";
import Button from "./Button";

const BasicTextFields = (
    { title, setEmail, setPassword, handleAction }: 
    { title: string, setEmail: any, setPassword: any, handleAction: any }) => {
    return (
        <div>
            <div className="heading-container">
                <h3>{title}</h3>
            </div>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }}
                noValidate
                autoComplete="off">
                <TextField
                    id="email"
                    label="Enter the email"
                    variant="outlined"
                    onChange={(e) => setEmail(e.target.value)} 
                    required
                    type="email" />
                <TextField
                    id="password"
                    label="Enter the password"
                    variant="outlined"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    type="password" />
                <Button title={title} handleAction={handleAction} />
            </Box>
        </div>
    )
}

export default BasicTextFields;