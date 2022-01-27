import { connect } from "react-redux";
import BlocksOfInfoblocks from "./blocksOfInfoblocks";


const CHANGE_CURRENT_INFOBLOCKS = 'CHANGE_CURRENT_INFOBLOCKS';
const CHANGE_CURRENT_ER = 'CHANGE_CURRENT_ER';
const CHANGE_CURRENT_PAKETS_ER = 'CHANGE_CURRENT_PAKETS_ER';
const CHANGE_CURRENT_LT = 'CHANGE_CURRENT_LT';
const CHANGE_CURRENT_FREE_BLOCKS = 'CHANGE_CURRENT_FREE_BLOCKS';
let mapStateToProps = (state) => {

    return {
        currentTheme: state.theme.style[state.theme.indexOfTheme],
        allBlocksFromState: [
            {
                typeOfAction: CHANGE_CURRENT_INFOBLOCKS,
                arrayForRender: state.infoblocks
            },
            
            {
                typeOfAction: CHANGE_CURRENT_PAKETS_ER,
                arrayForRender: state.encyclopedias[0]
            },
            {
                typeOfAction: CHANGE_CURRENT_ER,
                arrayForRender: state.encyclopedias[1]
            },
            
            {
                typeOfAction: CHANGE_CURRENT_LT,
                arrayForRender: state.legalTech
            },

            {
                typeOfAction: CHANGE_CURRENT_FREE_BLOCKS,
                arrayForRender: state.freeBlocks
            },
            {
                typeOfAction: CHANGE_CURRENT_FREE_BLOCKS,
                arrayForRender: state.consalting
            },
        ],

    }
}
let mapDispatchToProps = (dispatch) => {
    return {


    }
}
const BlocksOfInfoblocksContainer = connect(mapStateToProps)(BlocksOfInfoblocks)

export default BlocksOfInfoblocksContainer
