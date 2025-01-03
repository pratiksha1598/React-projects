import ClockHeading from "./assets/components/ClockHeading";
import ClockSlogan from "./assets/components/ClockSlogan";
import ClockTime from "./assets/components/ClockTime";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const textStyle = {
    border:'2px solid black',
    padding:'5px',

  };

return <center style={textStyle}>
  <ClockHeading></ClockHeading>
  <ClockSlogan></ClockSlogan>
  <ClockTime></ClockTime>
</center>

}

export default App;
