import { THEME_CHANGE } from '../../actions/theme'

// 默认颜色
const defaultState = {
    theme: '#098643',
}

export default function onAction(state = defaultState, action: any) {
    switch (action.type) {
        case THEME_CHANGE:
            return {
                ...state,
                theme: action.theme,
            }
        default:
            return state
    }
}
