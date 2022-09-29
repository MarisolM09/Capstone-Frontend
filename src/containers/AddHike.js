import { connect } from "react-redux";
import AddHike from "../components/AddHike";
import { addHike } from "../redux/actions";

const mapStateToProps = (state) => {
    return {
      hikes: state.hikes,
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      addHike: (hike) => dispatch(addHike(hike)),

    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(AddHike); 