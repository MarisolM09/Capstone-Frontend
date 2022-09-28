import { connect } from "react-redux";
import Dashboard from "../components/Dashboard";
import { removeHike } from "../redux/actions";

const mapStateToProps = (state) => {
    return {
      user: state.user,
      hikes: state.hikes,
  
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      removeHike: (index) => dispatch(removeHike(index))
     
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
