import { 
    LOAD_FILTERS,
    SET_ACTUAL_PAGE_FILTER,
    SORT_BY_NAME_ASC,
    SORT_BY_NAME_DES,
    SORT_BY_ATTACK_ASC,
    SORT_BY_ATTACK_DES
} from './actions';

const initialState = {
    filters: [],
    subFilters: [],
    amountPages: 0,
    paged: [],
    subPaged: [],
    actualPage: 0
};

function setPreStateToFilter(max, limitByPage=15){
    let amountPages = max/limitByPage;
    let paged = []
    for ( let i=0; i<amountPages; i++ )
        paged.push(i);
    console.log("Paginas del filtro: ", amountPages);
    return {
        amountPages: amountPages,
        paged: [...paged],
        subPaged: [...paged.slice(0,10)]
    };
}

export default function filters( state=initialState, action ){
    switch(action.type){
        case LOAD_FILTERS:
            let paged = [];
            for(let i=0; i<action.payload.length/15; i++)
                paged.push(i);
            console.log('paginas del filtro : ', action.payload.length/15);
            return {
                ...state,
                filters: [...action.payload],
                subFilters: [...action.payload.slice(0,14)],
                amountPages: action.payload.length/15,
                paged: [...paged],
                subPaged: [...paged.slice(0,9)]
            };
        case SET_ACTUAL_PAGE_FILTER:
            console.log('entro');
            let setPages = [];
            if ( action.payload > 4 && action.payload<=state.amountPages )
                for ( let i=action.payload-4; i<=action.payload+4 && i<=state.amountPages; i++ )
                    setPages.push(i);
            else
                setPages = state.paged.slice(0,9);
            console.log('actualPageFilter : ',action.payload);
            return {
                ...state,
                actualPage: action.payload,
                subPaged: [...setPages],
                subFilters: [...state.filters.slice(action.payload*15, (action.payload*15)+15)]
            }
        // =======================================================================================
        case SORT_BY_NAME_ASC:
            let arrayNameAsc = state.filters.sort(function (a, b) {
                if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                else if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                else return 0;
              });
              let preStateNameAsc = setPreStateToFilter(arrayNameAsc.length);
            return{
                ...state,
                filters: [...arrayNameAsc],
                amountPages: preStateNameAsc.amountPages,
                paged: [...preStateNameAsc.paged],
                subPaged: [...preStateNameAsc.subPaged]
            };
        case SORT_BY_NAME_DES:
            let arrayNameDes = state.filters.sort(function (b, a) {
                if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                else if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                else return 0;
                });
                let preStateNameDes = setPreStateToFilter(arrayNameDes.length);
            return{
                ...state,
                filters: [...arrayNameDes],
                amountPages: preStateNameDes.amountPages,
                paged: [...preStateNameDes.paged],
                subPaged: [...preStateNameDes.subPaged]
            };
        // =======================================================================================
        case SORT_BY_ATTACK_ASC:
            let arrayAttackAsc = state.filters.sort(function (a, b) {
                if (a.attack > b.attack) return 1;
                else if (a.attack < b.attack) return -1;
                else return 0;
                });
                let preStateAttackAsc = setPreStateToFilter(arrayAttackAsc.length);
            return{
                ...state,
                filters: [...arrayAttackAsc],
                amountPages: preStateAttackAsc.amountPages,
                paged: [...preStateAttackAsc.paged],
                subPaged: [...preStateAttackAsc.subPaged]
            };
        case SORT_BY_ATTACK_DES:
            let arrayAttackDes = state.filters.sort(function (b, a) {
                if (a.attack > b.attack) return 1;
                else if (a.attack < b.attack) return -1;
                else return 0;
                });
                let preStateAttackDes = setPreStateToFilter(arrayAttackDes.length);
            return{
                ...state,
                filters: [...arrayAttackDes],
                amountPages: preStateAttackDes.amountPages,
                paged: [...preStateAttackDes.paged],
                subPaged: [...preStateAttackDes.subPaged]
            };
        default:
            return state;
    };
};