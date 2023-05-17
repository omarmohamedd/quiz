import styled from "styled-components";
import { connect } from "react-redux";
import { addQuizView } from "../../actions/QuizActions";
import { Link } from "react-router-dom";

const QuizCard = (props: any) => {
    return (
        <Link to = { props.isFormAuthorized ? "/form" : "/quiz" }>
            <CardWrapper onClick={() => props.addQuizView(props)}>
                <h3>{ props.title } quiz</h3>
            </CardWrapper>
        </Link>
    );
}

const CardWrapper = styled.div`
   height: auto;
   width: calc(100% - 5%);
   border: solid 1px #37ADB2;
   border-radius: 10px;
   padding: 15px;
   box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1);
   h3 {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.8);
   }
`

const mapStateToProps = (state: any, ownProps: any) => {
    return {
        isFormAuthorized: state.isFormAuthorized,
        
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addQuizView: (payload: any) => dispatch(addQuizView(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizCard);