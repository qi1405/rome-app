import { TextField } from "@material-ui/core";

export default function TextBox() {
  return (
    <section>
      <div><h1>REPORT</h1></div>
      <div>
        <form noValidate autoComplete="off" style={{ margin: "1rem" }}>
          <TextField
            label="Write the report here"
            variant="outlined"
            fullWidth
            required
            multiline
            rows={6}
          />
        </form>
      </div>
    </section>
  );
}
