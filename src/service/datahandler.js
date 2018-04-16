import request from '../utils/request';

export async function getData(params) {
    return await request(`/society/trend/volunteer/activity/list`, {
        method: 'GET',
        params: params,
    });
}

export async function postData(params) {
    return await request(`/myactivities`, {
        method: 'POST',
        params: params
    });
}

export async function putData(params) {
    return await request(`/mypartyactivities`, {
      method: 'PUT',
      params: params
    });
  }
  export async function delData(params) {
    return await request(`/mypartyactivities`, {
      method: 'DELETE',
      params: params
    });
  }