import { requesetRefresh } from "../../../lib/requestApi";

export const addAttendanceChangeStudentErrorHandler = callback => async error => {
  switch (error) {
    case 400: {
      alert("입력된 값들 중 입력되지 않은 값이 있습니다.");
    }
    case 401: {
    }
    case 403: {
      alert("결과를 찾을 수 없습니다.");
    }
    case 404: {
      alert("결과를 찾을 수 없습니다.");
    }
    case 410: {
      await requesetRefresh(callback);
    }
  }
};

export const deleteAttendanceChangeListErrorHandler = callback => async error => {
  switch (error) {
    case 400: {
      alert("없는 데이터 입니다.");
    }
    case 410: {
      await requesetRefresh(callback);
    }
  }
};

export const putAttendanceChangeStudentErrorHandler = callback => async error => {
  switch (error) {
    case 400: {
      alert("입력된 값들 중 입력되지 않은 값이 있습니다.");
    }
    case 401: {
    }
    case 403: {
      alert("결과를 찾을 수 없습니다.");
    }
    case 404: {
      alert("결과를 찾을 수 없습니다.");
    }
    case 410: {
      await requesetRefresh(callback);
    }
  }
};

export const getAllAttendanceChangeListErrorHandler = callback => async error => {
  switch (error) {
    case 400: {
      alert("입력된 값들 중 입력되지 않은 값이 있습니다.");
    }
    case 401: {
    }
    case 403: {
      alert("결과를 찾을 수 없습니다.");
    }
    case 404: {
      alert("결과를 찾을 수 없습니다.");
    }
    case 410: {
      await requesetRefresh(callback);
    }
  }
};
