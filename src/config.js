export const apiDomain = 'http://localhost:8000/api/v1/'

export const loginUrl = apiDomain + 'authenticate'

export const userUrl = apiDomain + 'user'

export const teacherUrl = apiDomain + 'teachers'

export const getHeader = function () {
    const tokenData = window.localStorage.getItem('id_token')
    const headers = {
        'Authorization' : 'Bearer ' + tokenData
    }
    return headers
}