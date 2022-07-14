import { TextField, Button, Select, MenuItem, InputLabel, FormControl } from "@mui/material";

const SearchBar = ({values, handleChange, callFetch}) => {

    const handleSubmit = (e) => {
        if(values.searchTerm !== "" && values.amount !== 0){
            callFetch();
        }
        e.preventDefault();
    }

    return (
    <>
        <form style={styles.form} onSubmit={handleSubmit}>
            <TextField
                placeholder="Search Term..."
                label="Search for images"
                onChange={e => handleChange('searchTerm', e)}
                defaultValue={values.searchTerm}
            />
            <FormControl>
                <InputLabel id="demo-simple-select-label">Amount</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={values.amount}
                    label="Amount"
                    onChange={(e) => handleChange('amount', e)}
                >
                    <MenuItem value={5}>Five</MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>

            <Button
                color="primary"
                variant="contained"
                type="submit"
            >
                Generate
            </Button>
        </form>
        <div className="underline" style={styles.underline}></div>
    </>
    )
}

const styles= {
    form: {
        marginTop: "80px",
        maxWidth: "700px",
        padding: "10px 20px",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "10px",
    },
    underline: {
        height: "2px",
        backgroundColor: "rgba(110, 110, 110, 0.6)",
        margin: "10px 20px",
    }
};

export default SearchBar;