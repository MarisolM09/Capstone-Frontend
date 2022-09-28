import { connect } from "react-redux";
import TotalHikes from "../components/TotalHikes";

const mapStateToProps = (state) => {
  return {
    hikes: state.hikes,
  };
};

export default connect(mapStateToProps)(TotalHikes);
