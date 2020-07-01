const project = JSON.parse(sessionStorage.getItem('project')) || {
    projectZoneId: '',
    projectId: '',
    name: ''
};
const userType = sessionStorage.getItem('userType');
export default {
    state: {
        project,
        userType,
        headerName: {
            'background': '#EEF1F6',
            'font-weight': 'bold',
            'font-family': 'Microsoft YaHei',
            'color': '#333333',
            'height': '50px',
            'font-size': '14px'
        }
    },
    mutations: {
        changeProjet(state, project) {
            state.project = project;
        }
    }
};
